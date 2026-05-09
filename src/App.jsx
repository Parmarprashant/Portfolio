import { useState, useEffect, lazy, Suspense } from 'react';
import './App.css';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy load sections below the fold
const About = lazy(() => import('./components/About'));
const Achievements = lazy(() => import('./components/Achievements'));
const Projects = lazy(() => import('./components/Projects'));
const FigmaDesign = lazy(() => import('./components/FigmaDesign'));
const Certificates = lazy(() => import('./components/Certificates'));
const Education = lazy(() => import('./components/Education'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    // Reduced from 2000ms to 800ms for better performance while maintaining branding
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading) return;

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          
          if (target.classList.contains('scroll-animate-left')) {
            target.classList.add('scroll-visible-left');
          } else if (target.classList.contains('scroll-animate-right')) {
            target.classList.add('scroll-visible-right');
          } else if (target.classList.contains('scroll-animate-up')) {
            target.classList.add('scroll-visible-up');
          } else if (target.classList.contains('scroll-animate-scale')) {
            target.classList.add('scroll-visible-scale');
          }
          
          observer.unobserve(target);
        }
      });
    }, observerOptions);

    // Initial check for elements
    const observeElements = () => {
      const elements = document.querySelectorAll('[class*="scroll-animate"]');
      elements.forEach((el) => observer.observe(el));
    };

    observeElements();

    // Use MutationObserver to watch for lazy-loaded content
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [isLoading]);

  return (
    <>
      {isLoading && <LoadingScreen />}

      <div className={`min-h-screen ${isDark ? 'bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white' : 'bg-gradient-to-b from-slate-50 via-blue-50 to-white text-slate-900'} overflow-x-clip transition-colors duration-500`}>
        <Navbar isDark={isDark} setIsDark={setIsDark} />
        <Hero />
        <Suspense fallback={<div className="h-20" />}>
          <About />
          <Projects />
          <FigmaDesign />
          <Certificates />
          <Achievements isLoading={isLoading} />
          <Education />
          <Contact />
          <Footer />
        </Suspense>
      </div>
    </>
  );
}
