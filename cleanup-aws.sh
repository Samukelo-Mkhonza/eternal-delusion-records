#!/bin/bash

# Cleanup script to remove Eternal Delusion Records AWS resources
# This script empties the S3 bucket and deletes the CloudFormation stack

set -e

# Configuration
STACK_NAME="eternal-delusion-records-stack"
REGION="${AWS_REGION:-us-east-1}"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

print_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    print_error "AWS CLI is not installed."
    exit 1
fi

# Check if stack exists
if ! aws cloudformation describe-stacks --stack-name "$STACK_NAME" --region "$REGION" &> /dev/null; then
    print_error "Stack '$STACK_NAME' does not exist in region $REGION."
    exit 1
fi

# Confirm deletion
print_warning "This will delete the following resources:"
print_warning "- CloudFormation Stack: $STACK_NAME"
print_warning "- S3 Bucket and all its contents"
print_warning "- CloudFront Distribution"
echo ""
read -p "Are you sure you want to continue? (yes/no): " -r
echo ""

if [[ ! $REPLY =~ ^[Yy][Ee][Ss]$ ]]; then
    print_info "Cleanup cancelled."
    exit 0
fi

# Get bucket name
print_info "Getting bucket name..."
BUCKET_NAME=$(aws cloudformation describe-stacks \
    --stack-name "$STACK_NAME" \
    --region "$REGION" \
    --query "Stacks[0].Outputs[?OutputKey=='WebsiteBucketName'].OutputValue" \
    --output text)

if [ -z "$BUCKET_NAME" ]; then
    print_error "Could not retrieve bucket name from stack."
    exit 1
fi

print_info "Bucket Name: $BUCKET_NAME"

# Empty S3 bucket
print_info "Emptying S3 bucket..."
aws s3 rm "s3://$BUCKET_NAME" --recursive --region "$REGION"
print_success "S3 bucket emptied!"

# Delete all object versions (if versioning is enabled)
print_info "Deleting all object versions..."
aws s3api list-object-versions \
    --bucket "$BUCKET_NAME" \
    --query 'Versions[].{Key:Key,VersionId:VersionId}' \
    --output json | \
jq -r '.[] | "--key \"\(.Key)\" --version-id \(.VersionId)"' | \
while read -r line; do
    if [ -n "$line" ]; then
        aws s3api delete-object --bucket "$BUCKET_NAME" $line --region "$REGION" || true
    fi
done

# Delete all delete markers
aws s3api list-object-versions \
    --bucket "$BUCKET_NAME" \
    --query 'DeleteMarkers[].{Key:Key,VersionId:VersionId}' \
    --output json | \
jq -r '.[] | "--key \"\(.Key)\" --version-id \(.VersionId)"' | \
while read -r line; do
    if [ -n "$line" ]; then
        aws s3api delete-object --bucket "$BUCKET_NAME" $line --region "$REGION" || true
    fi
done

print_success "All object versions deleted!"

# Delete CloudFormation stack
print_info "Deleting CloudFormation stack..."
aws cloudformation delete-stack \
    --stack-name "$STACK_NAME" \
    --region "$REGION"

print_info "Waiting for stack deletion to complete (this may take several minutes)..."
aws cloudformation wait stack-delete-complete \
    --stack-name "$STACK_NAME" \
    --region "$REGION"

print_success "Stack deleted successfully!"

echo ""
print_success "========================================"
print_success "  Cleanup completed successfully!"
print_success "========================================"
echo ""
print_info "All AWS resources have been removed."
echo ""
