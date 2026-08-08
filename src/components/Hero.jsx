// src/components/Hero.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiGithub, FiLinkedin } from "react-icons/fi";

const Hero = ({ isDarkMode }) => {
  const [typedText, setTypedText] = useState("");
  const roles = ["Mobile Developer", "Web Developer", "UI/UX Enthusiast", "Problem Solver"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

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

  const bgGradient = isDarkMode ? "bg-gray-900" : "bg-white";
  const textColor = isDarkMode ? "text-gray-400" : "text-gray-600";
  const headingColor = isDarkMode ? "text-white" : "text-gray-900";
  const primaryColor = isDarkMode ? "text-primary-400" : "text-primary-600";
  const socialBg = isDarkMode ? "bg-gray-800" : "bg-gray-50";
  const socialBorder = isDarkMode ? "border-gray-700" : "border-gray-100";
  const socialHover = isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100";
  const badgeBg = isDarkMode ? "bg-gray-800 border-gray-700" : "bg-gray-50 border-gray-100";

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden ${bgGradient}`}
    >
      {/* Ambient background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className={`absolute top-24 left-1/4 w-72 h-72 rounded-full ${isDarkMode ? "bg-primary-500 opacity-[0.07]" : "bg-primary-500 opacity-[0.08]"} blur-3xl animate-float`}></div>
        <div className={`absolute bottom-10 right-1/4 w-80 h-80 rounded-full ${isDarkMode ? "bg-secondary-500 opacity-[0.06]" : "bg-secondary-400 opacity-[0.08]"} blur-3xl animate-float-delay`}></div>
      </div>

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-14">
        {/* Profile picture */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="order-1 flex-shrink-0"
        >
          <div className={`relative w-52 h-52 md:w-64 md:h-64 rounded-2xl overflow-hidden ring-1 ${isDarkMode ? "ring-gray-700" : "ring-gray-200"} shadow-xl group`}>
            <img
              src="https://lh3.googleusercontent.com/a/ACg8ocIKxz19RjTmZJNqzq0kc_4f1yvPdci2uUjdmhzvNeYxAkw73nA=s360-c-no"
              alt="Mohinuddeen Riyas"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-2 text-center md:text-left max-w-2xl"
        >
          <motion.div
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border font-mono text-xs mb-6 ${badgeBg} ${textColor}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary-500"></span>
            </span>
            available for new projects
          </motion.div>

          <motion.h1
            className={`font-display text-5xl md:text-6xl font-bold ${headingColor} mb-4 leading-[1.1] tracking-tight`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Mohinuddeen Riyas
          </motion.h1>

          <motion.h2
            className={`font-mono text-xl md:text-2xl ${primaryColor} mb-6 h-9`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {typedText}
            <span className="animate-pulse">_</span>
          </motion.h2>

          <motion.p
            className={`${textColor} text-lg leading-relaxed max-w-xl`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Experienced developer with 7+ years building Android, iOS, and web
            applications — passionate about efficient, scalable solutions with
            beautiful interfaces.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap justify-center md:justify-start items-center gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <a
              href="#contact"
              className={`group inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-white shadow-sm hover:shadow-md transition-all ${
                isDarkMode ? "bg-primary-500 hover:bg-primary-600" : "bg-primary-600 hover:bg-primary-700"
              }`}
            >
              Get in touch
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="flex gap-3">
              <a
                href="https://github.com/mohinuddeen"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-11 h-11 rounded-full border ${socialBorder} ${socialBg} flex items-center justify-center ${socialHover} ${textColor} transition-all`}
                aria-label="GitHub"
              >
                <FiGithub className="text-lg" />
              </a>
              <a
                href="https://www.linkedin.com/in/mohinuddeen/"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-11 h-11 rounded-full border ${socialBorder} ${socialBg} flex items-center justify-center ${socialHover} ${textColor} transition-all`}
                aria-label="LinkedIn"
              >
                <FiLinkedin className="text-lg" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;