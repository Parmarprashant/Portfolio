import React from 'react';
import { education } from '../data/constants';

const Education = () => {
  return (
    <section id="education" className="py-10 sm:py-12 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-1000"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-20 scroll-animate-up">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 md:mb-6 tracking-tight section-heading">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl text-slate-300 scroll-animate-up" style={{ animationDelay: '0.2s' }}>My academic journey</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="card-hover glass-effect rounded-2xl p-8 border border-blue-500/20 group hover:border-blue-500/50 scroll-animate-left"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all shadow-lg group-hover:animate-rotate-axis">
                <img src="https://cdn-icons-png.flaticon.com/512/921/921158.png" alt="Book" className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{edu.school}</h3>
              <p className="text-blue-400 font-semibold mb-2">{edu.field}</p>
              {edu.year && <p className="text-slate-400 text-sm mb-3">{edu.year}</p>}
              <p className="text-slate-300 text-sm leading-relaxed">{edu.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
