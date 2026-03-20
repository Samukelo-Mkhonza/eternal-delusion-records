import { useEffect, useRef, useCallback } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ArtistSection from './components/ArtistSection';
import Albums from './components/Albums';
import AboutLabel from './components/AboutLabel';
import News from './components/News';
import DemoSubmission from './components/DemoSubmission';
import Footer from './components/Footer';

function App() {
  const cursorRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (cursorRef.current) {
      cursorRef.current.style.left = e.clientX + 'px';
      cursorRef.current.style.top = e.clientY + 'px';
    }
  }, []);

  const handleMouseOver = useCallback((e) => {
    if (cursorRef.current && (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button'))) {
      cursorRef.current.classList.add('cursor-hover');
    }
  }, []);

  const handleMouseOut = useCallback(() => {
    if (cursorRef.current) {
      cursorRef.current.classList.remove('cursor-hover');
    }
  }, []);

  useEffect(() => {
    // Preload transition prevention
    document.body.classList.add('preload');
    setTimeout(() => {
      document.body.classList.remove('preload');
    }, 100);

    // Scroll reveal observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    // Custom cursor events
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [handleMouseMove, handleMouseOver, handleMouseOut]);

  return (
    <div className="App">
      <div ref={cursorRef} className="custom-cursor"></div>
      <Navigation />
      <Hero />
      <ArtistSection />
      <Albums />
      <AboutLabel />
      <News />
      <DemoSubmission />
      <Footer />
    </div>
  );
}

export default App;
