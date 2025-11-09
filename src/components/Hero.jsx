import React from 'react';
import { FaMusic, FaChevronDown } from 'react-icons/fa';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-16 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-white/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-white/10 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-white/15 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-white/20 rounded-full animate-float-delayed"></div>
      </div>

      <div className="max-w-5xl relative z-10 animate-fade-in">
        {/* Icon */}
        <div className="mb-8 animate-pulse-slow">
          <FaMusic className="text-6xl md:text-8xl mx-auto text-white/90" />
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-4 tracking-tight leading-none animate-slide-up">
          ETERNAL DELUSION
        </h1>
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tight leading-none animate-slide-up-delayed">
          RECORDS
        </h2>

        <div className="h-1 w-32 bg-white mx-auto mb-8 animate-expand"></div>

        <p className="text-lg sm:text-xl md:text-2xl font-bold tracking-wide mt-8 animate-fade-in-delayed">
          Reach Beyond the Clouds
        </p>

        <p className="text-sm sm:text-base md:text-lg font-medium tracking-wide mt-6 text-gray-300 animate-fade-in-delayed max-w-2xl mx-auto">
          Independent Hip-Hop Label | Harding, KwaZulu-Natal
        </p>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer bg-transparent border-none text-white/70 hover:text-white transition-colors duration-300"
        aria-label="Scroll down"
      >
        <FaChevronDown className="text-3xl" />
      </button>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-delayed {
          0%, 30% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-up {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-up-delayed {
          0%, 20% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes expand {
          from {
            width: 0;
          }
          to {
            width: 8rem;
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-30px) translateX(-10px);
          }
        }
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.6;
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-fade-in-delayed {
          animation: fade-in-delayed 1.5s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        .animate-slide-up-delayed {
          animation: slide-up-delayed 1s ease-out;
        }
        .animate-expand {
          animation: expand 1.5s ease-out 0.5s both;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
