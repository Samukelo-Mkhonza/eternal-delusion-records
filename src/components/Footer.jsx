import React from 'react';
import { FaInstagram, FaYoutube, FaTwitter, FaEnvelope, FaHeart, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaInstagram />, url: 'https://instagram.com', label: 'Instagram' },
    { icon: <FaYoutube />, url: 'https://youtube.com', label: 'YouTube' },
    { icon: <FaTwitter />, url: 'https://twitter.com', label: 'Twitter' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="relative py-12 px-4 border-t border-white/10 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-black mb-3 tracking-tight">
              ETERNAL DELUSION
            </h3>
            <p className="text-sm font-medium text-gray-400 mb-4">
              Reach Beyond the Clouds
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400 text-sm">
              <FaMapMarkerAlt />
              <span>Harding, KwaZulu-Natal</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-black mb-4 tracking-tight">QUICK LINKS</h4>
            <nav className="space-y-2">
              {['home', 'about', 'albums', 'artists'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {section.toUpperCase()}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-black mb-4 tracking-tight">CONNECT</h4>
            <div className="flex justify-center md:justify-end gap-3 mb-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-white/5 hover:bg-white hover:text-black rounded-lg transition-all duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <a
              href="mailto:contact@eternaldelusionrecords.com"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaEnvelope />
              <span>Get in Touch</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-gray-400 font-medium text-center md:text-left">
            © {currentYear} Eternal Delusion Records. All rights reserved.
          </p>
          <p className="flex items-center gap-2 text-gray-400 font-medium">
            Made with <FaHeart className="text-red-500 animate-pulse" /> for Hip-Hop Culture
          </p>
        </div>

        {/* Tagline */}
        <div className="mt-6 text-center">
          <p className="text-xs font-bold text-gray-500 tracking-widest">
            INDEPENDENT • AUTHENTIC • ETERNAL
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
