import React from 'react';
import { motion } from 'framer-motion';
import { FiBook, FiAward } from 'react-icons/fi';

const Education = () => {
  const education = [
    {
      degree: "Master of Computer Application",
      institution: "Manipal Institute of Technology",
      year: "2018",
      icon: <FiAward className="text-primary-600" />,
      description: "Specialized in Mobile Application Development and Web Technologies",
      courses: ["Advanced Mobile Development", "Cloud Computing", "Data Structures & Algorithms"]
    },
    {
      degree: "Bachelor of Computer Application",
      institution: "P A First Grade College",
      year: "2016",
      icon: <FiBook className="text-primary-600" />,
      description: "Focus on Software Engineering and Database Management Systems",
      courses: ["Software Engineering", "Database Systems", "Web Technologies"]
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            My <span className="text-primary-600">Education</span>
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Academic background and qualifications
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="flex items-start mb-4">
                <div className="p-2 bg-primary-50 rounded-lg mr-4">
                  {edu.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{edu.degree}</h3>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-1 mb-3">
                    <p className="text-gray-600">{edu.institution}</p>
                    <span className="text-primary-600 font-medium">{edu.year}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">{edu.description}</p>
              
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Key Courses
                </h4>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((course, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gray-50 px-3 py-1 rounded-full text-sm text-gray-700"
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