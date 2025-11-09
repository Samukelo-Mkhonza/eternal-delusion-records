import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import AboutLabel from './components/AboutLabel';
import Albums from './components/Albums';
import ArtistSection from './components/ArtistSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Remove preload class to enable transitions after page loads
    document.body.classList.add('preload');

    setTimeout(() => {
      document.body.classList.remove('preload');
    }, 100);
  }, []);

  return (
    <div className="App">
      <Navigation />
      <Hero />
      <AboutLabel />
      <Albums />
      <ArtistSection />
      <Footer />
    </div>
  );
}

export default App;
