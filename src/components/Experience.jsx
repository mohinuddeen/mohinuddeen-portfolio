import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiCode, FiLayers } from 'react-icons/fi';

const Experience = () => {
  const experiences = [
    {
      company: "AL OTAIBA COMMUNICATION",
      role: "Software Developer",
      period: "2021 - Present",
      icon: <FiBriefcase className="text-primary-600" />,
      description: "Developed mobile and web apps for German Supplements and German Health Hub using React Native for Android/iOS and React with Next.js for web. Created and managed CS-Cart APIs ensuring smooth integration across platforms. Built custom CS-Cart addon for German Supplements to manage banners, homepage categories, and product listings. Implemented responsive designs and optimized application performance."
    },
    {
      company: "COPPER LEAF TECHNOLOGIES",
      role: "Mobile and Web Developer",
      period: "2018 - 2021",
      icon: <FiCode className="text-primary-600" />,
      description: "Developed Android apps using Java and Kotlin with focus on UI/UX and API integration. Built B2B apps like ElleysERP and Capex using SOAP, SQLite, JSON and Android Studio. Collaborated with clients to understand requirements and deliver tailored solutions. Conducted code reviews and mentored junior developers."
    },
    {
      company: "AMITZINFY PVT. LTD.",
      role: "Android Developer",
      period: "2016 - 2018",
      icon: <FiLayers className="text-primary-600" />,
      description: "Developed Android apps using Java, designing intuitive user interfaces. Built apps like Restaurant KOT System and Fresh on Wheel using Android Studio, PHP, MySQL. Implemented Retrofit for API integration and followed MVVM architecture. Participated in full development lifecycle from concept to deployment."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Work <span className="text-primary-600">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional journey and key contributions
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto space-y-8 relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 h-full w-0.5 bg-gray-200"></div>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-6 w-4 h-4 rounded-full bg-primary-600 border-4 border-white -translate-x-1/2"></div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-primary-600">
                <div className="flex items-center mb-2">
                  <span className="mr-3">{exp.icon}</span>
                  <h3 className="text-xl font-bold text-gray-800">{exp.company}</h3>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                  <h4 className="text-lg text-gray-600">{exp.role}</h4>
                  <span className="inline-flex items-center text-primary-600 font-medium">
                    <FiCalendar className="mr-2" />
                    {exp.period}
                  </span>
                </div>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-gray-700"
                >
                  {exp.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;