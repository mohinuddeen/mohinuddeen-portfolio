// src/components/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiDownload } from 'react-icons/fi';
import SectionHeading from './SectionHeading';

const Projects = ({ isDarkMode }) => {
  const bgColor = isDarkMode ? 'bg-gray-900' : 'bg-gray-50';
  const cardBg = isDarkMode ? 'bg-gray-800' : 'bg-white';
  const cardBorder = isDarkMode ? 'border-gray-700' : 'border-gray-100';
  const textColor = isDarkMode ? 'text-white' : 'text-gray-900';
  const secondaryText = isDarkMode ? 'text-gray-400' : 'text-gray-600';
  const primaryColor = isDarkMode ? 'text-primary-400' : 'text-primary-600';
  const eyebrowColor = isDarkMode ? 'text-secondary-400' : 'text-secondary-600';
  const tagBg = isDarkMode ? 'bg-gray-700' : 'bg-gray-50';
  const tagBorder = isDarkMode ? 'border-gray-600' : 'border-gray-200';
  const ctaBorder = isDarkMode ? 'border-gray-700' : 'border-gray-100';

  const projects = [
    {
      name: 'Pure Dairy International',
      tagline: 'Globally trusted',
      description:
        'Premium cheese, butter, and dairy solutions — crafted for restaurants, hotels, and food innovators worldwide.',
      tags: ['Website', 'React', 'Tailwind CSS', 'Vercel'],
      links: [
        { label: 'Visit site', href: 'https://pure-dairy-international.vercel.app/', icon: <FiExternalLink /> },
      ],
    },
    {
      name: 'Expense Tracker',
      tagline: 'Flutter · offline-first',
      description:
        'A simple expense tracker that lets users log received and spent amounts with custom categories and remarks. All data stays on-device, with monthly, category-wise reports showing total received, total spent, and balance.',
      tags: ['Flutter', 'Offline-first', 'Android'],
      links: [
        { label: 'View on GitHub', href: 'https://github.com/mohinuddeen/Expense', icon: <FiGithub /> },
        { label: 'Download APK', href: 'https://github.com/mohinuddeen/Expense/releases/tag/v1.0.2', icon: <FiDownload /> },
      ],
    },
  ];

  return (
    <section id="projects" className={`py-24 ${bgColor} transition-colors duration-300`}>
      <div className="container mx-auto px-6">
        <SectionHeading
          isDarkMode={isDarkMode}
          eyebrow="more work"
          title="Other"
          accent="projects"
          description="A few more things I've built, ranging from client websites to mobile apps"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${cardBg} rounded-2xl border ${cardBorder} shadow-sm hover:shadow-md transition-all p-7 flex flex-col`}
            >
              <p className={`font-mono text-xs mb-2 ${eyebrowColor}`}>// {project.tagline}</p>
              <h3 className={`font-display text-xl font-bold ${textColor} mb-3`}>{project.name}</h3>
              <p className={`${secondaryText} text-sm leading-relaxed mb-5`}>{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tIndex) => (
                  <span
                    key={tIndex}
                    className={`${tagBg} border ${tagBorder} ${secondaryText} font-mono px-2.5 py-1 rounded-md text-xs`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className={`mt-auto pt-5 border-t ${ctaBorder} flex flex-wrap gap-4`}>
                {project.links.map((link, lIndex) => (
                  <a
                    key={lIndex}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 text-sm font-medium ${primaryColor} hover:underline`}
                  >
                    {React.cloneElement(link.icon, { size: 15 })}
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;