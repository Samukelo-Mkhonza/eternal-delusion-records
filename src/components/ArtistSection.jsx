import React from 'react';
import { FaInstagram, FaYoutube, FaTwitter, FaUser, FaMapMarkerAlt, FaCalendar } from 'react-icons/fa';

const ArtistSection = () => {
  const artists = [
    {
      name: 'ASSIGN',
      location: 'Harding, KZN',
      since: '2013',
      bio: 'A rapper from Harding who began at 13 and now releases his introspective mixtape "There\'s a Right Time for Everything," executive-produced by Sam. Known for authentic storytelling and introspective lyricism.',
      image: null, // Placeholder for artist photo
      social: {
        instagram: 'https://instagram.com',
        youtube: 'https://youtube.com',
        twitter: 'https://twitter.com'
      },
      tags: ['Rapper', 'Lyricist', 'Storyteller']
    }
    // Add more artists as they're signed
  ];

  return (
    <section id="artists" className="min-h-screen flex items-center justify-center px-4 py-20 border-t border-white/10">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight">
            OUR ARTISTS
          </h2>
          <div className="h-1 w-24 bg-white mx-auto mb-8"></div>
          <p className="text-base sm:text-lg md:text-xl font-medium text-gray-300 max-w-3xl mx-auto">
            Meet the talented voices shaping the sound of Eternal Delusion Records.
          </p>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 gap-8">
          {artists.map((artist, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl overflow-hidden transform transition-all duration-500 hover-scale-102 hover:shadow-2xl hover:shadow-white/10 animate-slide-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col lg:flex-row">
                {/* Artist Image */}
                <div className="lg:w-1/3 h-64 lg:h-auto bg-gradient-to-br from-gray-800 to-black flex items-center justify-center relative overflow-hidden">
                  {artist.image ? (
                    <img
                      src={artist.image}
                      alt={artist.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-white/30 transition-all duration-500 group-hover:text-white/50">
                      <FaUser className="text-8xl mb-4" />
                      <p className="text-sm font-bold tracking-wider">ARTIST PHOTO</p>
                    </div>
                  )}

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                {/* Artist Details */}
                <div className="lg:w-2/3 p-6 sm:p-8 md:p-10">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 tracking-tight">
                    {artist.name}
                  </h3>

                  {/* Info Pills */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm font-medium">
                      <FaMapMarkerAlt />
                      <span>{artist.location}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm font-medium">
                      <FaCalendar />
                      <span>Since {artist.since}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {artist.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-white/5 px-3 py-1 rounded text-xs font-bold tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-base sm:text-lg leading-relaxed font-medium text-gray-300 mb-8">
                    {artist.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex gap-4 pt-6 border-t border-white/10">
                    <a
                      href={artist.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center justify-center w-12 h-12 bg-white/5 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 rounded-lg transition-all duration-300"
                      aria-label="Instagram"
                    >
                      <FaInstagram className="text-xl" />
                    </a>

                    <a
                      href={artist.social.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center justify-center w-12 h-12 bg-white/5 hover:bg-red-600 rounded-lg transition-all duration-300"
                      aria-label="YouTube"
                    >
                      <FaYoutube className="text-xl" />
                    </a>

                    <a
                      href={artist.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center justify-center w-12 h-12 bg-white/5 hover:bg-white hover:text-black rounded-lg transition-all duration-300"
                      aria-label="X (Twitter)"
                    >
                      <FaTwitter className="text-xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Artist Badge */}
        <div className="mt-12 text-center p-6 bg-gradient-to-r from-white/10 to-white/5 rounded-lg backdrop-blur-sm border border-white/20">
          <p className="text-sm font-bold text-gray-400 mb-2">FIRST SIGNED ARTIST</p>
          <p className="text-lg sm:text-xl font-black">
            ASSIGN - Setting the Standard for Eternal Delusion Records
          </p>
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
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out both;
        }
        .animate-slide-in {
          animation: slide-in 0.8s ease-out both;
        }
        .hover-scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </section>
  );
};

export default ArtistSection;
