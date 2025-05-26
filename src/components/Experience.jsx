import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiCode, FiLayers, FiChevronDown, FiChevronUp } from 'react-icons/fi';

const Experience = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleProject = (companyIndex, projectIndex) => {
    const key = `${companyIndex}-${projectIndex}`;
    setExpandedProject(expandedProject === key ? null : key);
  };

  const experiences = [
    {
      company: "AL OTAIBA COMMUNICATION",
      role: "Software Developer",
      period: "Dec 2021 - Present",
      icon: <FiBriefcase className="text-blue-500" size={20} />,
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
      icon: <FiCode className="text-blue-500" size={20} />,
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
      icon: <FiLayers className="text-blue-500" size={20} />,
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
    <section id="experience" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            Professional <span className="text-blue-500">Experience</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
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
              className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center mb-2">
                    <div className="p-2 bg-blue-50 rounded-lg mr-3">
                      {exp.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{exp.company}</h3>
                  </div>
                  <div className="flex items-center text-gray-600 mb-3">
                    <span className="mr-4">{exp.role}</span>
                    <span className="flex items-center text-sm">
                      <FiCalendar className="mr-1" size={14} />
                      {exp.period}
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 px-2">{exp.roleSummary}</p>
              
              <h4 className="font-semibold text-gray-800 mb-4 px-2">Key Projects:</h4>
              
              <div className="space-y-3">
                {exp.projects.map((project, pIndex) => {
                  const projectKey = `${index}-${pIndex}`;
                  const isExpanded = expandedProject === projectKey;
                  
                  return (
                    <div key={pIndex} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                      <button
                        onClick={() => toggleProject(index, pIndex)}
                        className="w-full flex justify-between items-center p-4 hover:bg-gray-50 transition-colors"
                      >
                        <h5 className="font-medium text-gray-800 text-left">{project.name}</h5>
                        {isExpanded ? (
                          <FiChevronUp className="text-blue-500" />
                        ) : (
                          <FiChevronDown className="text-blue-500" />
                        )}
                      </button>
                      
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-4 pb-4"
                        >
                          <div className="pt-2 border-t border-gray-100">
                            <p className="text-gray-600 mb-4">{project.summary}</p>
                            
                            <div className="mb-4">
                              <h6 className="font-medium text-gray-700 mb-2">Responsibilities:</h6>
                              <div className="space-y-2">
                                {project.responsibilities.map((resp, rIndex) => (
                                  <div key={rIndex} className="flex">
                                    <span className="text-blue-500 mr-2">•</span>
                                    <span className="text-gray-700">{resp}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <h6 className="font-medium text-gray-700 mb-1">Technologies:</h6>
                              <div className="inline-flex flex-wrap gap-2">
                                {project.technologies.split(', ').map((tech, tIndex) => (
                                  <span key={tIndex} className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">
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