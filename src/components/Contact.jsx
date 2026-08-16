// src/components/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiLinkedin, FiGithub, FiArrowUpRight, FiMapPin } from 'react-icons/fi';
import SectionHeading from './SectionHeading';

const Contact = ({ isDarkMode }) => {
  const bgColor = isDarkMode ? 'bg-gray-900' : 'bg-gray-50';
  const cardBg = isDarkMode ? 'bg-gray-800' : 'bg-white';
  const borderColor = isDarkMode ? 'border-gray-700' : 'border-gray-100';
  const textColor = isDarkMode ? 'text-white' : 'text-gray-900';
  const secondaryText = isDarkMode ? 'text-gray-500' : 'text-gray-500';
  const primaryColor = isDarkMode ? 'text-primary-400' : 'text-primary-600';
  const iconBg = isDarkMode ? 'bg-gray-700' : 'bg-gray-50';

  const contactItems = [
    {
      icon: <FiPhone />,
      title: 'Phone (UAE)',
      value: '+971 56 485 0294',
      href: 'tel:+971564850294',
      external: false,
    },
    {
      icon: <FiPhone />,
      title: 'Phone (India)',
      value: '+91 73538 00310',
      href: 'tel:+917353800310',
      external: false,
    },
    {
      icon: <FiMapPin />,
      title: 'Location',
      value: 'Dubai, UAE — open to AU, CH, MY, NZ, SG',
      href: null,
      external: false,
    },
    {
      icon: <FiMail />,
      title: 'Email',
      value: 'mohinuddeenriyas@gmail.com',
      href: 'mailto:mohinuddeenriyas@gmail.com',
      external: false,
    },
    {
      icon: <FiLinkedin />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/mohinuddeen',
      href: 'https://www.linkedin.com/in/mohinuddeen/',
      external: true,
    },
    {
      icon: <FiGithub />,
      title: 'GitHub',
      value: 'github.com/mohinuddeen',
      href: 'https://github.com/mohinuddeen',
      external: true,
    },
  ];

  return (
    <section id="contact" className={`py-24 ${bgColor} transition-colors duration-300`}>
      <div className="container mx-auto px-6">
        <SectionHeading
          isDarkMode={isDarkMode}
          eyebrow="contact"
          title="Get in"
          accent="touch"
          description="Feel free to reach out for collaborations or just a friendly hello"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto"
        >
          <div className={`${cardBg} p-8 rounded-2xl shadow-sm border ${borderColor}`}>
            <h3 className={`font-display text-lg font-semibold ${textColor} mb-6`}>Contact information</h3>

            <div className="space-y-2">
              {contactItems.map((item, index) => {
                const content = (
                  <>
                    <div className={`p-3 rounded-full ${iconBg} ${primaryColor} ${item.href ? 'group-hover:bg-primary-600 group-hover:text-white' : ''} transition-colors flex-shrink-0`}>
                      {React.cloneElement(item.icon, { className: 'text-lg' })}
                    </div>
                    <div className="min-w-0">
                      <h4 className={`${secondaryText} text-xs font-mono uppercase tracking-wide mb-0.5`}>{item.title}</h4>
                      <p className={`${textColor} flex items-center gap-1`}>
                        {item.value}
                        {item.external && <FiArrowUpRight className={`${primaryColor} flex-shrink-0`} size={14} />}
                      </p>
                    </div>
                  </>
                );

                const sharedClasses = `flex items-center gap-4 p-2.5 -mx-2.5 rounded-xl group transition-colors ${
                  item.href ? (isDarkMode ? 'hover:bg-gray-700/50' : 'hover:bg-gray-50') : ''
                }`;

                return item.href ? (
                  <motion.a
                    key={index}
                    href={item.href}
                    target={item.external ? '_blank' : '_self'}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className={sharedClasses}
                  >
                    {content}
                  </motion.a>
                ) : (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className={sharedClasses}
                  >
                    {content}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;