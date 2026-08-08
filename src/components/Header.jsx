// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = ({ isDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navItems = ['About', 'Experience', 'Skills', 'Projects', 'Education', 'Contact'];

  const backgroundColor = isDarkMode ? 'bg-gray-900' : 'bg-white';
  const textColor = isDarkMode ? 'text-gray-300' : 'text-gray-700';
  const primaryTextColor = isDarkMode ? 'text-primary-400' : 'text-primary-600';
  const hoverTextColor = isDarkMode ? 'hover:text-primary-400' : 'hover:text-primary-600';
  const activeBgColor = isDarkMode ? 'bg-gray-800' : 'bg-primary-50';
  const borderColor = isDarkMode ? 'border-gray-800' : 'border-gray-100';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const sections = navItems.map((item) => document.getElementById(item.toLowerCase()));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        if (!section) continue;
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header
      className={`fixed w-full z-50 border-b transition-all duration-300 ${
        scrolled
          ? `${backgroundColor} ${borderColor} py-3`
          : `${isDarkMode ? 'bg-gray-900/80' : 'bg-white/80'} border-transparent backdrop-blur-md py-5`
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.a
          href="#home"
          className={`font-display text-lg font-semibold tracking-tight ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Mohinuddeen<span className={primaryTextColor}>.</span>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-1 font-mono text-xs uppercase tracking-wider">
            {navItems.map((item) => {
              const sectionId = item.toLowerCase();
              const isActive = activeSection === sectionId;
              return (
                <li key={item}>
                  <a
                    href={`#${sectionId}`}
                    className={`relative px-4 py-2 rounded-full transition-colors ${
                      isActive
                        ? `${activeBgColor} ${primaryTextColor} font-medium`
                        : `${textColor} ${hoverTextColor}`
                    }`}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
            <li>
              <a
                href="#contact"
                className={`ml-3 px-4 py-2 rounded-full font-medium normal-case tracking-normal text-white transition-colors ${
                  isDarkMode ? 'bg-primary-500 hover:bg-primary-600' : 'bg-primary-600 hover:bg-primary-700'
                }`}
              >
                Let's talk
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <div className={`w-6 h-0.5 ${isDarkMode ? 'bg-gray-200' : 'bg-gray-800'} transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
          <div className={`w-6 h-0.5 ${isDarkMode ? 'bg-gray-200' : 'bg-gray-800'} my-1.5 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 ${isDarkMode ? 'bg-gray-200' : 'bg-gray-800'} transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          className={`md:hidden border-t ${backgroundColor} ${borderColor}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col gap-1 p-4 font-mono text-sm uppercase tracking-wide">
            {navItems.map((item) => {
              const sectionId = item.toLowerCase();
              const isActive = activeSection === sectionId;
              return (
                <li key={item}>
                  <a
                    href={`#${sectionId}`}
                    className={`block px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? `${activeBgColor} ${primaryTextColor} font-medium`
                        : `${textColor} ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50'}`
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </motion.div>
      )}
    </header>
  );
};

export default Header;