// src/components/Education.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiBook, FiAward } from 'react-icons/fi';
import SectionHeading from './SectionHeading';

const Education = ({ isDarkMode }) => {
  const bgColor = isDarkMode ? 'bg-gray-900' : 'bg-white';
  const cardBg = isDarkMode ? 'bg-gray-800' : 'bg-gray-50';
  const borderColor = isDarkMode ? 'border-gray-700' : 'border-gray-100';
  const textColor = isDarkMode ? 'text-white' : 'text-gray-900';
  const secondaryText = isDarkMode ? 'text-gray-400' : 'text-gray-600';
  const primaryColor = isDarkMode ? 'text-primary-400' : 'text-primary-600';
  const iconBg = isDarkMode ? 'bg-gray-700' : 'bg-primary-50';
  const courseBg = isDarkMode ? 'bg-gray-700' : 'bg-white';
  const courseBorder = isDarkMode ? 'border-gray-600' : 'border-gray-200';

  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Manipal University, Karnataka, India',
      year: '2016 — 2018',
      icon: <FiAward />,
      description: 'Computer Science, with focus on mobile application development and web technologies',
      courses: ['Advanced Mobile Development', 'Cloud Computing', 'Data Structures & Algorithms'],
    },
    {
      degree: 'Bachelor of Computer Application (BCA)',
      institution: 'Mangalore University, Karnataka, India',
      year: '2013 — 2016',
      icon: <FiBook />,
      description: 'Computer Science, with focus on software engineering and database management systems',
      courses: ['Software Engineering', 'Database Systems', 'Web Technologies'],
    },
  ];

  return (
    <section id="education" className={`py-24 ${bgColor} transition-colors duration-300`}>
      <div className="container mx-auto px-6">
        <SectionHeading
          isDarkMode={isDarkMode}
          eyebrow="education"
          title="My"
          accent="education"
          description="Academic background and qualifications"
        />

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${cardBg} p-8 rounded-2xl shadow-sm border ${borderColor} hover:-translate-y-1 hover:shadow-md transition-all`}
            >
              <div className="flex items-start gap-4 mb-5">
                <div className={`p-3 rounded-xl ${iconBg} ${primaryColor} flex-shrink-0`}>
                  {React.cloneElement(edu.icon, { className: 'text-xl' })}
                </div>
                <div>
                  <h3 className={`font-display text-lg font-bold ${textColor}`}>{edu.degree}</h3>
                  <div className="flex flex-wrap items-center gap-x-2 mt-1">
                    <p className={secondaryText}>{edu.institution}</p>
                    <span className={`${primaryColor} font-mono text-sm`}>· {edu.year}</span>
                  </div>
                </div>
              </div>

              <p className={`${secondaryText} mb-6 text-sm leading-relaxed`}>{edu.description}</p>

              <div>
                <h4 className={`font-mono text-xs uppercase tracking-wider ${primaryColor} mb-3`}>Key courses</h4>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((course, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      viewport={{ once: true }}
                      className={`${courseBg} border ${courseBorder} px-3 py-1 rounded-full text-sm ${secondaryText}`}
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