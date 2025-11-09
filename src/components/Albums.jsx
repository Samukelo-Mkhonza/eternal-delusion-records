import React from 'react';
import { FaCompactDisc, FaPlay, FaSpotify, FaApple, FaSoundcloud } from 'react-icons/fa';

const Albums = () => {
  const albums = [
    {
      title: "There's a Right Time for Everything",
      artist: 'ASSIGN',
      year: '2025',
      description: 'An introspective mixtape that explores timing, growth, and self-discovery through authentic hip-hop storytelling.',
      producer: 'Executive produced by Sam',
      tracks: 12,
      genre: 'Hip-Hop / Rap',
      image: null, // Placeholder for album art
      links: {
        spotify: '#',
        apple: '#',
        soundcloud: '#'
      }
    }
    // Add more albums as they're released
  ];

  return (
    <section id="albums" className="min-h-screen flex items-center justify-center px-4 py-20 border-t border-white/10">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight">
            ALBUMS & RELEASES
          </h2>
          <div className="h-1 w-24 bg-white mx-auto mb-8"></div>
          <p className="text-base sm:text-lg md:text-xl font-medium text-gray-300 max-w-3xl mx-auto">
            Discover our latest releases and timeless collections from our talented roster.
          </p>
        </div>

        {/* Albums Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {albums.map((album, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-white/10 animate-slide-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Album Art */}
              <div className="relative h-64 sm:h-80 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center overflow-hidden">
                {album.image ? (
                  <img
                    src={album.image}
                    alt={album.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-white/30 transition-all duration-500 group-hover:text-white/50">
                    <FaCompactDisc className="text-8xl mb-4 animate-spin-slow" />
                    <p className="text-sm font-bold tracking-wider">ALBUM ART</p>
                  </div>
                )}

                {/* Play overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-black rounded-full p-6 transform transition-transform duration-300 hover:scale-110">
                    <FaPlay className="text-3xl ml-1" />
                  </button>
                </div>
              </div>

              {/* Album Details */}
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-2 tracking-tight">
                      {album.title}
                    </h3>
                    <p className="text-base sm:text-lg font-bold text-gray-300">
                      {album.artist}
                    </p>
                  </div>
                  <span className="text-sm font-bold bg-white/10 px-3 py-1 rounded-full">
                    {album.year}
                  </span>
                </div>

                <p className="text-sm sm:text-base leading-relaxed font-medium text-gray-300 mb-4">
                  {album.description}
                </p>

                <p className="text-xs sm:text-sm italic text-gray-400 mb-4">
                  {album.producer}
                </p>

                {/* Album Info */}
                <div className="flex gap-6 mb-6 text-sm font-medium text-gray-400">
                  <div>
                    <span className="block text-white font-bold">{album.tracks}</span>
                    <span>Tracks</span>
                  </div>
                  <div>
                    <span className="block text-white font-bold">{album.genre}</span>
                    <span>Genre</span>
                  </div>
                </div>

                {/* Streaming Links */}
                <div className="flex gap-4 pt-4 border-t border-white/10">
                  <a
                    href={album.links.spotify}
                    className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg transition-all duration-300 group/link"
                    aria-label="Listen on Spotify"
                  >
                    <FaSpotify className="text-xl group-hover/link:text-green-400 transition-colors" />
                    <span className="text-sm font-bold">Spotify</span>
                  </a>
                  <a
                    href={album.links.apple}
                    className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg transition-all duration-300 group/link"
                    aria-label="Listen on Apple Music"
                  >
                    <FaApple className="text-xl group-hover/link:text-gray-300 transition-colors" />
                    <span className="text-sm font-bold">Apple</span>
                  </a>
                  <a
                    href={album.links.soundcloud}
                    className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg transition-all duration-300 group/link"
                    aria-label="Listen on SoundCloud"
                  >
                    <FaSoundcloud className="text-xl group-hover/link:text-orange-400 transition-colors" />
                    <span className="text-sm font-bold">SoundCloud</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Message */}
        <div className="mt-12 text-center p-8 bg-white/5 rounded-lg backdrop-blur-sm">
          <p className="text-lg font-bold text-gray-300">
            More releases coming soon. Stay tuned.
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
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out both;
        }
        .animate-slide-in {
          animation: slide-in 0.8s ease-out both;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Albums;
