import React, { useState } from 'react';
import { FaInstagram, FaYoutube, FaTwitter, FaSpotify, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const socialLinks = [
    { icon: <FaInstagram />, url: 'https://instagram.com', label: 'Instagram' },
    { icon: <FaYoutube />, url: 'https://youtube.com', label: 'YouTube' },
    { icon: <FaTwitter />, url: 'https://twitter.com', label: 'X (Twitter)' },
    { icon: <FaSpotify />, url: 'https://spotify.com', label: 'Spotify' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative py-16 px-4 border-t border-white/[0.06] bg-dark">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-display text-3xl tracking-wider text-offwhite mb-3">
              ETERNAL DELUSION
            </h3>
            <p className="font-body text-sm italic text-gold mb-4">
              Sound That Haunts You
            </p>
            <p className="font-body text-xs text-offwhite/30 leading-relaxed">
              Independent South African record label rooted in urban and township culture.
              Harding, KwaZulu-Natal.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-display text-lg tracking-widest text-offwhite mb-4">NAVIGATE</h4>
            <nav className="space-y-2">
              {['home', 'artists', 'releases', 'about', 'news', 'submit'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full font-body text-xs font-medium tracking-widest text-offwhite/30 hover:text-gold transition-colors duration-300"
                >
                  {section === 'submit' ? 'SUBMIT DEMO' : section.toUpperCase()}
                </button>
              ))}
            </nav>
          </div>

          {/* Newsletter + Social */}
          <div className="text-center md:text-right">
            <h4 className="font-display text-lg tracking-widest text-offwhite mb-4">STAY CONNECTED</h4>

            {/* Newsletter */}
            {subscribed ? (
              <p className="font-body text-sm text-gold mb-6">You're in. Welcome to the delusion.</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 mb-6 max-w-xs mx-auto md:ml-auto md:mr-0">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/[0.04] border border-white/10 rounded-lg px-3 py-2 font-body text-xs text-offwhite placeholder-offwhite/30 focus:border-crimson outline-none transition-all duration-300"
                  required
                />
                <button
                  type="submit"
                  className="bg-gold text-dark font-display text-xs tracking-wider px-4 py-2 rounded-lg hover:bg-gold/80 transition-all duration-300"
                >
                  JOIN
                </button>
              </form>
            )}

            {/* Social icons */}
            <div className="flex justify-center md:justify-end gap-3 mb-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-white/[0.04] border border-white/[0.06] hover:bg-blood hover:border-blood rounded-lg transition-all duration-300 text-offwhite/50 hover:text-offwhite"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <a
              href="mailto:contact@eternaldelusionrecords.com"
              className="inline-flex items-center gap-2 font-body text-xs text-offwhite/30 hover:text-gold transition-colors duration-300"
            >
              <FaEnvelope />
              contact@eternaldelusionrecords.com
            </a>
          </div>
        </div>

        <div className="h-px bg-white/[0.06] mb-8"></div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-offwhite/20">
            &copy; {currentYear} Eternal Delusion Records. All rights reserved.
          </p>
          <p className="font-display text-xs tracking-[0.3em] text-offwhite/15">
            INDEPENDENT &bull; AUTHENTIC &bull; ETERNAL
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
