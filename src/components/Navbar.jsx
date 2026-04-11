import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = ({ isDark, setIsDark }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full glass-effect shadow-2xl z-50 border-b border-blue-500/20 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src="https://res.cloudinary.com/dgib19szk/image/upload/v1767781842/WhatsApp_Image_2025-12-19_at_6.26.39_PM_sqhrst.jpg"
            alt="Prashant Parmar logo"
            className="profile-pic w-10 h-10 rounded-full border-2 border-blue-500 object-cover"
          />
          <h1 className="text-2xl font-black">
            <span className="gradient-text">PP</span>
          </h1>
        </div>

        <div className="hidden md:flex gap-10 items-center">
          {['About', 'Achievements', 'Projects', 'Certificates', 'Skills', 'Education', 'Contact'].map((item, idx) => (
            <a
              key={idx}
              href={`#${item.toLowerCase()}`}
              className="text-slate-300 hover:text-blue-400 font-semibold transition-all duration-300 relative group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
          
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
            {['About', 'Achievements', 'Projects', 'Certificates', 'Skills', 'Education', 'Contact'].map((item, idx) => (
              <a
                key={idx}
                href={`#${item.toLowerCase()}`}
                className="text-xl text-slate-300 font-semibold hover:text-blue-400 transition-colors py-2"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
