import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import PageLoader from './components/PageLoader';
import ParticleBackground, { FloatingOrbs, MatrixBackground } from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import AcademicJourney from './components/AcademicJourney';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode');
      if (saved !== null) return JSON.parse(saved);
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-dark-50 dark:bg-dark-950 text-dark-900 dark:text-white transition-colors duration-300">
      {/* Global Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-primary-300 z-[1000] origin-left"
        style={{ scaleX }}
      />
      <PageLoader />
      
      {/* Global Background */}
      <div className="fixed inset-0 -z-10 bg-dark-50 dark:bg-dark-950 transition-colors duration-300">
        <FloatingOrbs />
        <ParticleBackground />
        <MatrixBackground />
      </div>

      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <About />
        <AcademicJourney />
        <Skills />
        <Projects />
        <Certificates />
        <Experience />

        <Contact />
      </main>
    </div>
  );
}
