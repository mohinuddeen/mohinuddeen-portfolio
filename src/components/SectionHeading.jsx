// src/components/SectionHeading.jsx
// Shared heading block so every section reads as part of one system.
// Eyebrow uses a "// code comment" motif — fitting for a developer's site,
// and honest about the content (these aren't a numbered sequence).
import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ isDarkMode, eyebrow, title, accent, description }) => {
  const textColor = isDarkMode ? 'text-white' : 'text-gray-900';
  const secondaryText = isDarkMode ? 'text-gray-400' : 'text-gray-600';
  const primaryColor = isDarkMode ? 'text-primary-400' : 'text-primary-600';
  const eyebrowColor = isDarkMode ? 'text-secondary-400' : 'text-secondary-600';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: '-100px' }}
      className="text-center mb-16"
    >
      <p className={`font-mono text-sm mb-3 ${eyebrowColor}`}>// {eyebrow}</p>
      <h2 className={`font-display text-4xl font-bold ${textColor} mb-4 tracking-tight`}>
        {title} <span className={primaryColor}>{accent}</span>
      </h2>
      {description && (
        <p className={`${secondaryText} max-w-2xl mx-auto text-lg`}>{description}</p>
      )}
    </motion.div>
  );
};

export default SectionHeading;