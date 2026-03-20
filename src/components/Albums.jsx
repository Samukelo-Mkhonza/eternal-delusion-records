import React from 'react';
import { FaSpotify, FaApple } from 'react-icons/fa';

const Albums = () => {
  const releases = [
    {
      title: "There's a Right Time for Everything",
      artist: 'ASSIGN',
      year: '2025',
      genre: 'Hip-Hop',
      image: 'https://picsum.photos/seed/album1/600/600',
      links: { spotify: '#', apple: '#' }
    },
    {
      title: 'Midnight in Soweto',
      artist: 'NALEDI ZULU',
      year: '2025',
      genre: 'Afro-Soul',
      image: 'https://picsum.photos/seed/album2/600/600',
      links: { spotify: '#', apple: '#' }
    },
    {
      title: 'Township Frequencies Vol. 1',
      artist: 'VARIOUS ARTISTS',
      year: '2024',
      genre: 'Compilation',
      image: 'https://picsum.photos/seed/album3/600/600',
      links: { spotify: '#', apple: '#' }
    }
  ];

  return (
    <section id="releases" className="min-h-screen flex items-center justify-center px-4 py-24 bg-dark">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-16 reveal">
          <p className="font-body text-sm font-semibold tracking-widest text-gold mb-4">LISTEN NOW</p>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wider text-offwhite">
            LATEST DROPS
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-blood to-transparent mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {releases.map((release, index) => (
            <div
              key={index}
              className={`reveal reveal-delay-${index + 1} group relative bg-white/[0.03] border border-white/[0.06] rounded-xl overflow-hidden hover-lift transition-all duration-500`}
            >
              {/* Cover art */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={release.image}
                  alt={release.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Hover overlay with streaming buttons */}
                <div className="absolute inset-0 bg-dark/80 opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col items-center justify-center gap-4">
                  <a
                    href={release.links.spotify}
                    className="flex items-center gap-3 bg-white/10 border border-crimson/50 hover:bg-crimson/20 px-6 py-3 rounded-lg transition-all duration-300 w-48 justify-center"
                    aria-label="Listen on Spotify"
                  >
                    <FaSpotify className="text-xl text-green-400" />
                    <span className="font-body text-sm font-semibold text-offwhite">Spotify</span>
                  </a>
                  <a
                    href={release.links.apple}
                    className="flex items-center gap-3 bg-white/10 border border-crimson/50 hover:bg-crimson/20 px-6 py-3 rounded-lg transition-all duration-300 w-48 justify-center"
                    aria-label="Listen on Apple Music"
                  >
                    <FaApple className="text-xl text-offwhite" />
                    <span className="font-body text-sm font-semibold text-offwhite">Apple Music</span>
                  </a>
                </div>

                {/* Year badge */}
                <div className="absolute top-3 right-3 bg-gold text-dark font-display text-sm tracking-wider px-3 py-1 rounded">
                  {release.year}
                </div>
              </div>

              {/* Release info */}
              <div className="p-5">
                <p className="font-body text-[10px] font-semibold tracking-widest text-crimson mb-1">
                  {release.genre.toUpperCase()}
                </p>
                <h3 className="font-display text-xl sm:text-2xl tracking-wide text-offwhite mb-1 leading-tight">
                  {release.title}
                </h3>
                <p className="font-body text-sm text-offwhite/40">
                  {release.artist}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Albums;
