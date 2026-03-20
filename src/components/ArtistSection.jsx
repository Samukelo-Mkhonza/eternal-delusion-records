import React from 'react';
import { FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

const ArtistSection = () => {
  const artists = [
    {
      name: 'ASSIGN',
      location: 'Harding, KZN',
      bio: 'A rapper from Harding who began at 13. Known for authentic storytelling and introspective lyricism that cuts deep.',
      image: 'https://picsum.photos/seed/assign/500/600',
      featured: true,
      tags: ['Hip-Hop', 'Lyricist'],
      social: {
        instagram: 'https://instagram.com',
        youtube: 'https://youtube.com',
        twitter: 'https://twitter.com'
      }
    },
    {
      name: 'NALEDI ZULU',
      location: 'Soweto, GP',
      bio: 'Afro-Soul vocalist weaving ancestral melodies with modern township soundscapes. Her voice carries generations.',
      image: 'https://picsum.photos/seed/naledi/500/600',
      featured: false,
      tags: ['Afro-Soul', 'Vocalist'],
      social: {
        instagram: 'https://instagram.com',
        youtube: 'https://youtube.com',
        twitter: 'https://twitter.com'
      }
    },
    {
      name: 'DJ PHANTOM',
      location: 'Durban, KZN',
      bio: 'Amapiano producer pushing the genre into darker, more cinematic territory. The future sounds different here.',
      image: 'https://picsum.photos/seed/phantom/500/600',
      featured: false,
      tags: ['Amapiano', 'Producer'],
      social: {
        instagram: 'https://instagram.com',
        youtube: 'https://youtube.com',
        twitter: 'https://twitter.com'
      }
    },
    {
      name: 'SIYA THE ORACLE',
      location: 'Cape Town, WC',
      bio: 'Storyteller and wordsmith blending conscious rap with trap-influenced production. Every bar is a sermon.',
      image: 'https://picsum.photos/seed/siya/500/600',
      featured: false,
      tags: ['Hip-Hop', 'Storyteller'],
      social: {
        instagram: 'https://instagram.com',
        youtube: 'https://youtube.com',
        twitter: 'https://twitter.com'
      }
    }
  ];

  return (
    <section id="artists" className="min-h-screen flex items-center justify-center px-4 py-24 bg-dark">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-16 reveal">
          <p className="font-body text-sm font-semibold tracking-widest text-gold mb-4">WHO WE ARE</p>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wider text-offwhite">
            THE ROSTER
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-blood to-transparent mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {artists.map((artist, index) => (
            <div
              key={index}
              className={`reveal reveal-delay-${index + 1} group relative bg-white/[0.03] border border-white/[0.06] rounded-xl overflow-hidden hover-crimson-glow cursor-pointer transition-all duration-500`}
            >
              {/* Featured badge */}
              {artist.featured && (
                <div className="absolute top-3 right-3 z-20 bg-gold text-dark font-display text-xs tracking-widest px-3 py-1 rounded">
                  FEATURED
                </div>
              )}

              {/* Artist image */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent"></div>

                {/* Social icons overlay */}
                <div className="absolute bottom-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <a href={artist.social.instagram} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center w-8 h-8 bg-dark/80 hover:bg-blood rounded-full transition-all duration-300" aria-label="Instagram">
                    <FaInstagram className="text-sm" />
                  </a>
                  <a href={artist.social.youtube} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center w-8 h-8 bg-dark/80 hover:bg-blood rounded-full transition-all duration-300" aria-label="YouTube">
                    <FaYoutube className="text-sm" />
                  </a>
                  <a href={artist.social.twitter} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center w-8 h-8 bg-dark/80 hover:bg-blood rounded-full transition-all duration-300" aria-label="X (Twitter)">
                    <FaTwitter className="text-sm" />
                  </a>
                </div>
              </div>

              {/* Artist info */}
              <div className="p-5">
                <h3 className="font-display text-2xl tracking-wider text-offwhite mb-1">
                  {artist.name}
                </h3>
                <p className="font-body text-xs text-offwhite/40 tracking-wide mb-3">
                  {artist.location}
                </p>

                {/* Genre tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {artist.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="font-body text-[10px] font-semibold tracking-widest bg-blood/20 text-crimson border border-blood/30 px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="font-body text-xs text-offwhite/40 leading-relaxed">
                  {artist.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtistSection;
