import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiGithub, FiLinkedin } from "react-icons/fi";

const Hero = ({ isDarkMode }) => {
  const [typedText, setTypedText] = useState("");
  const roles = [
    "Mobile Developer",
    "Web Developer",
    "UI/UX Enthusiast",
    "Problem Solver",
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Enhanced typewriter effect with variable speeds
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 30 : 100;
    const pauseTime = 1500;

    const timer = setTimeout(() => {
      if (isDeleting) {
        setTypedText(currentRole.substring(0, typedText.length - 1));
        if (typedText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      } else {
        setTypedText(currentRole.substring(0, typedText.length + 1));
        if (typedText.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedText, currentRoleIndex, isDeleting]);

  // Color definitions
  const bgGradient = isDarkMode 
    ? "bg-gray-900" 
    : "bg-gradient-to-b from-white to-gray-50";
  
  const textColor = isDarkMode ? "text-gray-300" : "text-gray-600";
  const headingColor = isDarkMode ? "text-white" : "text-gray-900";
  const primaryColor = isDarkMode ? "text-primary-400" : "text-primary-600";
  const socialBg = isDarkMode ? "bg-gray-800" : "bg-white";
  const socialHover = isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100";

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center py-16 relative overflow-hidden ${bgGradient}`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className={`absolute top-20 left-20 w-64 h-64 rounded-full ${isDarkMode ? "bg-primary-400 opacity-5" : "bg-primary-500 opacity-10"} blur-3xl animate-float`}></div>
        <div className={`absolute bottom-20 right-20 w-72 h-72 rounded-full ${isDarkMode ? "bg-secondary-400 opacity-5" : "bg-secondary-400 opacity-10"} blur-3xl animate-float-delay`}></div>
        <div className={`absolute top-1/3 right-1/4 w-48 h-48 rounded-full ${isDarkMode ? "bg-blue-400 opacity-3" : "bg-blue-400 opacity-5"} blur-3xl animate-float`}></div>
      </div>

      {/* Main content container */}
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Profile picture */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="order-1 md:order-1 mb-10 md:mb-0 flex-shrink-0"
        >
          <div className={`relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 ${isDarkMode ? "border-gray-800" : "border-white"} shadow-xl group`}>
            <img
              src="https://lh3.googleusercontent.com/a/ACg8ocIKxz19RjTmZJNqzq0kc_4f1yvPdci2uUjdmhzvNeYxAkw73nA=s360-c-no"
              alt="Mohinuddeen Riyas"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className={`absolute inset-0 ${isDarkMode ? "bg-primary-400 opacity-20" : "bg-primary-500 opacity-10"} group-hover:opacity-20 transition-opacity duration-300`}></div>
          </div>
        </motion.div>

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-2 md:order-2 text-center md:text-left max-w-2xl"
        >
          <motion.p
            className={`${primaryColor} font-medium mb-3 text-lg`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            className={`text-5xl md:text-6xl font-bold ${headingColor} mb-4 leading-tight`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Mohinuddeen <span className={primaryColor}>Riyas</span>
          </motion.h1>

          <motion.h2
            className={`text-2xl md:text-3xl ${textColor} mb-6 h-12 font-medium`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <span className={`${primaryColor} bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500`}>
              {typedText}
            </span>
            <span className="animate-pulse">|</span>
          </motion.h2>

          <motion.p
            className={`${textColor} text-lg md:text-xl mb-8 leading-relaxed`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Experienced Developer with 7+ years building Android, iOS, and web
            applications. Passionate about creating efficient, scalable
            solutions with beautiful interfaces.
          </motion.p>

          {/* Action buttons */}
          <motion.div
            className="mt-8 flex flex-wrap justify-center md:justify-start gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <a
              href="#contact"
              className={`group ${isDarkMode ? "bg-primary-500 hover:bg-primary-600" : "bg-primary-600 hover:bg-primary-700"} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all flex items-center gap-2 font-medium`}
            >
              Contact Me
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            className="mt-12 flex justify-center md:justify-start gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <a
              href="https://github.com/mohinuddeen"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 rounded-full ${socialBg} flex items-center justify-center ${socialHover} ${textColor} hover:${primaryColor} transition-all shadow-sm hover:shadow-md`}
              aria-label="GitHub"
            >
              <FiGithub className="text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohinuddeen/"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 rounded-full ${socialBg} flex items-center justify-center ${socialHover} ${textColor} hover:${primaryColor} transition-all shadow-sm hover:shadow-md`}
              aria-label="LinkedIn"
            >
              <FiLinkedin className="text-xl" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;