import React from 'react';
import { FaRecordVinyl, FaMicrophone, FaHeart } from 'react-icons/fa';

const AboutLabel = () => {
  const pillars = [
    {
      icon: <FaRecordVinyl className="text-3xl text-crimson" />,
      title: 'INDEPENDENT',
      description: 'No major label strings. No compromises. We own our sound and our story — completely.'
    },
    {
      icon: <FaMicrophone className="text-3xl text-crimson" />,
      title: 'AUTHENTIC',
      description: 'Born from the dust roads of Harding to the stages of the world. Every voice here is real.'
    },
    {
      icon: <FaHeart className="text-3xl text-crimson" />,
      title: 'RELENTLESS',
      description: 'The delusion is believing we can\'t. The eternal part is proving we always will.'
    }
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-24 bg-gradient-to-b from-dark to-[#111]">
      <div className="max-w-5xl w-full">
        <div className="text-center mb-16 reveal">
          <p className="font-body text-sm font-semibold tracking-widest text-gold mb-4">OUR STORY</p>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wider text-offwhite">
            ABOUT THE LABEL
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-blood to-transparent mx-auto mt-6"></div>
        </div>

        <div className="reveal max-w-3xl mx-auto text-center mb-16">
          <p className="font-body text-base sm:text-lg md:text-xl leading-relaxed text-offwhite/60 mb-6">
            Eternal Delusion Records was born in Harding, a small town in KwaZulu-Natal where
            dreams are forged in dust and fire. We are a label built on the beautiful obsession
            of chasing artistic truth — the kind that doesn't care about trends, only about
            what's real.
          </p>
          <p className="font-body text-base sm:text-lg md:text-xl leading-relaxed text-offwhite/60 mb-6">
            The name "Eternal Delusion" speaks to the audacity of believing you can make it
            from the township to the world. Some call it a delusion. We call it fuel.
            Every artist on this roster carries that fire — the refusal to be ordinary,
            the hunger to be heard.
          </p>
          <p className="font-body text-base sm:text-lg leading-relaxed text-gold/80 italic">
            "We don't just make music. We document survival, ambition, and the stories
            the mainstream refuses to tell."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className={`reveal reveal-delay-${index + 1} bg-white/[0.03] border border-white/[0.06] rounded-xl p-8 text-center hover-lift transition-all duration-500 hover:border-blood/30`}
            >
              <div className="flex justify-center mb-5">
                {pillar.icon}
              </div>
              <h3 className="font-display text-2xl tracking-wider text-offwhite mb-3">
                {pillar.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-offwhite/40">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutLabel;
