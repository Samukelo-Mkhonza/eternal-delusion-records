import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const News = () => {
  const newsItems = [
    {
      date: 'March 15, 2026',
      category: 'SIGNING',
      title: 'ASSIGN Signs Exclusively to Eternal Delusion Records',
      excerpt: 'The Harding-born lyricist joins EDR as the label\'s flagship artist, marking a new chapter for independent hip-hop in KwaZulu-Natal.',
    },
    {
      date: 'March 8, 2026',
      category: 'RELEASE',
      title: 'New Single "Midnight in Soweto" Drops This Friday',
      excerpt: 'Naledi Zulu\'s haunting Afro-Soul debut captures the pulse of township nightlife. Pre-save now on all platforms.',
    },
    {
      date: 'February 28, 2026',
      category: 'EVENT',
      title: 'EDR Presents: Live at Harding Arts Festival',
      excerpt: 'Eternal Delusion Records takes the stage at Harding\'s annual arts celebration. Full roster performance confirmed.',
    },
  ];

  return (
    <section id="news" className="min-h-screen flex items-center justify-center px-4 py-24 bg-dark">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-16 reveal">
          <p className="font-body text-sm font-semibold tracking-widest text-gold mb-4">STAY INFORMED</p>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wider text-offwhite">
            LATEST NEWS
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-blood to-transparent mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <article
              key={index}
              className={`reveal reveal-delay-${index + 1} group bg-white/[0.03] border border-white/[0.06] rounded-xl overflow-hidden hover-lift cursor-pointer transition-all duration-500 hover:border-blood/30`}
            >
              {/* Image placeholder */}
              <div className="h-48 bg-gradient-to-br from-blood/20 to-dark overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/news${index + 1}/600/400`}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-body font-bold tracking-widest text-gold">
                    {item.category}
                  </span>
                  <span className="text-xs font-body text-offwhite/30">
                    {item.date}
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl tracking-wide text-offwhite mb-3 leading-tight">
                  {item.title}
                </h3>

                <p className="font-body text-sm text-offwhite/50 leading-relaxed mb-4">
                  {item.excerpt}
                </p>

                <span className="inline-flex items-center gap-2 text-sm font-body font-semibold text-crimson group-hover:text-gold transition-colors duration-300">
                  Read More <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
