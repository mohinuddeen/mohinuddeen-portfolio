// src/components/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiSmartphone, FiMonitor, FiServer, FiDatabase, FiShield } from 'react-icons/fi';
import SectionHeading from './SectionHeading';

const Skills = ({ isDarkMode }) => {
  const skillsCategories = [
    {
      title: 'Mobile Development',
      icon: <FiSmartphone />,
      skills: [
        { name: 'React Native', level: 90 },
        { name: 'Android (Java/Kotlin)', level: 85 },
        { name: 'Flutter', level: 70 },
        { name: 'iOS (Swift)', level: 65 },
      ],
    },
    {
      title: 'Frontend Development',
      icon: <FiMonitor />,
      skills: [
        { name: 'React', level: 95 },
        { name: 'Next.js', level: 90 },
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
      ],
    },
    {
      title: 'Backend Development',
      icon: <FiServer />,
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Python', level: 75 },
        { name: 'Django', level: 70 },
        { name: 'REST APIs', level: 85 },
        { name: 'GraphQL', level: 75 },
      ],
    },
    {
      title: 'Database & Tools',
      icon: <FiDatabase />,
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'SQLite', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 80 },
      ],
    },
    {
      title: 'Application Security',
      icon: <FiShield />,
      skills: [
        { name: 'OWASP Top 10', level: 80 },
        { name: 'Burp Suite', level: 75 },
        { name: 'Manual Security Testing', level: 75 },
        { name: 'Secure API Design (JWT, RBAC)', level: 80 },
      ],
    },
  ];

  const primaryColor = isDarkMode ? 'text-primary-400' : 'text-primary-600';
  const bgColor = isDarkMode ? 'bg-gray-900' : 'bg-gray-50';
  const cardBg = isDarkMode ? 'bg-gray-800' : 'bg-white';
  const cardBorder = isDarkMode ? 'border-gray-700' : 'border-gray-100';
  const textColor = isDarkMode ? 'text-white' : 'text-gray-900';
  const secondaryText = isDarkMode ? 'text-gray-400' : 'text-gray-600';
  const progressBg = isDarkMode ? 'bg-gray-700' : 'bg-gray-100';
  const progressBar = isDarkMode ? 'bg-primary-400' : 'bg-primary-600';

  return (
    <section id="skills" className={`py-24 ${bgColor} transition-colors duration-300`}>
      <div className="container mx-auto px-6">
        <SectionHeading
          isDarkMode={isDarkMode}
          eyebrow="skills"
          title="My"
          accent="skills"
          description="Technologies I work with and my proficiency levels"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-5 max-w-7xl mx-auto">
          {skillsCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-50px' }}
              className={`${cardBg} p-6 rounded-2xl shadow-sm border ${cardBorder} hover:-translate-y-1 hover:shadow-md transition-all duration-300`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`p-2.5 rounded-lg ${primaryColor} ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  {React.cloneElement(category.icon, { className: 'text-lg' })}
                </div>
                <h3 className={`font-medium ${textColor}`}>{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1.5 text-sm">
                      <span className={secondaryText}>{skill.name}</span>
                      <span className="font-mono text-xs text-gray-400">{skill.level}%</span>
                    </div>
                    <div className={`w-full ${progressBg} rounded-full h-1.5 overflow-hidden`}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.2, delay: i * 0.05, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className={`h-1.5 rounded-full ${progressBar}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;