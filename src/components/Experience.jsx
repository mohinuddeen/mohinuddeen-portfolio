import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiCode, FiLayers, FiChevronDown, FiChevronUp } from 'react-icons/fi';

const Experience = ({ isDarkMode }) => {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleProject = (companyIndex, projectIndex) => {
    const key = `${companyIndex}-${projectIndex}`;
    setExpandedProject(expandedProject === key ? null : key);
  };

  // Color definitions
  const bgColor = isDarkMode ? 'bg-gray-900' : 'bg-white';
  const cardBg = isDarkMode ? 'bg-gray-800' : 'bg-gray-50';
  const borderColor = isDarkMode ? 'border-gray-700' : 'border-gray-100';
  const textColor = isDarkMode ? 'text-white' : 'text-gray-800';
  const secondaryText = isDarkMode ? 'text-gray-300' : 'text-gray-600';
  const primaryColor = isDarkMode ? 'text-primary-400' : 'text-primary-600';
  const iconColor = isDarkMode ? 'text-blue-400' : 'text-blue-500';
  const iconBg = isDarkMode ? 'bg-gray-700' : 'bg-blue-50';
  const projectBg = isDarkMode ? 'bg-gray-700' : 'bg-white';
  const projectBorder = isDarkMode ? 'border-gray-600' : 'border-gray-200';
  const techBg = isDarkMode ? 'bg-gray-600' : 'bg-blue-50';
  const techText = isDarkMode ? 'text-blue-300' : 'text-blue-600';

  const experiences = [
    {
      company: "AL OTAIBA COMMUNICATION",
      role: "Software Developer",
      period: "Dec 2021 - Present",
      icon: <FiBriefcase size={20} />,
      roleSummary: "Developed mobile and web applications for e-commerce and healthcare platforms, specializing in React Native and Next.js with CS-Cart integration.",
      projects: [
        {
          name: "German Supplements",
          summary: "A B2C application for selling German supplements directly to customers.",
          responsibilities: [
            "Developed both the mobile application and website",
            "Created UI/UX and implemented front-end features",
            "Integrated custom CS-Cart add-on APIs for product data and order management"
          ],
          technologies: "React Native (Expo), React, Next.js, CS-Cart Add-on APIs"
        },
        {
          name: "German Health Hub",
          summary: "A B2C application offering healthcare services to customers within Dubai.",
          responsibilities: [
            "Developed both mobile and web platforms",
            "Designed and implemented application interface and API integration",
            "Built and managed CS-Cart add-ons for service data and user management"
          ],
          technologies: "React Native (Expo), React, Next.js, CS-Cart Add-on APIs"
        }
      ]
    },
    {
      company: "COPPER LEAF TECHNOLOGIES",
      role: "Mobile and Web Developer",
      period: "Mar 2021 - Nov 2024",
      icon: <FiCode size={20} />,
      roleSummary: "Built enterprise B2B applications with offline capabilities, focusing on inventory management and sales tracking systems.",
      projects: [
        {
          name: "Elleys ERP",
          summary: "A B2B application for managing electric products, workforce, and construction-related projects.",
          responsibilities: [
            "Designed UI and developed front-end features",
            "Managed local database and offline data handling"
          ],
          technologies: "SOAP, SQLite, JSON, Android Studio, Git"
        },
        {
          name: "Capex",
          summary: "A B2B application for dealer sales, order tracking, and offline stock management.",
          responsibilities: [
            "Developed front-end modules and fixed bugs",
            "Managed local data sync and offline access"
          ],
          technologies: "SOAP, SQLite, JSON, Android Studio, Google Maps, AsyncTask, Glide"
        }
      ]
    },
    {
      company: "AMITZINFY PVT. LTD.",
      role: "Android Developer",
      period: "Sep 2018 - Feb 2021",
      icon: <FiLayers size={20} />,
      roleSummary: "Developed Android applications for restaurant management and e-commerce sectors with full-stack implementation.",
      projects: [
        {
          name: "Restaurant KOT System",
          summary: "A restaurant management app for real-time Kitchen Order Ticket (KOT) printing and billing.",
          responsibilities: [
            "Developed both front-end and back-end (APIs)",
            "Integrated push notifications and handled order workflow"
          ],
          technologies: "Volley, JSON, Android Studio, WAMP, PHP, MySQL, MVVM, Push Notifications"
        },
        {
          name: "Fresh on Wheel",
          summary: "An e-commerce app for wholesale vegetable and fruit purchases by retail shop owners.",
          responsibilities: [
            "Designed and developed front-end features",
            "Collaborated with backend for seamless user experience"
          ],
          technologies: "Retrofit, JSON, Android Studio"
        }
      ]
    }
  ];

  return (
    <section id="experience" className={`py-20 ${bgColor} transition-colors duration-300`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl font-bold ${textColor} mb-4`}>
            Professional <span className={primaryColor}>Experience</span>
          </h2>
          <div className={`w-20 h-1 ${isDarkMode ? 'bg-primary-400' : 'bg-primary-600'} mx-auto mb-6`}></div>
          <p className={`${secondaryText} max-w-2xl mx-auto text-lg`}>
            My career journey and key projects I've contributed to
          </p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto space-y-8 relative">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${cardBg} rounded-xl p-8 shadow-sm border ${borderColor} hover:shadow-md dark:hover:shadow-gray-700/50 transition-all`}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center mb-3">
                    <div className={`p-3 ${iconBg} rounded-lg mr-4 ${iconColor}`}>
                      {React.cloneElement(exp.icon, { className: "text-xl" })}
                    </div>
                    <h3 className={`text-2xl font-bold ${textColor}`}>{exp.company}</h3>
                  </div>
                  <div className={`flex items-center ${secondaryText} mb-4 ml-16`}>
                    <span className="mr-6 font-medium">{exp.role}</span>
                    <span className="flex items-center text-sm">
                      <FiCalendar className="mr-2" size={14} />
                      {exp.period}
                    </span>
                  </div>
                </div>
              </div>
              
              <p className={`${secondaryText} mb-8 ml-16`}>{exp.roleSummary}</p>
              
              <h4 className={`font-semibold ${textColor} mb-6 ml-16`}>Key Projects:</h4>
              
              <div className="space-y-4 ml-16">
                {exp.projects.map((project, pIndex) => {
                  const projectKey = `${index}-${pIndex}`;
                  const isExpanded = expandedProject === projectKey;
                  
                  return (
                    <div 
                      key={pIndex} 
                      className={`${projectBg} rounded-lg border ${projectBorder} overflow-hidden transition-all duration-300 ${isExpanded ? 'shadow-md' : ''}`}
                    >
                      <button
                        onClick={() => toggleProject(index, pIndex)}
                        className={`w-full flex justify-between items-center p-5 hover:bg-opacity-50 ${isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-50'} transition-colors`}
                      >
                        <h5 className={`font-medium ${textColor} text-left`}>{project.name}</h5>
                        {isExpanded ? (
                          <FiChevronUp className={iconColor} />
                        ) : (
                          <FiChevronDown className={iconColor} />
                        )}
                      </button>
                      
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-5 pb-5"
                        >
                          <div className="pt-4 border-t border-gray-200 dark:border-gray-600">
                            <p className={`${secondaryText} mb-5`}>{project.summary}</p>
                            
                            <div className="mb-5">
                              <h6 className={`font-medium ${textColor} mb-3`}>Responsibilities:</h6>
                              <div className="space-y-2">
                                {project.responsibilities.map((resp, rIndex) => (
                                  <div key={rIndex} className="flex">
                                    <span className={`${iconColor} mr-2`}>•</span>
                                    <span className={secondaryText}>{resp}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <h6 className={`font-medium ${textColor} mb-2`}>Technologies:</h6>
                              <div className="inline-flex flex-wrap gap-2">
                                {project.technologies.split(', ').map((tech, tIndex) => (
                                  <span 
                                    key={tIndex} 
                                    className={`${techBg} ${techText} px-3 py-1 rounded-full text-sm`}
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;