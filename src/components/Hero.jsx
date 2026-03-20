import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

const Hero = () => {
  const scrollToArtists = () => {
    const section = document.getElementById('artists');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-16 overflow-hidden bg-dark">
      {/* Grain / noise overlay */}
      <div className="grain-overlay absolute inset-0 pointer-events-none"></div>

      {/* Cinematic gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blood/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/5 rounded-full blur-3xl animate-float-delay"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-crimson/5 rounded-full blur-3xl"></div>
      </div>

      {/* Subtle radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#0a0a0a_100%)] pointer-events-none z-[2]"></div>

      <div className="max-w-6xl relative z-10">
        <h1 className="font-display text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] leading-none tracking-wider text-offwhite animate-slide-up text-shadow-crimson">
          ETERNAL DELUSION
        </h1>
        <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none tracking-[0.3em] text-offwhite/80 mt-2 animate-slide-up" style={{ animationDelay: '0.15s' }}>
          RECORDS
        </h2>

        <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-8 mb-8 animate-expand"></div>

        <p className="font-body text-lg sm:text-xl md:text-2xl italic text-gold tracking-wide animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Sound That Haunts You
        </p>

        <p className="font-body text-sm sm:text-base md:text-lg font-medium tracking-widest mt-4 text-offwhite/50 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          FROM THE TOWNSHIP. FOR THE WORLD.
        </p>
      </div>

      <button
        onClick={scrollToArtists}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer bg-transparent border-none text-crimson/70 hover:text-gold transition-colors duration-300 z-10"
        aria-label="Scroll down"
      >
        <FaChevronDown className="text-3xl" />
      </button>
    </section>
  );
};

export default Hero;
