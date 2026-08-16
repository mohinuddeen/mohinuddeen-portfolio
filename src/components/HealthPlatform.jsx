// src/components/HealthPlatform.jsx
import React from 'react';
import { FaAndroid, FaGlobe, FaCode } from 'react-icons/fa';
import SectionHeading from './SectionHeading';

const HealthPlatform = ({ isDarkMode }) => {
  const bgColor = isDarkMode ? 'bg-gray-900' : 'bg-white';
  const cardBg = isDarkMode ? 'bg-gray-800' : 'bg-gray-50';
  const cardBorder = isDarkMode ? 'border-gray-700' : 'border-gray-100';
  const textColor = isDarkMode ? 'text-white' : 'text-gray-900';
  const secondaryText = isDarkMode ? 'text-gray-400' : 'text-gray-600';
  const iconBg = isDarkMode ? 'bg-gray-700' : 'bg-white';

  const links = [
    {
      href: 'https://health-platform-api-n9pl.onrender.com/api/docs/#/packages/packages_destroy',
      icon: <FaCode />,
      accent: isDarkMode ? 'text-primary-400' : 'text-primary-600',
      title: 'API Documentation',
      description: 'Explore the Health Platform REST API and available endpoints.',
      cta: 'View API docs',
      active: true,
    },
    {
      href: 'https://health-platform-web-vio3-omega.vercel.app/',
      icon: <FaGlobe />,
      accent: isDarkMode ? 'text-secondary-400' : 'text-secondary-600',
      title: 'Web Application',
      description: 'Visit the deployed Health Platform web application.',
      cta: 'Open web app',
      active: true,
    },
    {
      href: 'https://github.com/mohinuddeen/health-platform-mobile/releases/tag/v1.0.0',
      icon: <FaAndroid />,
      accent: isDarkMode ? 'text-gray-500' : 'text-gray-400',
      title: 'Android APK',
      description: 'Download the React Native Android application.',
      cta: 'Coming soon',
      active: false,
    },
  ];

  return (
    <section id="health-platform" className={`py-24 ${bgColor} transition-colors duration-300`}>
      <div className="container mx-auto px-6">
        <SectionHeading
          isDarkMode={isDarkMode}
          eyebrow="featured project"
          title="Health"
          accent="Platform"
          description="A healthcare service booking platform with a web application, REST API, and React Native mobile application."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target={link.active ? '_blank' : undefined}
              rel={link.active ? 'noopener noreferrer' : undefined}
              onClick={(e) => !link.active && e.preventDefault()}
              className={`group p-6 rounded-2xl border ${cardBorder} ${cardBg} transition-all ${
                link.active ? 'hover:-translate-y-1 hover:shadow-md cursor-pointer' : 'cursor-default opacity-70'
              }`}
            >
              <div className={`inline-flex p-3 rounded-xl mb-4 ${iconBg} ${link.accent}`}>
                {React.cloneElement(link.icon, { className: 'text-2xl' })}
              </div>
              <h3 className={`font-display font-semibold text-lg ${textColor} mb-2`}>{link.title}</h3>
              <p className={`${secondaryText} text-sm leading-relaxed mb-4`}>{link.description}</p>
              <span className={`inline-flex items-center gap-1 text-sm font-medium ${link.accent} ${link.active ? 'group-hover:underline' : ''}`}>
                {link.cta} {link.active && '→'}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthPlatform;