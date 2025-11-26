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

### Deployment Options

This React app can be deployed to various platforms:
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
