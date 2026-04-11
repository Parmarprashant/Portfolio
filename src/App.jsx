import React, { useState, useEffect } from 'react';
import './App.css';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let observer = null;
    const timer = setTimeout(() => {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      };

      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const classList = entry.target.className;
            
            if (typeof classList === 'string') {
              if (classList.includes('scroll-animate-left')) {
                entry.target.classList.add('scroll-visible-left');
              } else if (classList.includes('scroll-animate-right')) {
                entry.target.classList.add('scroll-visible-right');
              } else if (classList.includes('scroll-animate-up')) {
                entry.target.classList.add('scroll-visible-up');
              } else if (classList.includes('scroll-animate-scale')) {
                entry.target.classList.add('scroll-visible-scale');
              }
            }
            
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      const animatedElements = document.querySelectorAll('[class*="scroll-animate"]');
      animatedElements.forEach((el) => {
        observer.observe(el);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      if (observer) observer.disconnect();
    };
  }, [isLoading]);

  return (
    <>
      {isLoading && <LoadingScreen />}

      <div className={`min-h-screen ${isDark ? 'bg-gradient-to-b from-slate-950 via-slate-900 to-black' : 'bg-gradient-to-b from-slate-50 via-blue-50 to-white'} text-white overflow-x-hidden`}>
        <Navbar isDark={isDark} setIsDark={setIsDark} />
        <Hero />
        <About />
        <Achievements />
        <Projects />
        <Certificates />
        <Education />
        <Contact />
        <Footer />
      </div>
    </>
  );
}