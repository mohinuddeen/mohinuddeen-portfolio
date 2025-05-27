import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FiDownload,
  FiArrowRight,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

const Hero = () => {
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

    let timer = setTimeout(() => {
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

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center py-16 relative overflow-hidden bg-gradient-to-b from-white to-gray-50"
    >
      {/* Animated background elements - enhanced */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-primary-500 opacity-10 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 rounded-full bg-secondary-400 opacity-10 blur-3xl animate-float-delay"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-blue-400 opacity-5 blur-3xl animate-float"></div>
      </div>

      {/* Main container with centered content */}
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Profile picture with enhanced styling */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="order-1 md:order-1 mb-10 md:mb-0 flex-shrink-0"
        >
          <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white shadow-xl group">
            <img
              src="https://media.licdn.com/dms/image/v2/C5103AQGN5w4alU96Bw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1547993650493?e=1753920000&v=beta&t=ox7Fzh_GD0DdpZAViXEv0bONUc3OOhy5HEp_FwYLJtY"
              alt="Mohinuddeen Riyas"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-primary-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </div>
        </motion.div>

        {/* Text content with enhanced typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-2 md:order-2 text-center md:text-left max-w-2xl"
        >
          <motion.p
            className="text-primary-600 font-medium mb-3 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Mohinuddeen <span className="text-primary-600">Riyas</span>
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl text-gray-600 mb-6 h-12 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <span className="text-primary-600 bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              {typedText}
            </span>
            <span className="animate-pulse">|</span>
          </motion.h2>

          <motion.p
            className="text-gray-600 text-lg md:text-xl mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Experienced Developer with 7+ years building Android, iOS, and web
            applications. Passionate about creating efficient, scalable
            solutions with beautiful interfaces.
          </motion.p>

          {/* Enhanced action buttons */}
          <motion.div
            className="mt-8 flex flex-wrap justify-center md:justify-start gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <a
              href="#contact"
              className="group bg-primary-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all flex items-center gap-2 font-medium"
            >
              Contact Me
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#projects"
              className="group border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg hover:bg-primary-50 hover:shadow-md transition-all flex items-center gap-2 font-medium"
            >
              View Projects
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Enhanced social links */}
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
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-primary-100 text-gray-700 hover:text-primary-600 transition-all shadow-sm hover:shadow-md"
              aria-label="GitHub"
            >
              <FiGithub className="text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohinuddeen/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-primary-100 text-gray-700 hover:text-primary-600 transition-all shadow-sm hover:shadow-md"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="text-xl" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced scroll indicator */}
      {/* <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className="flex flex-col items-center">
          <div className="w-8 h-14 border-2 border-gray-300 rounded-full flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-3 bg-primary-600 rounded-full"
            ></motion.div>
          </div>
          <p className="text-sm text-gray-500 mt-3 font-medium">Scroll down</p>
        </div>
      </motion.div> */}
    </section>
  );
};

export default Hero;
