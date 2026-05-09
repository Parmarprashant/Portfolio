import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = ({ isDark, setIsDark }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);

  const navItems = ['About', 'Skills', 'Projects', 'Figma Design', 'Certificates', 'Achievements', 'Education', 'Contact'];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const scrollPosition = window.scrollY + 100;

      // Special case for Hero/Home at the top
      if (scrollPosition < 500) {
        setActiveSection('');
        return;
      }

      for (const item of navItems) {
        const sectionId = item.toLowerCase().replace(/\s+/g, '-');
        const element = document.getElementById(sectionId);
        
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'glass-effect shadow-2xl py-3 border-b border-blue-500/20 backdrop-blur-xl' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <div />

        <div className="hidden md:flex gap-4 lg:gap-8 items-center">
          {navItems.map((item, idx) => {
            const sectionId = item.toLowerCase().replace(/\s+/g, '-');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={idx}
                href={`#${sectionId}`}
                onClick={() => setActiveSection(sectionId)}
                className={`text-sm lg:text-base font-semibold transition-all duration-300 relative group ${
                  isActive ? 'text-blue-500 scale-110' : 'text-slate-300 hover:text-blue-400'
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
          aria-label={menuOpen ? "Close menu" : "Open menu"}
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
              const sectionId = item.toLowerCase().replace(/\s+/g, '-');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={idx}
                  href={`#${sectionId}`}
                  className={`text-xl font-semibold transition-colors py-2 ${
                    isActive ? 'text-blue-400 scale-110' : 'text-slate-300 hover:text-blue-400'
                  }`}
                  onClick={() => {
                    setActiveSection(sectionId);
                    setMenuOpen(false);
                  }}
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
