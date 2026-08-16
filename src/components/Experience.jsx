// src/components/Experience.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin, FiCode, FiLayers, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import SectionHeading from './SectionHeading';

const Experience = ({ isDarkMode }) => {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleProject = (companyIndex, projectIndex) => {
    const key = `${companyIndex}-${projectIndex}`;
    setExpandedProject(expandedProject === key ? null : key);
  };

  const bgColor = isDarkMode ? 'bg-gray-900' : 'bg-white';
  const cardBg = isDarkMode ? 'bg-gray-800' : 'bg-gray-50';
  const borderColor = isDarkMode ? 'border-gray-700' : 'border-gray-100';
  const textColor = isDarkMode ? 'text-white' : 'text-gray-900';
  const secondaryText = isDarkMode ? 'text-gray-400' : 'text-gray-600';
  const primaryColor = isDarkMode ? 'text-primary-400' : 'text-primary-600';
  const iconColor = isDarkMode ? 'text-primary-400' : 'text-primary-600';
  const iconBg = isDarkMode ? 'bg-gray-700' : 'bg-primary-50';
  const projectBg = isDarkMode ? 'bg-gray-700/60' : 'bg-white';
  const projectBorder = isDarkMode ? 'border-gray-600' : 'border-gray-200';
  const techBg = isDarkMode ? 'bg-gray-600' : 'bg-primary-50';
  const techText = isDarkMode ? 'text-primary-300' : 'text-primary-700';

  const experiences = [
    {
      company: 'Al Otaiba Communications',
      location: 'Dubai, UAE',
      role: 'Software Developer',
      period: 'Nov 2024 — Present',
      icon: <FiBriefcase />,
      roleSummary:
        'Architect secure, cross-platform mobile applications using React Native and Flutter for healthcare, e-commerce, and workforce-management platforms — applying OWASP Top 10 principles, manual security testing with Burp Suite, and secure API design (JWT, RBAC, HTTPS) throughout the development lifecycle.',
      projects: [
        {
          name: 'German Supplements',
          summary: 'A B2C application for selling German supplements directly to customers.',
          responsibilities: [
            'Developed both the mobile application and website',
            'Integrated custom CS-Cart APIs for authentication, product management, ordering, and customer data',
            'Implemented secure API communication using JWT authentication, role-based access control, and input validation',
          ],
          technologies: 'React Native (Expo), React, Next.js, CS-Cart Add-on APIs',
        },
        {
          name: 'German Health Hub',
          summary: 'A B2C application offering healthcare services to customers within Dubai.',
          responsibilities: [
            'Developed both mobile and web platforms',
            'Built custom CS-Cart add-ons for homepage banners, featured products, categories, and dynamic content',
            'Performed manual security testing on APIs by analyzing HTTP requests, headers, cookies, and auth flows with Burp Suite',
          ],
          technologies: 'React Native (Expo), React, Next.js, CS-Cart Add-on APIs',
        },
        {
          name: 'HRMS Location Tracking System',
          summary: 'A Flutter mobile app with a PHP backend and admin dashboard for location-based staff attendance.',
          responsibilities: [
            'Built the Flutter mobile app and PHP backend APIs for location-based attendance and staff tracking',
            'Implemented GPS geofencing, background location monitoring, and audit logging',
            'Built the HRMS admin dashboard for attendance management and reporting',
          ],
          technologies: 'Flutter, PHP, MySQL, Tailwind CSS, GPS Geofencing',
        },
      ],
    },
    {
      company: 'Copperleaf Technologies',
      location: 'Kozhikode, India',
      role: 'Android Developer',
      period: 'Mar 2021 — Nov 2024',
      icon: <FiCode />,
      roleSummary:
        'Built enterprise Android applications (Java/Kotlin) for B2B platforms — ElleysERP and Capex — supporting workforce management, sales operations, and offline-first data sync for thousands of business users.',
      projects: [
        {
          name: 'Elleys ERP',
          summary: 'A B2B application for managing electric products, workforce, and construction-related projects.',
          responsibilities: [
            'Implemented MVVM architecture, SQLite offline storage, and performance optimization',
            'Developed workforce management features: attendance, task tracking, expenses, and reporting',
          ],
          technologies: 'Java, Kotlin, MVVM, SQLite, SOAP, Android Studio, Git',
        },
        {
          name: 'Capex',
          summary: 'A B2B application for dealer sales, order tracking, and offline stock management.',
          responsibilities: [
            'Integrated REST/SOAP APIs, push notifications, and background synchronization',
            'Performed code reviews, debugging, and security improvements following secure development practices',
          ],
          technologies: 'SOAP, SQLite, JSON, Android Studio, Google Maps, Glide',
        },
      ],
    },
    {
      company: 'Amitzinfy Pvt. Ltd.',
      location: 'Mangalore, India',
      role: 'Application Developer',
      period: 'Sep 2018 — Feb 2021',
      icon: <FiLayers />,
      roleSummary:
        'Developed Android applications for restaurant management and e-commerce sectors with full-stack implementation.',
      projects: [
        {
          name: 'Restaurant KOT System',
          summary: 'A restaurant management app for real-time Kitchen Order Ticket (KOT) printing and billing.',
          responsibilities: ['Developed both front-end and back-end (APIs)', 'Integrated push notifications and handled order workflow'],
          technologies: 'Volley, JSON, Android Studio, WAMP, PHP, MySQL, MVVM, Push Notifications',
        },
        {
          name: 'Fresh on Wheel',
          summary: 'An e-commerce app for wholesale vegetable and fruit purchases by retail shop owners.',
          responsibilities: ['Designed and developed front-end features', 'Built REST API integrations using Retrofit and JSON'],
          technologies: 'Retrofit, JSON, Android Studio',
        },
      ],
    },
  ];

  return (
    <section id="experience" className={`py-24 ${bgColor} transition-colors duration-300`}>
      <div className="container mx-auto px-6">
        <SectionHeading
          isDarkMode={isDarkMode}
          eyebrow="experience"
          title="Professional"
          accent="experience"
          description="My career journey and key projects I've contributed to"
        />

        <div className="max-w-5xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className={`${cardBg} rounded-2xl p-6 md:p-8 border ${borderColor}`}
            >
              <div className="flex items-start gap-4 mb-5">
                <div className={`p-3 ${iconBg} rounded-xl ${iconColor} flex-shrink-0`}>
                  {React.cloneElement(exp.icon, { className: 'text-xl' })}
                </div>
                <div>
                  <h3 className={`font-display text-xl font-bold ${textColor}`}>{exp.company}</h3>
                  <div className={`flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 ${secondaryText} text-sm`}>
                    <span className="font-medium">{exp.role}</span>
                    <span className="flex items-center gap-1.5">
                      <FiMapPin size={13} />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FiCalendar size={13} />
                      {exp.period}
                    </span>
                  </div>
                </div>
              </div>

              <p className={`${secondaryText} mb-6 md:ml-16 leading-relaxed`}>{exp.roleSummary}</p>

              <h4 className={`font-mono text-xs uppercase tracking-wider ${primaryColor} mb-3 md:ml-16`}>Key projects</h4>

              <div className="space-y-3 md:ml-16">
                {exp.projects.map((project, pIndex) => {
                  const projectKey = `${index}-${pIndex}`;
                  const isExpanded = expandedProject === projectKey;

                  return (
                    <div
                      key={pIndex}
                      className={`${projectBg} rounded-xl border ${projectBorder} overflow-hidden transition-shadow ${isExpanded ? 'shadow-sm' : ''}`}
                    >
                      <button
                        onClick={() => toggleProject(index, pIndex)}
                        className={`w-full flex justify-between items-center p-4 md:p-5 transition-colors ${isDarkMode ? 'hover:bg-gray-600/40' : 'hover:bg-gray-50'}`}
                        aria-expanded={isExpanded}
                      >
                        <h5 className={`font-medium ${textColor} text-left`}>{project.name}</h5>
                        {isExpanded ? <FiChevronUp className={iconColor} /> : <FiChevronDown className={iconColor} />}
                      </button>

                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-4 md:px-5 pb-5"
                        >
                          <div className={`pt-4 border-t ${projectBorder}`}>
                            <p className={`${secondaryText} mb-4 text-sm leading-relaxed`}>{project.summary}</p>

                            <div className="mb-4">
                              <h6 className={`font-medium ${textColor} text-sm mb-2`}>Responsibilities</h6>
                              <div className="space-y-1.5">
                                {project.responsibilities.map((resp, rIndex) => (
                                  <div key={rIndex} className="flex text-sm">
                                    <span className={`${iconColor} mr-2`}>—</span>
                                    <span className={secondaryText}>{resp}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div>
                              <h6 className={`font-medium ${textColor} text-sm mb-2`}>Technologies</h6>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.split(', ').map((tech, tIndex) => (
                                  <span key={tIndex} className={`${techBg} ${techText} font-mono px-2.5 py-1 rounded-md text-xs`}>
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