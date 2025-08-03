import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = ({ isDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navItems = ['About', 'Experience', 'Skills', 'Education', 'Contact'];

  // Color definitions
  const backgroundColor = isDarkMode ? 'bg-gray-900' : 'bg-white';
  const textColor = isDarkMode ? 'text-gray-300' : 'text-gray-800';
  const primaryTextColor = isDarkMode ? 'text-primary-400' : 'text-primary-600';
  const hoverTextColor = isDarkMode ? 'hover:text-primary-400' : 'hover:text-primary-600';
  const activeBgColor = isDarkMode ? 'bg-gray-800' : 'bg-primary-50';
  const shadowColor = isDarkMode ? 'shadow-gray-800/50' : 'shadow-md';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      
      const sections = navItems.map(item => document.getElementById(item.toLowerCase()));
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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? `${backgroundColor} ${shadowColor} py-2` 
          : `${isDarkMode ? 'bg-gray-900/90' : 'bg-white/90'} backdrop-blur-sm py-4`
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.h1 
          className={`text-xl font-bold ${primaryTextColor}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Mohinuddeen Riyas
        </motion.h1>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {navItems.map((item) => {
              const sectionId = item.toLowerCase();
              const isActive = activeSection === sectionId;
              return (
                <li key={item}>
                  <a 
                    href={`#${sectionId}`}
                    className={`relative px-3 py-2 transition-colors ${
                      isActive 
                        ? `${primaryTextColor} font-medium`
                        : `${textColor} ${hoverTextColor}`
                    }`}
                  >
                    {item}
                    {isActive && (
                      <motion.span 
                        className={`absolute bottom-0 left-0 w-full h-0.5 ${isDarkMode ? 'bg-primary-400' : 'bg-primary-600'}`}
                        layoutId="activeIndicator"
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 ${textColor} transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
          <div className={`w-6 h-0.5 ${textColor} my-1.5 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 ${textColor} transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div 
          className={`md:hidden ${backgroundColor} ${shadowColor}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col space-y-2 p-4">
            {navItems.map((item) => {
              const sectionId = item.toLowerCase();
              const isActive = activeSection === sectionId;
              return (
                <li key={item}>
                  <a 
                    href={`#${sectionId}`}
                    className={`block px-4 py-2 rounded transition-colors ${
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