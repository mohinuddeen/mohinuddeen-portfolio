import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for dark mode preference at the OS/browser level
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Set the initial value
    setIsDarkMode(darkModeMediaQuery.matches);
    
    // Listen for changes
    const handleChange = (e) => {
      setIsDarkMode(e.matches);
    };
    
    darkModeMediaQuery.addEventListener('change', handleChange);
    
    // Clean up the listener when the component unmounts
    return () => {
      darkModeMediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <div className={`min-h-screen ${isDarkMode ? 
      'bg-gray-900' : 
      'bg-gradient-to-b from-white to-gray-100'}`}
    >
      <Header isDarkMode={isDarkMode} />
      <main className="container mx-auto px-4 py-8">
        <Hero isDarkMode={isDarkMode} />
        <About isDarkMode={isDarkMode} />
        <Experience isDarkMode={isDarkMode} />
        <Skills isDarkMode={isDarkMode} />
        <Education isDarkMode={isDarkMode} />  
        <Contact isDarkMode={isDarkMode} />
      </main>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;