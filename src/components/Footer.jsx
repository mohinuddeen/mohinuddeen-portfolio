// src/components/Footer.jsx
import React from 'react';
import { FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';

const Footer = ({ isDarkMode }) => {
  const bgColor = isDarkMode ? 'bg-gray-950' : 'bg-gray-900';
  const borderColor = 'border-gray-800';
  const mutedText = 'text-gray-400';

  return (
    <footer className={`${bgColor} text-white py-10 transition-colors duration-300`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-display text-lg font-semibold">Mohinuddeen Riyas</h3>
            <p className={`${mutedText} font-mono text-sm mt-0.5`}>Senior Software Engineer</p>
          </div>

          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/in/mohinuddeen/"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 rounded-full border ${borderColor} flex items-center justify-center ${mutedText} hover:text-white hover:border-gray-600 transition-colors`}
              aria-label="LinkedIn"
            >
              <FiLinkedin size={16} />
            </a>
            <a
              href="mailto:mohinuddeenriyas@gmail.com"
              className={`w-10 h-10 rounded-full border ${borderColor} flex items-center justify-center ${mutedText} hover:text-white hover:border-gray-600 transition-colors`}
              aria-label="Email"
            >
              <FiMail size={16} />
            </a>
            <a
              href="tel:+971564850294"
              className={`w-10 h-10 rounded-full border ${borderColor} flex items-center justify-center ${mutedText} hover:text-white hover:border-gray-600 transition-colors`}
              aria-label="Phone"
            >
              <FiPhone size={16} />
            </a>
          </div>
        </div>

        <div className={`border-t ${borderColor} mt-8 pt-6 text-center ${mutedText} text-sm font-mono`}>
          <p>© {new Date().getFullYear()} Mohinuddeen Riyas — all rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;