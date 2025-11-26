#!/bin/bash

# Deploy Eternal Delusion Records website to AWS S3 + CloudFront
# This script creates/updates the CloudFormation stack, builds the React app,
# and deploys it to S3 with CloudFront cache invalidation

set -e  # Exit on error

# Configuration
STACK_NAME="eternal-delusion-records-stack"
PROJECT_NAME="eternal-delusion-records"
REGION="${AWS_REGION:-us-east-1}"  # Default to us-east-1 if not set
TEMPLATE_FILE="cloudformation-template.yaml"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Helper functions
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

# Check prerequisites
print_info "Checking prerequisites..."

if ! command -v aws &> /dev/null; then
    print_error "AWS CLI is not installed. Please install it first."
    print_info "Visit: https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html"
    exit 1
fi

if ! command -v npm &> /dev/null; then
    print_error "npm is not installed. Please install Node.js and npm first."
    exit 1
fi

# Check AWS credentials
if ! aws sts get-caller-identity &> /dev/null; then
    print_error "AWS credentials are not configured. Please run 'aws configure' first."
    exit 1
fi

print_success "Prerequisites check passed!"

# Get AWS Account ID
AWS_ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
print_info "AWS Account ID: $AWS_ACCOUNT_ID"
print_info "Region: $REGION"

# Step 1: Install dependencies
print_info "Installing npm dependencies..."
npm install

# Step 2: Build the React application
print_info "Building React application..."
npm run build

if [ ! -d "build" ]; then
    print_error "Build directory not found. Build may have failed."
    exit 1
fi

print_success "React application built successfully!"

# Step 3: Deploy or update CloudFormation stack
print_info "Deploying CloudFormation stack..."

# Check if stack exists
if aws cloudformation describe-stacks --stack-name "$STACK_NAME" --region "$REGION" &> /dev/null; then
    print_info "Stack exists. Updating..."
    STACK_ACTION="update-stack"

    # Try to update the stack
    if aws cloudformation update-stack \
        --stack-name "$STACK_NAME" \
        --template-body "file://$TEMPLATE_FILE" \
        --parameters ParameterKey=ProjectName,ParameterValue="$PROJECT_NAME" \
        --region "$REGION" &> /dev/null; then

        print_info "Waiting for stack update to complete..."
        aws cloudformation wait stack-update-complete \
            --stack-name "$STACK_NAME" \
            --region "$REGION"
        print_success "Stack updated successfully!"
    else
        # Check if the error is "No updates are to be performed"
        if aws cloudformation describe-stacks --stack-name "$STACK_NAME" --region "$REGION" &> /dev/null; then
            print_warning "No updates to be performed on the stack."
        else
            print_error "Stack update failed."
            exit 1
        fi
    fi
else
    print_info "Stack does not exist. Creating..."
    aws cloudformation create-stack \
        --stack-name "$STACK_NAME" \
        --template-body "file://$TEMPLATE_FILE" \
        --parameters ParameterKey=ProjectName,ParameterValue="$PROJECT_NAME" \
        --region "$REGION"

    print_info "Waiting for stack creation to complete (this may take several minutes)..."
    aws cloudformation wait stack-create-complete \
        --stack-name "$STACK_NAME" \
        --region "$REGION"
    print_success "Stack created successfully!"
fi

# Step 4: Get stack outputs
print_info "Retrieving stack outputs..."

BUCKET_NAME=$(aws cloudformation describe-stacks \
    --stack-name "$STACK_NAME" \
    --region "$REGION" \
    --query "Stacks[0].Outputs[?OutputKey=='WebsiteBucketName'].OutputValue" \
    --output text)

DISTRIBUTION_ID=$(aws cloudformation describe-stacks \
    --stack-name "$STACK_NAME" \
    --region "$REGION" \
    --query "Stacks[0].Outputs[?OutputKey=='CloudFrontDistributionId'].OutputValue" \
    --output text)

WEBSITE_URL=$(aws cloudformation describe-stacks \
    --stack-name "$STACK_NAME" \
    --region "$REGION" \
    --query "Stacks[0].Outputs[?OutputKey=='WebsiteURL'].OutputValue" \
    --output text)

print_info "Bucket Name: $BUCKET_NAME"
print_info "Distribution ID: $DISTRIBUTION_ID"

# Step 5: Sync build files to S3
print_info "Uploading files to S3..."

aws s3 sync build/ "s3://$BUCKET_NAME" \
    --region "$REGION" \
    --delete \
    --cache-control "public, max-age=31536000, immutable" \
    --exclude "index.html" \
    --exclude "*.json"

# Upload index.html and manifest files with shorter cache
aws s3 cp build/index.html "s3://$BUCKET_NAME/index.html" \
    --region "$REGION" \
    --cache-control "public, max-age=0, must-revalidate" \
    --content-type "text/html"

if [ -f "build/manifest.json" ]; then
    aws s3 cp build/manifest.json "s3://$BUCKET_NAME/manifest.json" \
        --region "$REGION" \
        --cache-control "public, max-age=0, must-revalidate" \
        --content-type "application/json"
fi

if [ -f "build/asset-manifest.json" ]; then
    aws s3 cp build/asset-manifest.json "s3://$BUCKET_NAME/asset-manifest.json" \
        --region "$REGION" \
        --cache-control "public, max-age=0, must-revalidate" \
        --content-type "application/json"
fi

print_success "Files uploaded to S3 successfully!"

# Step 6: Invalidate CloudFront cache
print_info "Invalidating CloudFront cache..."

INVALIDATION_ID=$(aws cloudfront create-invalidation \
    --distribution-id "$DISTRIBUTION_ID" \
    --paths "/*" \
    --query "Invalidation.Id" \
    --output text)

print_info "Invalidation ID: $INVALIDATION_ID"
print_info "Waiting for invalidation to complete..."

aws cloudfront wait invalidation-completed \
    --distribution-id "$DISTRIBUTION_ID" \
    --id "$INVALIDATION_ID"

print_success "CloudFront cache invalidated successfully!"

# Final output
echo ""
print_success "========================================"
print_success "  Deployment completed successfully!"
print_success "========================================"
echo ""
print_info "Your website is now live at:"
echo -e "${GREEN}${WEBSITE_URL}${NC}"
echo ""
print_warning "Note: CloudFront distribution may take 10-15 minutes to fully propagate globally."
echo ""
print_info "Stack Name: $STACK_NAME"
print_info "S3 Bucket: $BUCKET_NAME"
print_info "CloudFront Distribution: $DISTRIBUTION_ID"
print_info "Region: $REGION"
echo ""
