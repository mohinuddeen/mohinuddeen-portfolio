import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiCpu, FiDatabase, FiSmartphone, FiLayers, FiUsers } from 'react-icons/fi';

const About = ({ isDarkMode }) => {
  // Color definitions
  const bgColor = isDarkMode ? 'bg-gray-900' : 'bg-white';
  const textColor = isDarkMode ? 'text-white' : 'text-gray-800';
  const secondaryText = isDarkMode ? 'text-gray-300' : 'text-gray-600';
  const primaryColor = isDarkMode ? 'text-primary-400' : 'text-primary-600';
  const cardBg = isDarkMode ? 'bg-gray-800' : 'bg-white';
  const cardBorder = isDarkMode ? 'border-gray-700' : 'border-gray-100';
  const highlightBg = isDarkMode ? 'bg-gray-700' : 'bg-primary-50';
  const highlightBorder = isDarkMode ? 'border-gray-600' : 'border-primary-100';

  const expertiseAreas = [
    { 
      icon: <FiSmartphone className="text-2xl" />, 
      title: "Mobile Development", 
      description: "React Native, Android, iOS, Flutter" 
    },
    { 
      icon: <FiCode className="text-2xl" />, 
      title: "Frontend Development", 
      description: "React, Next.js, Tailwind, TypeScript" 
    },
    { 
      icon: <FiCpu className="text-2xl" />, 
      title: "Backend Development", 
      description: "Node.js, Python, REST/GraphQL APIs" 
    },
    { 
      icon: <FiDatabase className="text-2xl" />, 
      title: "Database Management", 
      description: "MySQL, MongoDB, PostgreSQL" 
    }
  ];

  return (
    <section id="about" className={`py-20 ${bgColor} transition-colors duration-300`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl font-bold ${textColor} mb-4`}>
            About <span className={primaryColor}>Me</span>
          </h2>
          <div className={`w-20 h-1 ${isDarkMode ? 'bg-primary-400' : 'bg-primary-600'} mx-auto mb-6`}></div>
          <p className={`${secondaryText} max-w-2xl mx-auto text-lg`}>
            Passionate developer crafting exceptional digital experiences
          </p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Professional Summary */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`${cardBg} p-8 rounded-xl shadow-sm hover:shadow-md dark:hover:shadow-gray-700/50 transition-all border ${cardBorder}`}
          >
            <h3 className={`text-2xl font-semibold ${textColor} mb-6`}>Professional Journey</h3>
            <div className="space-y-4">
              <p className={`${secondaryText} leading-relaxed`}>
                I'm an experienced developer with <span className={`font-semibold ${primaryColor}`}>7+ years</span> of expertise in building and maintaining 
                Android and iOS applications using <span className={primaryColor}>React Native, Kotlin, and Swift</span>.
              </p>
              <p className={`${secondaryText} leading-relaxed`}>
                I specialize in developing modern web applications using <span className={primaryColor}>React, Next.js, and Tailwind CSS</span> 
                to create responsive and scalable user interfaces that deliver exceptional experiences.
              </p>
              <p className={`${secondaryText} leading-relaxed`}>
                My skills include creating intuitive UI/UX designs, integrating complex APIs, optimizing database performance, 
                and implementing robust testing strategies. I thrive in collaborative environments and enjoy mentoring junior developers.
              </p>
            </div>
          </motion.div>

          {/* Expertise Areas */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className={`text-2xl font-semibold ${textColor} mb-6`}>Technical Expertise</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {expertiseAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`${cardBg} p-5 rounded-lg shadow-sm border ${cardBorder} hover:shadow-md dark:hover:shadow-gray-700/50 transition-all group`}
                >
                  <div className="flex items-center mb-3">
                    <div className={`p-2 rounded-md ${primaryColor} ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} group-hover:bg-primary-500 group-hover:text-white transition-colors`}>
                      {React.cloneElement(area.icon, { className: "text-xl" })}
                    </div>
                    <h4 className={`text-lg font-semibold ${textColor} ml-3`}>{area.title}</h4>
                  </div>
                  <p className={`${secondaryText} text-sm`}>{area.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Personal Approach */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className={`mt-8 ${highlightBg} p-6 rounded-lg border ${highlightBorder}`}
            >
              <h4 className={`text-lg font-semibold ${textColor} mb-3`}>Development Philosophy</h4>
              <p className={`${secondaryText}`}>
                I believe in writing clean, maintainable code with thorough documentation. My approach combines 
                technical excellence with user-centric design, ensuring solutions are both powerful and intuitive.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;