import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { certificates } from '../data/constants';

const Certificates = () => {
  const [certIndex, setCertIndex] = useState(0);

  return (
    <section id="certificates" className="py-10 sm:py-12 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10 md:mb-16 scroll-animate-up">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 md:mb-6 tracking-tight section-heading">
            <span className="gradient-text">Certificates</span>
          </h2>
          <p className="text-xl text-slate-300 scroll-animate-up" style={{ animationDelay: '0.2s' }}>Professional achievements and credentials</p>
        </div>

        <div className="glass-effect rounded-3xl p-8 md:p-12 border border-blue-500/30 scroll-animate-up overflow-hidden">
          <div className="flex items-center justify-between mb-10">
            <div className="inline-block px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-bold border border-blue-500/30">
              Certificate {certIndex + 1} of {certificates.length}
            </div>
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>

          <div className="space-y-8 mb-10">
            <div className="animate-fade-scale">
              <p className="text-slate-400 text-sm mb-2 uppercase tracking-wider font-bold">Certificate</p>
              <h3 className="text-3xl md:text-4xl font-black text-white">{certificates[certIndex].title}</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8 pt-4 border-t border-blue-500/20">
              <div className="animate-fade-scale animation-delay-100">
                <p className="text-slate-400 text-sm mb-2 font-bold">Issued By</p>
                <p className="text-xl font-bold text-blue-400">{certificates[certIndex].issuer}</p>
              </div>
              <div className="animate-fade-scale animation-delay-200">
                <p className="text-slate-400 text-sm mb-2 font-bold">Date Issued</p>
                <p className="text-xl font-bold text-purple-400">{certificates[certIndex].date}</p>
              </div>
            </div>
          </div>

          <div className="mb-10 rounded-xl overflow-hidden border border-blue-500/20 hover:border-blue-500/50 transition-all shadow-lg hover:shadow-blue-500/20">
            <img
              src={certificates[certIndex].image}
              alt={certificates[certIndex].title}
              className="w-full h-auto hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="flex justify-center gap-6 items-center">
            <button
              onClick={() => setCertIndex((certIndex - 1 + certificates.length) % certificates.length)}
              className="p-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500 transition-all transform hover:scale-110 shadow-lg hover:shadow-blue-500/50"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-3">
              {certificates.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCertIndex(idx)}
                  className={`rounded-full transition-all duration-300 ${certIndex === idx
                    ? 'w-8 h-3 bg-gradient-to-r from-blue-500 to-purple-600'
                    : 'w-3 h-3 bg-slate-700 hover:bg-slate-600'
                    }`}
                />
              ))}
            </div>
            <button
              onClick={() => setCertIndex((certIndex + 1) % certificates.length)}
              className="p-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500 transition-all transform hover:scale-110 shadow-lg hover:shadow-blue-500/50"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
