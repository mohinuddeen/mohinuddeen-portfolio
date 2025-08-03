import React from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiLinkedin, FiGithub, FiMapPin } from 'react-icons/fi';

const Contact = ({ isDarkMode }) => {
  // Color definitions
  const bgColor = isDarkMode ? 'bg-gray-900' : 'bg-white';
  const cardBg = isDarkMode ? 'bg-gray-800' : 'bg-gray-50';
  const borderColor = isDarkMode ? 'border-gray-700' : 'border-gray-100';
  const textColor = isDarkMode ? 'text-white' : 'text-gray-800';
  const secondaryText = isDarkMode ? 'text-gray-400' : 'text-gray-500';
  const primaryColor = isDarkMode ? 'text-primary-400' : 'text-primary-600';
  const iconBg = isDarkMode ? 'bg-gray-700' : 'bg-gray-100';

  const contactItems = [
    {
      icon: <FiPhone className="text-xl" />,
      title: "Phone",
      value: "+971 568319493",
      href: "tel:+971568319493"
    },
    {
      icon: <FiMail className="text-xl" />,
      title: "Email",
      value: "mohinuddeenriyas@gmail.com",
      href: "mailto:mohinuddeenriyas@gmail.com"
    },
    {
      icon: <FiLinkedin className="text-xl" />,
      title: "LinkedIn",
      value: "linkedin.com/in/mohinuddeen",
      href: "https://www.linkedin.com/in/mohinuddeen/"
    },
    {
      icon: <FiGithub className="text-xl" />,
      title: "GitHub",
      value: "github.com/mohinuddeen",
      href: "https://github.com/mohinuddeen"
    }
    // {
    //   icon: <FiMapPin className="text-xl" />,
    //   title: "Location",
    //   value: "Dubai, UAE",
    //   href: "https://goo.gl/maps/XYZ" // Replace with your actual Google Maps link
    // }
  ];

  return (
    <section id="contact" className={`py-20 ${bgColor} transition-colors duration-300`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl font-bold ${textColor} mb-4`}>
            Get In <span className={primaryColor}>Touch</span>
          </h2>
          <div className={`w-20 h-1 ${isDarkMode ? 'bg-primary-400' : 'bg-primary-600'} mx-auto mb-6`}></div>
          <p className={`${secondaryText} max-w-2xl mx-auto text-lg`}>
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto"
        >
          <div className={`${cardBg} p-8 rounded-xl shadow-sm border ${borderColor} hover:shadow-md dark:hover:shadow-gray-700/50 transition-all`}>
            <h3 className={`text-xl font-semibold ${textColor} mb-6`}>Contact Information</h3>
            
            <div className="space-y-5">
              {contactItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start group"
                >
                  <div className={`p-3 rounded-full mr-4 ${iconBg} ${primaryColor} transition-colors group-hover:bg-primary-500 group-hover:text-white dark:group-hover:bg-primary-600`}>
                    {React.cloneElement(item.icon, { className: `text-xl` })}
                  </div>
                  <div>
                    <h4 className={`${secondaryText} text-sm mb-1`}>{item.title}</h4>
                    <a 
                      href={item.href} 
                      target={item.title === 'Email' || item.title === 'Phone' ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                      className={`${textColor} hover:${primaryColor} transition-colors flex items-center`}
                    >
                      {item.value}
                      {['LinkedIn', 'GitHub'].includes(item.title) && (
                        <svg 
                          className="w-4 h-4 ml-1" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      )}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;