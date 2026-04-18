import React, { useState } from 'react';
import { ChevronLeft, ArrowRight, ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/constants';

const Projects = () => {
  const [projectsToShow, setProjectsToShow] = useState(3);
  const isDark = document.documentElement.classList.contains('light-mode') === false;

  return (
    <section id="projects" className="py-10 sm:py-12 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-20 scroll-animate-up">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 md:mb-6 tracking-tight gradient-text section-heading">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-300 scroll-animate-up" style={{ animationDelay: '0.2s' }}>Showcase of my best work and accomplishments</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.slice(0, projectsToShow).map((project, idx) => (
            <div
              key={idx}
              className="card-hover group glass-effect rounded-2xl overflow-hidden border border-blue-500/20 hover:border-blue-500/50 relative scroll-animate-up animate-fade-scale"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="relative h-48 bg-gradient-to-br from-blue-600 to-purple-600 overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                
                {/* Pinned Badge */}
                {project.pinned && (
                  <div className="absolute top-3 right-3 z-20">
                    <div className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-yellow-500/50 shadow-lg flex items-center gap-1.5">
                      <span className="text-xs">📌</span>
                      <span className="text-xs font-bold text-yellow-400 uppercase tracking-wider">Pinned</span>
                    </div>
                  </div>
                )}

                {/* YouTube Play Button on Hover */}
                {project.youtube && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <a
                      href={project.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-16 h-16 bg-gradient-to-br from-red-600 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-2xl hover:shadow-purple-600/50 transform hover:scale-125 transition-all duration-300 animate-bounce-in border-2 border-white/20"
                    >
                      <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube Play" className="w-8 h-8 drop-shadow-md" />
                    </a>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 mb-4">
                  {project.category}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-300 text-sm mb-4 line-clamp-2">
                  {project.desc}
                </p>

                <div className="flex gap-2 flex-wrap mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="bg-slate-800/50 text-slate-300 px-2 py-1 rounded text-xs font-bold">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 items-center pt-4 border-t border-blue-500/20">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 rounded-lg font-bold text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center gap-2 group/live relative overflow-hidden hover:shadow-lg hover:shadow-green-500/50 hover:scale-105 hover:-translate-y-1"
                  >
                    <ExternalLink size={16} />
                    <span>Live</span>
                  </a>

                  {project.github && project.github !== '#' ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 rounded-lg font-bold text-white bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 transition-all duration-300 flex items-center justify-center gap-2 group/github relative overflow-hidden hover:shadow-lg hover:shadow-slate-500/50 hover:scale-105 hover:-translate-y-1"
                    >
                      <Github size={16} />
                      <span>GitHub</span>
                    </a>
                  ) : (
                    <span
                      className="flex-1 px-4 py-2 rounded-lg font-bold text-white bg-slate-700/80 text-slate-400 cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 opacity-80"
                      title="Repo not linked — add github URL in constants.js projects array"
                    >
                      <Github size={16} />
                      <span>GitHub</span>
                    </span>
                  )}

                  {project.postman && (
                    <a
                      href={project.postman}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg font-bold bg-orange-600/20 text-orange-400 hover:text-white hover:bg-orange-600 transition-all duration-300 border border-orange-500/30 hover:border-orange-500 hover:scale-105 hover:-translate-y-1 flex items-center justify-center"
                      title="View API Documentation"
                    >
                      <img src="https://cdn-icons-png.flaticon.com/512/5968/5968852.png" alt="Postman" className="w-5 h-5" />
                    </a>
                  )}

                  {project.youtube && (
                    <a
                      href={project.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-4 py-2 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 group/youtube relative overflow-hidden hover:shadow-lg hover:scale-105 hover:-translate-y-1 ${isDark ? 'bg-white hover:bg-slate-50 hover:shadow-red-500/60' : 'bg-slate-100 hover:bg-white border border-red-500/30'}`}
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
                        alt="YouTube"
                        className="w-4 h-4"
                      />
                      <span className={`relative z-10 hidden sm:inline font-bold ${isDark ? 'bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent' : 'text-red-600'}`}>Video</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 flex justify-center gap-4">
          {projectsToShow > 3 && (
            <button
              onClick={() => setProjectsToShow(Math.max(3, projectsToShow - 3))}
              className="px-8 py-4 rounded-full font-bold border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              <ChevronLeft size={18} />
              Show Less
            </button>
          )}
          {projectsToShow < projects.length && (
            <button
              onClick={() => {
                setProjectsToShow(projectsToShow + 3);
                setTimeout(() => {
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="px-8 py-4 rounded-full font-bold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50 inline-flex items-center gap-2"
            >
              Show More Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
