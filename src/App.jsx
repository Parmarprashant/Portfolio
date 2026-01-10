import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Github, Linkedin, Twitter, Download, ChevronLeft, ChevronRight } from 'lucide-react';
import { Menu, X } from "lucide-react";

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [certIndex, setCertIndex] = useState(0);

  const certificates = [
    { id: 1, title: 'CS105: Introduction to Python', issuer: 'Saylor.org', date: 'December 19, 2025', image: 'https://res.cloudinary.com/dgib19szk/image/upload/v1767782202/5645318445PP-1_n1xomm.png' },
    { id: 2, title: 'Building with Artificial Intelligence', issuer: 'Saylor.org', date: 'December 19, 2025', image: 'https://res.cloudinary.com/dgib19szk/image/upload/v1767782202/1755841329PP-1_j6rc80.png' },
    { id: 3, title: 'Ai Tools workshop', issuer: 'Be10X', date: 'October 26th, 2025', image: 'https://res.cloudinary.com/dgib19szk/image/upload/v1767782202/Certificate-1_z9oatd.png' },
  ];

  const projects = [
    { 
      title: 'Coursera', 
      desc: 'Built a Coursera-inspired learning platform clone using HTML, CSS, and JavaScript with a responsive UI.', 
      tags: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://res.cloudinary.com/dgib19szk/image/upload/v1767780750/Screenshot_2026-01-07_102815_rr1koh.png',
      category: 'Learning Platform',
      github: '#',
      live: '#',
      youtube: '#'
    },
    { 
      title: 'Delhivery', 
      desc: 'Built a Delhivery platform clone using HTML, CSS, and JavaScript with a responsive UI.', 
      tags: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://res.cloudinary.com/dgib19szk/image/upload/v1767780750/Screenshot_2026-01-07_103140_fx5l0q.png',
      category: 'Logistics',
      github: '#',
      live: '#',
      youtube: '#'
    },
    { 
      title: 'Skipii', 
      desc: 'Built a Skipii platform clone using HTML, CSS, and JavaScript with a responsive UI.', 
      tags: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://res.cloudinary.com/dgib19szk/image/upload/v1767780750/Screenshot_2026-01-07_103834_z0bjuj.png',
      category: 'Food Delivery',
      github: '#',
      live: '#',
      youtube: '#'
    },
    { 
      title: 'BluetoKaiCoffee', 
      desc: 'Built a BluetoKaiCoffee platform clone using HTML, CSS, and JavaScript with a responsive UI.', 
      tags: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://res.cloudinary.com/dgib19szk/image/upload/v1767780750/Screenshot_2026-01-07_104334_zlcpvi.png',
      category: 'E-Commerce',
      github: '#',
      live: '#',
      youtube: '#'
    },
    { 
      title: 'Postman API', 
      desc: 'Built a Postman API platform clone using HTML, CSS, and JavaScript with responsive design', 
      tags: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://res.cloudinary.com/dgib19szk/image/upload/v1767780750/Screenshot_2026-01-07_104426_inuup6.png',
      category: 'Developer Tools',
      github: '#',
      live: '#',
      youtube: '#'
    },
    { 
      title: 'Blix Scooter', 
      desc: 'Built a Blix Scooter platform clone using HTML, CSS, and JavaScript with modern UI', 
      tags: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://res.cloudinary.com/dgib19szk/image/upload/v1767780751/Screenshot_2026-01-07_104517_bsyo7d.png',
      category: 'E-Commerce',
      github: '#',
      live: '#',
      youtube: '#'
    },
  ];

  const skills = [
    { name: 'React', image: 'https://th.bing.com/th/id/OIP.bIHrTv75DNbmQ55_hI32ygHaDj?w=304&h=168&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
    { name: 'JavaScript', image: 'https://tse4.mm.bing.net/th/id/OIP.8x5CrltXlZZIAkg9bo8z1AHaIW?rs=1&pid=ImgDetMain&o=7&rm=3' },
    { name: 'C/C++', image: 'https://th.bing.com/th/id/OIP.yBoLfBczlY_mM7VTIyS01gHaCv?w=292&h=129&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
    { name: 'MongoDB', image: 'https://www.mongodb.com/assets/images/global/favicon.ico' },
    { name: 'Git', image: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png' },
    { name: 'GitHub', image: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' },
    { name: 'Figma', image: 'https://s3-alpha.figma.com/hub/file/1481185752/fa16a59a-cc3f-4c2f-83cf-39153e59e117-cover' },
    { name: 'HTML', image: 'https://th.bing.com/th/id/R.e1d424c4b9be7009dd57ef4e7d58e343?rik=EZ8NO5x85jZ0Vg&riu=http%3a%2f%2f1.bp.blogspot.com%2f-NGHwBncyA68%2fUiMm_8b2ZUI%2fAAAAAAAAAnA%2f17OGXCKI4zE%2fs1600%2fLogo%2bHTML5.JPG&ehk=rnVe3RUksYQ4LMnsZ6Xxyf3F5lkj3Br1Eu6vOVCkYh0%3d&risl=&pid=ImgRaw&r=0' },
    { name: 'CSS', image: 'https://seeklogo.com/images/C/css-3-logo-AF06D75231-seeklogo.com.png' },
    { name: 'Python', image: 'https://www.python.org/static/community_logos/python-logo.png' }
  ];

  const education = [
    { school: 'Swaminarayan University', field: 'Computer Engineering', detail: 'Relevant coursework: Web Development' },
    { school: "Little flower's School", field: 'Higher Secondary Education', detail: 'Focus on Science and Mathematics. With Some Coding experience in Python', year: '2023-2025' },
  ];

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 bg-gradient-to-br from-white via-orange-50 to-white z-[9999] flex items-center justify-center animate-fade-out overflow-hidden">
          <div className="absolute top-10 right-10 w-32 h-32 bg-orange-200 rounded-full blur-3xl opacity-30 animate-float"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-30 animate-float animation-delay-2000"></div>
          
          <div className="text-center relative z-10">
            <div className="flex justify-center mb-6">
              <div className="relative w-20 h-20">
                <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-orange-500 border-r-orange-400 animate-spin"></div>
                <div className="absolute inset-2 rounded-full border-3 border-transparent border-b-orange-500 animate-spin" style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Prashant Parmar</h2>
            <p className="text-gray-600 font-medium">Web Developer Portfolio</p>
            <p className="text-gray-400 text-sm mt-4">Loading your portfolio...</p>
          </div>
        </div>
      )}
      
    <div className="min-h-screen bg-white text-gray-900 animate-fade-in">
      <style>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% { 
            transform: translateY(0px); 
          }
          50% { 
            transform: translateY(-20px); 
          }
        }

        @keyframes glow-pulse {
          0%, 100% {
            box-shadow: 0 0 10px rgba(249, 115, 22, 0.3);
          }
          50% {
            box-shadow: 0 0 20px rgba(249, 115, 22, 0.6);
          }
        }

        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -50px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(20px, 50px) scale(1.05);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-glow {
          animation: glow-pulse 2s ease-in-out infinite;
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        @keyframes fade-out {
          0% {
            opacity: 1;
            pointer-events: auto;
          }
          70% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            pointer-events: none;
          }
        }

        @keyframes fade-in-page {
          from {
            opacity: 0;
            filter: blur(5px);
          }
          to {
            opacity: 1;
            filter: blur(0);
          }
        }

        .animate-fade-out {
          animation: fade-out 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .animate-fade-in {
          animation: fade-in-page 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 0.3s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-gradient {
          animation: gradient 3s ease infinite;
        }

        .bg-300 {
          background-size: 300%;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-in;
        }

        .animate-shimmer {
          animation: shimmer 3s linear infinite;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        * {
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }

        @media (hover: none) {
          .hover\:scale-105:hover,
          .hover\:scale-110:hover,
          .group-hover\:scale-110:hover {
            transform: none !important;
          }
        }

        [class*="hover:scale"],
        [class*="group-hover:scale"],
        [class*="transform"] {
          will-change: transform;
          backface-visibility: hidden;
          perspective: 1000px;
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Parmar <span className="text-orange-500">Prashant</span></h1>
          
          <div className="hidden md:flex gap-8">
            {['About', 'Projects', 'Certificates', 'Skills', 'Education', 'Contact'].map((item, idx) => (
              <a
                key={idx}
                href={`#${item.toLowerCase()}`}
                className="text-orange-500 hover:text-orange-600 font-semibold transition-all duration-300 relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 hover:bg-orange-100 rounded-lg transition-all duration-300"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-orange-100 animate-slide-down">
            <div className="flex flex-col gap-4 p-6">
              {['About', 'Projects', 'Certificates', 'Skills', 'Education', 'Contact'].map((item, idx) => (
                <a
                  key={idx}
                  href={`#${item.toLowerCase()}`}
                  className="text-orange-500 font-semibold hover:text-orange-600 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-8 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative overflow-hidden place-items-center">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        
        <div className="space-y-6 animate-slide-up relative z-10">
          <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-semibold text-sm animate-bounce-slow">
            WEB DEVELOPER
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Building Digital
            <span className="text-orange-500 block animate-gradient bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 bg-clip-text text-transparent bg-300">Experiences</span>
          </h1>

          <p className="text-gray-600 leading-relaxed text-base">
            Hi, I'm Prashant Parmar, a passionate web developer crafting modern, responsive, and user-friendly digital experiences.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-2xl hover:shadow-orange-500/50 animate-pulse-slow">
              Get in Touch
            </button>
            <button className="border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-full font-semibold hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 hover:rotate-1">
              View Projects
            </button>
            <button className="border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-full font-semibold hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 hover:-rotate-1">
              <Download size={18} className="animate-bounce-slow" /> Resume
            </button>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center animate-float relative z-10">
          <div className="relative w-96 h-96 rounded-full overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300 hover:rotate-3 animate-glow">
            <img 
              src="https://res.cloudinary.com/dgib19szk/image/upload/v1767781842/WhatsApp_Image_2025-12-19_at_6.26.39_PM_sqhrst.jpg" 
              alt="Prashant Parmar" 
              className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-white via-orange-50/30 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-200 to-orange-100 rounded-full -translate-y-1/3 translate-x-1/3 opacity-20 blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-200 to-blue-100 rounded-full translate-y-1/3 -translate-x-1/3 opacity-20 blur-3xl animate-float animation-delay-2000"></div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-slide-up relative">
            <div className="flex justify-center items-center gap-4 mb-6">
              <div className="hidden sm:block w-12 h-1 bg-gradient-to-r from-orange-300 to-orange-500 rounded-full"></div>
              <div className="inline-block">
                <span className="inline-block px-6 py-3 bg-gradient-to-r from-orange-100 to-orange-50 text-orange-600 rounded-full text-sm font-bold uppercase tracking-widest animate-pulse-slow border border-orange-200 shadow-lg shadow-orange-200/50">
                  ✨ About
                </span>
              </div>
              <div className="hidden sm:block w-12 h-1 bg-gradient-to-l from-orange-300 to-orange-500 rounded-full"></div>
            </div>
            
            <h2 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-orange-600 to-orange-500 bg-clip-text text-transparent animate-gradient bg-300">
                Get to Know Me
              </span>
            </h2>
            
            <div className="max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4 font-medium">
                I'm a passionate web developer focused on building beautiful, responsive, and high-performance digital experiences that solve real problems.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Whether you're looking to transform your ideas into a polished digital product or collaborate on an exciting project, I'm here to bring creativity, technical expertise, and dedication to every challenge.
              </p>
            </div>

            <div className="flex justify-center mt-8">
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="group border-2 border-orange-200 rounded-3xl p-8 md:p-10 bg-gradient-to-br from-white to-orange-50/50 hover:shadow-2xl hover:border-orange-400 transition-all duration-500 animate-slide-up"
                style={{ animationDelay: '0.1s' }}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    👨‍💻
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Web Developer Extraordinaire</h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      I'm Prashant Parmar, a passionate web developer focused on building modern, responsive, and user-friendly web applications. I transform ideas and designs into production-ready interfaces using the latest web technologies.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group border-2 border-blue-200 rounded-3xl p-8 md:p-10 bg-gradient-to-br from-white to-blue-50/50 hover:shadow-2xl hover:border-blue-400 transition-all duration-500 animate-slide-up"
                style={{ animationDelay: '0.2s' }}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    ⚙️
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">My Technical Arsenal</h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Strong foundation in C/C++ and Python programming, with expertise in React.js, HTML, CSS, and JavaScript. I understand CI/CD pipelines and follow structured development practices to ensure code quality, scalability, and performance optimization.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group border-2 border-purple-200 rounded-3xl p-8 md:p-10 bg-gradient-to-br from-white to-purple-50/50 hover:shadow-2xl hover:border-purple-400 transition-all duration-500 animate-slide-up"
                style={{ animationDelay: '0.3s' }}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    🎯
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">My Vision & Goals</h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Focused on strengthening problem-solving abilities and growing as a scalable web developer. I'm passionate about continuous learning and love taking on challenging projects that push my technical boundaries and expand my skillset.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="border-2 border-orange-300 rounded-3xl p-8 bg-gradient-to-br from-orange-50 to-orange-100/50 hover:shadow-2xl hover:border-orange-500 hover:-translate-y-2 transition-all duration-500 group">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <p className="text-orange-600 font-bold text-sm uppercase tracking-wider mb-2">Focus Area</p>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Frontend Development</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="inline-block px-3 py-1 bg-orange-200 text-orange-800 rounded-full text-xs font-semibold">React.js</span>
                    <span className="inline-block px-3 py-1 bg-orange-200 text-orange-800 rounded-full text-xs font-semibold">JavaScript</span>
                    <span className="inline-block px-3 py-1 bg-orange-200 text-orange-800 rounded-full text-xs font-semibold">HTML/CSS</span>
                  </div>
                </div>
              </div>

              <div className="border-2 border-blue-300 rounded-3xl p-8 bg-gradient-to-br from-blue-50 to-blue-100/50 hover:shadow-2xl hover:border-blue-500 hover:-translate-y-2 transition-all duration-500 group">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🛠️</span>
                  </div>
                  <p className="text-blue-600 font-bold text-sm uppercase tracking-wider mb-2">Additional Skills</p>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Backend & Tools</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="inline-block px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-xs font-semibold">Python</span>
                    <span className="inline-block px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-xs font-semibold">Git/GitHub</span>
                    <span className="inline-block px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-xs font-semibold">Figma</span>
                  </div>
                </div>
              </div>

              <div className="border-2 border-purple-300 rounded-3xl p-8 bg-gradient-to-br from-purple-50 to-purple-100/50 hover:shadow-2xl hover:border-purple-500 hover:-translate-y-2 transition-all duration-500">
                <p className="text-purple-600 font-bold text-sm uppercase tracking-wider mb-4 text-center">What I Deliver</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 group/item">
                    <div className="w-8 h-8 rounded-lg bg-purple-400 text-white flex items-center justify-center font-bold flex-shrink-0 group-hover/item:scale-110 transition-transform">
                      ✓
                    </div>
                    <span className="text-sm font-semibold text-gray-700">Clean Code</span>
                  </div>
                  <div className="flex items-center gap-3 group/item">
                    <div className="w-8 h-8 rounded-lg bg-purple-400 text-white flex items-center justify-center font-bold flex-shrink-0 group-hover/item:scale-110 transition-transform">
                      ✓
                    </div>
                    <span className="text-sm font-semibold text-gray-700">Responsive Design</span>
                  </div>
                  <div className="flex items-center gap-3 group/item">
                    <div className="w-8 h-8 rounded-lg bg-purple-400 text-white flex items-center justify-center font-bold flex-shrink-0 group-hover/item:scale-110 transition-transform">
                      ✓
                    </div>
                    <span className="text-sm font-semibold text-gray-700">Performance</span>
                  </div>
                  <div className="flex items-center gap-3 group/item">
                    <div className="w-8 h-8 rounded-lg bg-purple-400 text-white flex items-center justify-center font-bold flex-shrink-0 group-hover/item:scale-110 transition-transform">
                      ✓
                    </div>
                    <span className="text-sm font-semibold text-gray-700">User Focus</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{backgroundImage: 'radial-gradient(circle, #06b6d4 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold mb-4 hover:scale-105 transition-transform duration-300 inline-block">Featured Projects</h2>
            <p className="text-gray-500 text-lg animate-fade-in">Transforming ideas into digital reality</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="border border-cyan-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-slide-up cursor-pointer group bg-white hover:border-cyan-500 hover:-translate-y-2"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="bg-gradient-to-br from-blue-400 to-blue-600 h-40 overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                </div>

                <div className="p-6">
                  <div className="inline-block bg-cyan-100 text-cyan-600 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                    {project.category}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {project.desc}
                  </p>

                  <div className="flex gap-2 flex-wrap mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="bg-cyan-100 text-cyan-600 px-3 py-1 rounded-full text-xs font-semibold hover:bg-cyan-200 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 items-center">
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-green-500 font-semibold text-sm hover:text-green-600 transition-all flex items-center gap-1 group/link">
                      <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
                      <span className="group-hover/link:translate-x-1 transition-transform">Live</span>
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-cyan-500 font-semibold text-sm hover:text-cyan-600 transition-all flex items-center gap-1 group/link">
                      <Github size={16} /> 
                      <span className="group-hover/link:translate-x-1 transition-transform">GitHub</span>
                    </a>
                    <a href={project.youtube} target="_blank" rel="noopener noreferrer" className="text-red-500 font-semibold text-sm hover:text-red-600 transition-all flex items-center gap-1 group/link">
                      <span className="inline-block text-xs">▶</span>
                      <span className="group-hover/link:translate-x-1 transition-transform">YouTube</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="border-2 border-cyan-400 text-cyan-500 px-8 py-3 rounded-full font-semibold hover:bg-cyan-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50">
              Show More Projects
            </button>
          </div>
        </div>
      </section>

      <section id="certificates" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full -translate-y-32 translate-x-32 animate-pulse-slow opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-100 rounded-full translate-y-32 -translate-x-32 animate-pulse-slow animation-delay-2000 opacity-30"></div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">✨ Certifications</h2>
            <p className="text-gray-600 text-lg">Professional credentials & achievements</p>
          </div>

          <div className="relative bg-white rounded-3xl border-4 border-blue-500 p-8 md:p-12 shadow-2xl animate-slide-up overflow-hidden hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 hover:-translate-y-1">
            <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-blue-500 to-transparent opacity-10">
              <img 
                src={certificates[certIndex].image} 
                alt={certificates[certIndex].title}
                className="w-full h-full object-cover opacity-20 transition-opacity duration-500"
              />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
                  {certIndex + 1} / {certificates.length}
                </div>
                <div className="text-4xl animate-bounce-slow">✨</div>
              </div>
              
              <div className="space-y-6 mb-8">
                <div>
                  <p className="text-gray-500 text-sm mb-2 uppercase tracking-wide">Certificate</p>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900">{certificates[certIndex].title}</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-500 text-sm mb-2">Issued By</p>
                    <p className="text-xl font-semibold text-blue-600">{certificates[certIndex].issuer}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm mb-2">Date Issued</p>
                    <p className="text-xl font-semibold text-gray-900">{certificates[certIndex].date}</p>
                  </div>
                </div>
              </div>

              <div className="mb-8 rounded-xl overflow-hidden border-2 border-gray-200 hover:border-blue-400 transition-colors">
                <img 
                  src={certificates[certIndex].image}
                  alt={certificates[certIndex].title}
                  className="w-full h-auto"
                />
              </div>

              <div className="flex justify-center gap-4">
                <button
                  onClick={() => setCertIndex((certIndex - 1 + certificates.length) % certificates.length)}
                  className="p-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 hover:-rotate-12 shadow-lg hover:shadow-blue-500/50"
                  title="Previous certificate"
                >
                  <ChevronLeft size={24} />
                </button>
                <div className="flex gap-2 items-center">
                  {certificates.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCertIndex(idx)}
                      className={`h-3 rounded-full transition-all duration-300 ${
                        certIndex === idx ? 'bg-blue-500 w-8' : 'bg-gray-300 w-3 hover:bg-gray-400'
                      }`}
                      title={`Certificate ${idx + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => setCertIndex((certIndex + 1) % certificates.length)}
                  className="p-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 hover:rotate-12 shadow-lg hover:shadow-blue-500/50"
                  title="Next certificate"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 animate-pulse-slow">
              Download All Certificates
            </button>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(#f97316 1px, transparent 1px), linear-gradient(90deg, #f97316 1px, transparent 1px)', backgroundSize: '100px 100px'}}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-2">⚙️ Technology Stack</h2>
            <p className="text-gray-500 text-lg">Tools and technologies I work with</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="border-2 border-orange-300 rounded-2xl px-6 py-4 text-center font-semibold text-gray-700 hover:border-orange-500 hover:bg-orange-50 transition-all duration-300 transform hover:scale-110 animate-slide-up cursor-pointer hover:shadow-lg hover:shadow-orange-500/30 hover:-rotate-2 group flex flex-col items-center justify-center gap-3"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <img src={skill.image} alt={skill.name} className="h-12 w-12 object-contain group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm group-hover:scale-110 inline-block transition-transform duration-300">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="py-20 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-orange-200 to-pink-200 rounded-full animate-float opacity-50"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full animate-float animation-delay-2000 opacity-50"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-2">📖 Education</h2>
            <p className="text-gray-500 text-lg">My academic journey</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="border border-gray-300 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-slide-up bg-white hover:border-orange-400 hover:-rotate-1 group"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">{edu.school}</h3>
                <p className="text-gray-600 font-semibold mb-2">{edu.field}</p>
                {edu.year && <p className="text-gray-500 text-sm mb-3">{edu.year}</p>}
                <p className="text-gray-600 text-sm">{edu.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(249, 115, 22, 0.1) 35px, rgba(249, 115, 22, 0.1) 70px)'}}></div>
        </div>
        
        <div className="max-w-2xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-2">👤 Get on Touch</h2>
            <p className="text-gray-500 text-lg">Let's discuss your next project</p>
          </div>

          <div className="border-4 border-orange-400 rounded-3xl p-8 bg-white animate-slide-up hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-500 hover:-translate-y-2">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="animate-bounce-slow">✉️</span>
              Send me a message
            </h3>
            
            <div className="space-y-4">
              <div className="transform transition-all duration-300 hover:scale-105">
                <label className="block font-semibold text-gray-900 mb-2">Full Name *</label>
                <input type="text" placeholder="Rituraj jha" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors hover:border-orange-300" />
              </div>

              <div className="transform transition-all duration-300 hover:scale-105">
                <label className="block font-semibold text-gray-900 mb-2">Email Address *</label>
                <input type="email" placeholder="your@gmail.com" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors hover:border-orange-300" />
              </div>

              <div className="transform transition-all duration-300 hover:scale-105">
                <label className="block font-semibold text-gray-900 mb-2">Message *</label>
                <textarea placeholder="Your message here..." rows="5" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors hover:border-orange-300 resize-none"></textarea>
              </div>

              <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-orange-500/50">
                Send Message
              </button>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-6">Or reach out directly through</p>
            <div className="flex justify-center gap-6">
              <a href="mailto:your@email.com" className="p-4 bg-orange-100 text-orange-600 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-rotate-12 shadow-lg">
                <Mail size={24} />
              </a>
              <a href="#" className="p-4 bg-gray-800 text-white rounded-full hover:bg-orange-500 transition-all duration-300 transform hover:scale-110 hover:rotate-12 shadow-lg">
                <Github size={24} />
              </a>
              <a href="#" className="p-4 bg-blue-600 text-white rounded-full hover:bg-orange-500 transition-all duration-300 transform hover:scale-110 hover:-rotate-12 shadow-lg">
                <Linkedin size={24} />
              </a>
              <a href="#" className="p-4 bg-sky-400 text-white rounded-full hover:bg-orange-500 transition-all duration-300 transform hover:scale-110 hover:rotate-12 shadow-lg">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>&copy; 2025 Prashant Parmar. All rights reserved.</p>
      </footer>
    </div>
    </>
  );
}