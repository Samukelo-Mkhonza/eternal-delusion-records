# Eternal Delusion Records

Official website for Eternal Delusion Records, an independent hip-hop record label based in Harding, KwaZulu-Natal.

## About

Eternal Delusion Records is an independent hip-hop label dedicated to showcasing talented artists and delivering quality music. Our tagline "Reach Beyond the Clouds" embodies our mission to push creative boundaries and elevate artists to new heights.

## Features

- **Responsive Design**: Fully responsive layout optimized for all device sizes
- **Modern UI**: Clean, dark-themed interface with smooth animations
- **Artist Showcase**: Dedicated section featuring label artists
- **Album Gallery**: Display of released albums and projects
- **Smooth Navigation**: Seamless scrolling between sections
- **Performance Optimized**: Fast loading times with optimized assets

## Tech Stack

- **React** (v19.2.0) - Frontend framework
- **Tailwind CSS** (v3.4.17) - Utility-first CSS framework
- **React Icons** (v5.5.0) - Icon library
- **Create React App** - Build tooling and configuration

## Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/eternal-delusion-records.git
```

2. Navigate to the project directory:
```bash
cd eternal-delusion-records
```

3. Install dependencies:
```bash
npm install
```

## Available Scripts

### Development

Start the development server:
```bash
npm start
```
Runs the app in development mode at [http://localhost:3000](http://localhost:3000). The page will reload when you make changes.

### Testing

Run the test suite:
```bash
npm test
```
Launches the test runner in interactive watch mode.

### Production Build

Create a production build:
```bash
npm run build
```
Builds the app for production to the `build` folder. The build is minified and optimized for best performance.

## Project Structure

```
eternal-delusion-records/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── AboutLabel.jsx
│   │   ├── Albums.jsx
│   │   ├── ArtistSection.jsx
│   │   └── Footer.jsx
│   ├── App.js          # Main application component
│   ├── index.js        # Application entry point
│   └── index.css       # Global styles and Tailwind directives
├── package.json
└── tailwind.config.js  # Tailwind CSS configuration
```

## Development

### Adding New Components

Components are located in the `src/components/` directory. Each component is self-contained and can be imported into the main [App.js](src/App.js) file.

### Styling

This project uses Tailwind CSS for styling. Custom styles and Tailwind configurations can be found in:
- [tailwind.config.js](tailwind.config.js) - Tailwind configuration
- [src/index.css](src/index.css) - Global styles and Tailwind directives

### Custom Animations

Custom CSS animations are defined inline within components using the `<style jsx>` syntax. Global animations are defined in [src/index.css](src/index.css).

## Deployment

### Build for Production

```bash
npm run build
```

The optimized production build will be created in the `build/` folder, ready for deployment.

### AWS Deployment (S3 + CloudFront)

This project includes automated deployment to AWS using S3 for hosting and CloudFront for content delivery.

#### Prerequisites

1. **AWS Account**: You need an active AWS account
2. **AWS CLI**: Install the AWS Command Line Interface
   - Download: [AWS CLI Installation Guide](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
   - Verify installation: `aws --version`

3. **AWS Credentials**: Configure your AWS credentials
   ```bash
   aws configure
   ```
   Provide:
   - AWS Access Key ID
   - AWS Secret Access Key
   - Default region (e.g., `us-east-1`)
   - Default output format (e.g., `json`)

4. **Node.js and npm**: Required for building the React app

#### Deployment Steps

1. **Make the deployment script executable** (Linux/macOS/Git Bash):
   ```bash
   chmod +x deploy-to-aws.sh
   ```

2. **Run the deployment script**:
   ```bash
   ./deploy-to-aws.sh
   ```

   Or on Windows (using Git Bash):
   ```bash
   bash deploy-to-aws.sh
   ```

3. **What the script does**:
   - Validates prerequisites (AWS CLI, npm, AWS credentials)
   - Installs npm dependencies
   - Builds the React application
   - Creates or updates the CloudFormation stack
   - Uploads build files to S3
   - Invalidates CloudFront cache
   - Displays the website URL

4. **Access your website**:
   - The script will output a CloudFront URL (e.g., `https://d123456789.cloudfront.net`)
   - The website will be live at this URL
   - Note: CloudFront distribution may take 10-15 minutes to fully propagate globally

#### AWS Resources Created

The CloudFormation template creates the following resources:

- **S3 Bucket**: Stores the static website files with versioning enabled
- **CloudFront Distribution**: CDN for fast global content delivery
- **Origin Access Control (OAC)**: Secure access from CloudFront to S3
- **S3 Bucket Policy**: Allows CloudFront to read objects from the bucket

#### Configuration

You can customize the deployment by modifying these files:

- [cloudformation-template.yaml](cloudformation-template.yaml) - AWS infrastructure configuration
- [deploy-to-aws.sh](deploy-to-aws.sh) - Deployment script settings

#### Environment Variables

Optional environment variables:

- `AWS_REGION`: Set AWS region (default: `us-east-1`)
  ```bash
  export AWS_REGION=eu-west-1
  ./deploy-to-aws.sh
  ```

#### Updating the Website

To update your website after making changes:

1. Make your code changes
2. Run the deployment script again:
   ```bash
   ./deploy-to-aws.sh
   ```

The script will automatically:
- Build the updated application
- Upload new files to S3
- Invalidate the CloudFront cache
- Keep the same CloudFront URL

#### Cleanup / Remove Resources

To completely remove all AWS resources and avoid charges:

1. **Make the cleanup script executable**:
   ```bash
   chmod +x cleanup-aws.sh
   ```

2. **Run the cleanup script**:
   ```bash
   ./cleanup-aws.sh
   ```

   This will:
   - Empty the S3 bucket
   - Delete all file versions
   - Remove the CloudFormation stack
   - Delete the CloudFront distribution

#### Costs

Estimated AWS costs:

- **S3**: ~$0.023 per GB/month (first 50 TB)
- **CloudFront**: Free tier includes 1 TB data transfer out per month
- **CloudFront Requests**: Free tier includes 10 million HTTP/HTTPS requests per month

For a small website with moderate traffic, costs are typically under $1-5 per month.

#### Troubleshooting

**Error: "AWS CLI is not installed"**
- Install the AWS CLI from the [official guide](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)

**Error: "AWS credentials are not configured"**
- Run `aws configure` and enter your credentials

**Error: "Stack already exists"**
- The script will automatically update the existing stack
- If issues persist, delete the stack manually or use the cleanup script

**Website shows 403 or 404 errors**
- Wait 10-15 minutes for CloudFront to fully propagate
- Check that the CloudFormation stack completed successfully
- Verify files were uploaded to S3: `aws s3 ls s3://YOUR-BUCKET-NAME`

**Changes not visible after deployment**
- CloudFront caching may take a few minutes to invalidate
- Try hard refresh: Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)
- Check invalidation status in AWS Console

### Other Deployment Options

This React app can also be deployed to other platforms:
- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the build folder or connect via GitHub
- **GitHub Pages**: Use `gh-pages` package for deployment
- **Traditional Hosting**: Upload the build folder to any web hosting service

For detailed deployment instructions, see the [Create React App deployment documentation](https://facebook.github.io/create-react-app/docs/deployment).

## Browser Support

This project supports all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

If you'd like to contribute to this project:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is private and proprietary to Eternal Delusion Records.

## Contact

For inquiries about Eternal Delusion Records:
- Location: Harding, KwaZulu-Natal
- Label Focus: Independent Hip-Hop

---

Built with React and Tailwind CSS
