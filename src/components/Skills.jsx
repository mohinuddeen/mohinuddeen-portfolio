import React from 'react';
import { motion } from 'framer-motion';
import { FiSmartphone, FiMonitor, FiServer, FiDatabase } from 'react-icons/fi';

const Skills = ({ isDarkMode }) => {
  const skillsCategories = [
    {
      title: "Mobile Development",
      icon: <FiSmartphone className="text-xl" />,
      skills: [
        { name: "React Native", level: 90 },
        { name: "Android (Java/Kotlin)", level: 85 },
        { name: "Flutter", level: 70 },
        { name: "iOS (Swift)", level: 65 },
      ]
    },
    {
      title: "Frontend Development",
      icon: <FiMonitor className="text-xl" />,
      skills: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 90 }
      ]
    },
    {
      title: "Backend Development",
      icon: <FiServer className="text-xl" />,
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Python", level: 75 },
        { name: "Django", level: 70 },
        { name: "REST APIs", level: 85 },
        { name: "GraphQL", level: 75 },
      ]
    },
    {
      title: "Database & Tools",
      icon: <FiDatabase className="text-xl" />,
      skills: [
        { name: "MySQL", level: 85 },
        { name: "SQLite", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "Git", level: 90 },
        { name: "Docker", level: 80 },
      ]
    }
  ];

  // Color definitions
  const primaryColor = isDarkMode ? "text-primary-400" : "text-primary-600";
  const bgColor = isDarkMode ? "bg-gray-900" : "bg-white";
  const cardBg = isDarkMode ? "bg-gray-800" : "bg-gray-50";
  const cardBorder = isDarkMode ? "border-gray-700" : "border-gray-100";
  const cardShadow = isDarkMode ? "hover:shadow-gray-700/50" : "hover:shadow-md";
  const textColor = isDarkMode ? "text-white" : "text-gray-800";
  const secondaryText = isDarkMode ? "text-gray-300" : "text-gray-600";
  const progressBg = isDarkMode ? "bg-gray-700" : "bg-gray-200";
  const progressBar = isDarkMode ? "bg-primary-400" : "bg-primary-600";

  return (
    <section id="skills" className={`py-20 ${bgColor} transition-colors duration-300`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl font-bold ${textColor} mb-4`}>
            My <span className={primaryColor}>Skills</span>
          </h2>
          <div className={`w-20 h-1 ${progressBar} mx-auto mb-6`}></div>
          <p className={`${secondaryText} max-w-2xl mx-auto text-lg`}>
            Technologies I work with and my proficiency levels
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skillsCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`${cardBg} p-6 rounded-xl shadow-sm ${cardShadow} transition-all duration-300 border ${cardBorder} hover:-translate-y-1`}
            >
              <div className="flex items-center mb-5">
                <div className={`p-3 rounded-lg ${primaryColor} ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  {React.cloneElement(category.icon, { className: `text-xl ${primaryColor}` })}
                </div>
                <h3 className={`text-xl font-semibold ${textColor} ml-4`}>
                  {category.title}
                </h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i} className="group">
                    <div className="flex justify-between mb-1">
                      <span className={`${secondaryText} group-hover:${primaryColor} transition-colors`}>
                        {skill.name}
                      </span>
                      <span className={`text-gray-500 dark:text-gray-400`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className={`w-full ${progressBg} rounded-full h-2 overflow-hidden`}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1.5, 
                          delay: i * 0.05,
                          type: "spring",
                          damping: 15
                        }}
                        viewport={{ once: true }}
                        className={`h-2 rounded-full ${progressBar}`}
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