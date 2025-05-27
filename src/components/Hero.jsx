import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight, FiGithub, FiLinkedin } from 'react-icons/fi';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const roles = ['Mobile Developer', 'Web Developer', 'UI/UX Enthusiast', 'Problem Solver'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let timer;
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText(currentRole.substring(0, typedText.length - 1));
        if (typedText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }, 50);
    } else {
      timer = setTimeout(() => {
        setTypedText(currentRole.substring(0, typedText.length + 1));
        if (typedText.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      }, 100);
    }
    
    return () => clearTimeout(timer);
  }, [typedText, currentRoleIndex, isDeleting]);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary-600 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-secondary-500 blur-3xl"></div>
      </div>
      
      <div className="text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary-600 font-medium mb-2">Hello, I'm</p>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Mohinuddeen Riyas
          </motion.h1>
          
          <motion.h2 
            className="text-xl md:text-3xl text-gray-600 mb-6 h-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="text-primary-600 font-medium">{typedText}</span>
            <span className="animate-pulse">|</span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Experienced Developer with 7+ years building Android, iOS, and web applications. 
            Passionate about creating efficient, scalable solutions with beautiful interfaces.
          </motion.p>
          
          <motion.div 
            className="mt-8 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <a 
              href="#contact" 
              className="group bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-all flex items-center gap-2"
            >
              Contact Me 
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#experience" 
              className="group border border-primary-600 text-primary-600 px-6 py-3 rounded-lg hover:bg-primary-50 transition-all flex items-center gap-2"
            >
              My Work
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
        
        {/* Social links */}
        <motion.div 
          className="mt-12 flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <a 
            href="https://github.com/mohinuddeen"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary-100 hover:text-primary-600 transition-colors"
            aria-label="GitHub"
          >
            <FiGithub className="text-lg" />
          </a>
          <a 
            href="https://www.linkedin.com/in/mohinuddeen/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary-100 hover:text-primary-600 transition-colors"
            aria-label="LinkedIn"
          >
            <FiLinkedin className="text-lg" />
          </a>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce"></div>
          </div>
          <p className="text-xs text-gray-500 mt-2">Scroll down</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;