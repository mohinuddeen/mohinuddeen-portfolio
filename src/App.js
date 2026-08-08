// src/App.js
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import HealthPlatform from './components/HealthPlatform';
import Education from './components/Education';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeMediaQuery.matches);

    const handleChange = (e) => setIsDarkMode(e.matches);
    darkModeMediaQuery.addEventListener('change', handleChange);
    return () => darkModeMediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <div
      className={`min-h-screen font-sans antialiased selection:bg-primary-500 selection:text-white ${
        isDarkMode ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <Header isDarkMode={isDarkMode} />
      <main>
        <Hero isDarkMode={isDarkMode} />
        <About isDarkMode={isDarkMode} />
        <Experience isDarkMode={isDarkMode} />
        <Skills isDarkMode={isDarkMode} />
        <HealthPlatform isDarkMode={isDarkMode} />
        <Projects isDarkMode={isDarkMode} />
        <Education isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} />
      </main>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;