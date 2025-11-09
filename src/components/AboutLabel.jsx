import React from 'react';
import { FaRecordVinyl, FaMicrophone, FaHeart, FaMapMarkerAlt } from 'react-icons/fa';

const AboutLabel = () => {
  const features = [
    {
      icon: <FaRecordVinyl className="text-4xl mb-4" />,
      title: 'INDEPENDENT',
      description: 'Built on dreams that never die, we create music with complete artistic freedom.'
    },
    {
      icon: <FaMicrophone className="text-4xl mb-4" />,
      title: 'AUTHENTIC',
      description: 'Real voices telling real stories, reaching for higher meaning through hip-hop.'
    },
    {
      icon: <FaHeart className="text-4xl mb-4" />,
      title: 'PASSIONATE',
      description: 'Every track is crafted with dedication, love, and unwavering commitment to the art.'
    }
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20 border-t border-white/10">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight">
            ABOUT THE LABEL
          </h2>
          <div className="h-1 w-24 bg-white mx-auto mb-8"></div>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-medium max-w-4xl mx-auto">
            Eternal Delusion Records is an independent hip-hop label built on dreams that
            never die. Founded in Harding, KwaZulu-Natal, the label represents
            voices reaching for higher meaning through music and storytelling.
          </p>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 mt-6 text-gray-300">
            <FaMapMarkerAlt className="text-xl" />
            <p className="text-sm sm:text-base md:text-lg font-medium">
              Harding, KwaZulu-Natal, South Africa
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-8 text-center transform transition-all duration-500 hover:scale-105 hover:bg-white/10 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex justify-center text-white/90">
                {feature.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-black mb-3 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base leading-relaxed font-medium text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out both;
        }
      `}</style>
    </section>
  );
};

export default AboutLabel;
