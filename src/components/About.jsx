// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiCpu, FiDatabase, FiSmartphone, FiShield } from 'react-icons/fi';
import SectionHeading from './SectionHeading';

const About = ({ isDarkMode }) => {
  const bgColor = isDarkMode ? 'bg-gray-900' : 'bg-gray-50';
  const textColor = isDarkMode ? 'text-white' : 'text-gray-900';
  const secondaryText = isDarkMode ? 'text-gray-400' : 'text-gray-600';
  const primaryColor = isDarkMode ? 'text-primary-400' : 'text-primary-600';
  const cardBg = isDarkMode ? 'bg-gray-800' : 'bg-white';
  const cardBorder = isDarkMode ? 'border-gray-700' : 'border-gray-100';
  const highlightBg = isDarkMode ? 'bg-gray-800' : 'bg-primary-50/60';
  const highlightBorder = isDarkMode ? 'border-gray-700' : 'border-primary-100';

  const expertiseAreas = [
    { icon: <FiSmartphone />, title: 'Mobile Development', description: 'React Native, Android, iOS, Flutter' },
    { icon: <FiCode />, title: 'Frontend Development', description: 'React, Next.js, Tailwind, TypeScript' },
    { icon: <FiCpu />, title: 'Backend Development', description: 'Node.js, Python, REST/GraphQL APIs' },
    { icon: <FiDatabase />, title: 'Database Management', description: 'MySQL, SQLite, PostgreSQL' },
    { icon: <FiShield />, title: 'Application Security', description: 'OWASP Top 10, Burp Suite, secure API design' },
  ];

  return (
    <section id="about" className={`py-24 ${bgColor} transition-colors duration-300`}>
      <div className="container mx-auto px-6">
        <SectionHeading
          isDarkMode={isDarkMode}
          eyebrow="about"
          title="About"
          accent="me"
          description="Passionate developer crafting exceptional digital experiences"
        />

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Professional Summary */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`${cardBg} p-8 rounded-2xl shadow-sm border ${cardBorder}`}
          >
            <h3 className={`font-display text-xl font-semibold ${textColor} mb-6`}>Professional journey</h3>
            <div className="space-y-4">
              <p className={`${secondaryText} leading-relaxed`}>
                I'm a Senior Software Engineer with{' '}
                <span className={`font-semibold ${primaryColor}`}>7+ years</span> of experience designing and
                building scalable mobile, web, and backend solutions across healthcare, e-commerce, ERP, and
                enterprise domains — using{' '}
                <span className={`font-medium ${textColor}`}>React Native, Android (Java/Kotlin), Flutter, React,
                Next.js, Django, and PHP</span>.
              </p>
              <p className={`${secondaryText} leading-relaxed`}>
                Alongside development, I have hands-on experience applying{' '}
                <span className={`font-medium ${textColor}`}>OWASP Top 10 principles</span>, performing manual
                security testing with <span className={`font-medium ${textColor}`}>Burp Suite</span>, and analyzing
                HTTP traffic to identify vulnerabilities such as XSS, SQL injection, IDOR, and access-control
                issues — knowledge I fold directly into how I design and secure the applications I build.
              </p>
              <p className={`${secondaryText} leading-relaxed`}>
                My work spans intuitive UI/UX design, complex API integration, database performance, and robust
                testing — and I enjoy mentoring junior developers along the way.
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
            <h3 className={`font-display text-xl font-semibold ${textColor} mb-6`}>Technical expertise</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {expertiseAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`${cardBg} p-5 rounded-xl shadow-sm border ${cardBorder} hover:-translate-y-0.5 hover:shadow-md transition-all group`}
                >
                  <div className={`inline-flex p-2.5 rounded-lg mb-3 ${primaryColor} ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} group-hover:bg-primary-600 group-hover:text-white transition-colors`}>
                    {React.cloneElement(area.icon, { className: 'text-lg' })}
                  </div>
                  <h4 className={`font-medium ${textColor} mb-1`}>{area.title}</h4>
                  <p className={`${secondaryText} text-sm`}>{area.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className={`mt-6 ${highlightBg} p-6 rounded-xl border ${highlightBorder}`}
            >
              <h4 className={`font-medium ${textColor} mb-2`}>Development philosophy</h4>
              <p className={`${secondaryText} text-sm leading-relaxed`}>
                Clean, maintainable code with thorough documentation — combining technical
                rigor with user-centric design, so solutions are both powerful and intuitive.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;