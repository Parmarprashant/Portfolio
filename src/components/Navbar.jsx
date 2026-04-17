import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = ({ isDark, setIsDark }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navItems = ['About', 'Achievements', 'Projects', 'Certificates', 'Skills', 'Education', 'Contact'];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const element = document.getElementById(item.toLowerCase());
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed w-full glass-effect shadow-2xl z-50 border-b border-blue-500/20 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        <div />

        <div className="hidden md:flex gap-10 items-center">
          {navItems.map((item, idx) => {
            const isActive = activeSection === item.toLowerCase();
            return (
              <a
                key={idx}
                href={`#${item.toLowerCase()}`}
                className={`font-semibold transition-all duration-300 relative group ${
                  isActive ? 'text-white scale-110' : 'text-slate-300 hover:text-blue-400'
                }`}
              >
                {item}
                <span 
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </a>
            );
          })}
          
          <button
            onClick={() => {
              setIsDark(!isDark);
              document.documentElement.classList.toggle('light-mode');
            }}
            className="p-2.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 flex items-center justify-center"
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 hover:bg-slate-800/50 rounded-lg transition-all"
        >
          {menuOpen ? <X size={24} className="text-blue-400" /> : <Menu size={24} className="text-blue-400" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden fixed inset-0 z-50 min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black animate-slide-in-down flex flex-col">
          <div className="flex justify-end p-6">
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-slate-800/50 transition-colors"
              aria-label="Close menu"
            >
              <X size={28} className="text-blue-400" />
            </button>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-8 px-6">
            {navItems.map((item, idx) => {
              const isActive = activeSection === item.toLowerCase();
              return (
                <a
                  key={idx}
                  href={`#${item.toLowerCase()}`}
                  className={`text-xl font-semibold transition-colors py-2 ${
                    isActive ? 'text-blue-400 scale-110' : 'text-slate-300 hover:text-blue-400'
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
