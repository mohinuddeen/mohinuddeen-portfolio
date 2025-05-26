import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiCpu, FiDatabase, FiSmartphone } from 'react-icons/fi';

const About = () => {
  const expertiseAreas = [
    { icon: <FiSmartphone className="text-primary-600 text-2xl" />, title: "Mobile Development", description: "React Native, Android" },
    { icon: <FiCode className="text-primary-600 text-2xl" />, title: "Frontend Development", description: "React, Next.js, Tailwind" },
    { icon: <FiCpu className="text-primary-600 text-2xl" />, title: "Backend Integration", description: "Node.js, REST APIs" },
    { icon: <FiDatabase className="text-primary-600 text-2xl" />, title: "Database Management", description: "MySQL, MongoDB, SQLite" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            About <span className="text-primary-600">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Passionate developer creating exceptional digital experiences
          </p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Professional Summary</h3>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                I'm an experienced developer with <span className="font-semibold text-primary-600">7+ years</span> of expertise in building and maintaining 
                Android and iOS applications using <span className="text-primary-600">React Native, Java, and Kotlin</span>.
              </p>
              <p className="text-gray-700 leading-relaxed">
                I specialize in developing modern web applications using <span className="text-primary-600">React, Next.js, and Tailwind CSS</span> 
                to create responsive and scalable user interfaces that deliver exceptional user experiences.
              </p>
              <p className="text-gray-700 leading-relaxed">
                My skills include creating intuitive UI/UX designs, integrating RESTful APIs, managing databases, 
                and optimizing application performance. I thrive in collaborative environments and enjoy working 
                with cross-functional teams to deliver high-quality, maintainable software solutions.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Areas of Expertise</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {expertiseAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:border-primary-100 hover:shadow-md transition-all"
                >
                  <div className="flex items-center mb-3">
                    {area.icon}
                    <h4 className="text-lg font-semibold text-gray-800 ml-3">{area.title}</h4>
                  </div>
                  <p className="text-gray-600">{area.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 bg-primary-50 p-6 rounded-lg border border-primary-100">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Personal Approach</h4>
              <p className="text-gray-700">
                I believe in clean, maintainable code and user-centric design. My development process focuses on 
                scalability, performance, and creating intuitive interfaces that users love.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;