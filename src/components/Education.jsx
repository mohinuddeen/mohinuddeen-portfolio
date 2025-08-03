import React from 'react';
import { motion } from 'framer-motion';
import { FiBook, FiAward } from 'react-icons/fi';

const Education = ({ isDarkMode }) => {
  // Color definitions
  const bgColor = isDarkMode ? 'bg-gray-900' : 'bg-gray-50';
  const cardBg = isDarkMode ? 'bg-gray-800' : 'bg-white';
  const borderColor = isDarkMode ? 'border-gray-700' : 'border-gray-100';
  const textColor = isDarkMode ? 'text-white' : 'text-gray-800';
  const secondaryText = isDarkMode ? 'text-gray-300' : 'text-gray-600';
  const primaryColor = isDarkMode ? 'text-primary-400' : 'text-primary-600';
  const iconBg = isDarkMode ? 'bg-gray-700' : 'bg-primary-50';
  const courseBg = isDarkMode ? 'bg-gray-700' : 'bg-gray-50';

  const education = [
    {
      degree: "Master of Computer Application",
      institution: "Manipal Institute of Technology",
      year: "2018",
      icon: <FiAward />,
      description: "Specialized in Mobile Application Development and Web Technologies",
      courses: ["Advanced Mobile Development", "Cloud Computing", "Data Structures & Algorithms"]
    },
    {
      degree: "Bachelor of Computer Application",
      institution: "P A First Grade College",
      year: "2016",
      icon: <FiBook />,
      description: "Focus on Software Engineering and Database Management Systems",
      courses: ["Software Engineering", "Database Systems", "Web Technologies"]
    }
  ];

  return (
    <section id="education" className={`py-20 ${bgColor} transition-colors duration-300`}>
      <div className="container mx-auto px-4">
        < motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl font-bold ${textColor} mb-4`}>
            My <span className={primaryColor}>Education</span>
          </h2>
          <div className={`w-20 h-1 ${isDarkMode ? 'bg-primary-400' : 'bg-primary-600'} mx-auto mb-6`}></div>
          <p className={`${secondaryText} max-w-2xl mx-auto text-lg`}>
            Academic background and qualifications
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${cardBg} p-8 rounded-xl shadow-sm hover:shadow-md dark:hover:shadow-gray-700/50 transition-all border ${borderColor} hover:-translate-y-1`}
            >
              <div className="flex items-start mb-6">
                <div className={`p-3 rounded-lg ${iconBg} ${primaryColor} mr-4`}>
                  {React.cloneElement(edu.icon, { className: "text-xl" })}
                </div>
                <div>
                  <h3 className={`text-xl font-bold ${textColor}`}>{edu.degree}</h3>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-2 mb-4">
                    <p className={`${secondaryText}`}>{edu.institution}</p>
                    <span className={`${primaryColor} font-medium`}>{edu.year}</span>
                  </div>
                </div>
              </div>
              <p className={`${secondaryText} mb-6`}>{edu.description}</p>
              
              <div className="mt-6">
                <h4 className={`text-sm font-semibold ${secondaryText} uppercase tracking-wider mb-3`}>
                  Key Courses
                </h4>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((course, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      viewport={{ once: true }}
                      className={`${courseBg} px-3 py-1 rounded-full text-sm ${secondaryText}`}
                    >
                      {course}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;