import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Achievements = () => {
  const [activeAchievement, setActiveAchievement] = useState(null);

  return (
    <>
      <section id="achievements" className="py-16 md:py-24 relative overflow-hidden bg-[#050810]">
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,200,50,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,200,50,0.03) 1px, transparent 1px)',
            backgroundSize: '48px 48px'
          }}
        />
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(234,175,36,0.08) 0%, transparent 70%)' }}
        />
        <div className="absolute bottom-0 left-[20%] w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)' }}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-px bg-gradient-to-r from-transparent to-yellow-500/60" />
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-yellow-600">★ &nbsp; Highlights &nbsp; ★</span>
              <span className="w-8 h-px bg-gradient-to-l from-transparent to-yellow-500/60" />
            </div>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl font-black text-white leading-none tracking-tight mb-3">
              Achieve<span className="text-yellow-500">ments</span>
            </h2>
            <p className="text-slate-400 text-base font-light">Moments that defined the journey</p>
          </motion.div>

          <div className="flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="w-full max-w-[520px] mx-auto"
              style={{
                padding: '2px',
                borderRadius: '28px',
                background: 'linear-gradient(135deg, rgba(234,175,36,0.6), rgba(139,92,246,0.3), rgba(234,175,36,0.1))',
              }}
            >
              <motion.div
                whileHover={{ y: -6, scale: 1.008 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="rounded-[26px] overflow-hidden cursor-pointer group relative"
                style={{ background: '#0c1220' }}
                onClick={() => setActiveAchievement('su')}
              >
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/dgib19szk/image/upload/v1774690494/WhatsApp_Image_2026-03-19_at_9.42.24_PM_fkctpx.jpg"
                    alt="SU Hackathon 2026 team"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0c1220 0%, rgba(12,18,32,0.2) 60%, transparent 100%)' }} />

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.07) 50%, transparent 60%)' }}
                  />

                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-yellow-400 border border-yellow-400/35"
                    style={{ background: 'rgba(5,8,16,0.75)', backdropFilter: 'blur(8px)' }}>
                    🏆 &nbsp;SU Hackathon 2026
                  </div>

                  <div className="absolute bottom-3 right-3 w-[88px] h-[56px] rounded-xl overflow-hidden border-2 border-yellow-400/55 shadow-xl">
                    <img
                      src="https://res.cloudinary.com/dgib19szk/image/upload/v1774690494/WhatsApp_Image_2026-03-19_at_9.44.37_PM_qy2ggp.jpg"
                      alt="Award ceremony"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="absolute bottom-3 left-3 text-[11px] text-white/50">Award Ceremony</span>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'rgba(5,8,16,0.35)', backdropFilter: 'blur(2px)' }}>
                    <div className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-yellow-400 border border-yellow-400/40"
                      style={{ background: 'rgba(5,8,16,0.8)', backdropFilter: 'blur(12px)' }}>
                      👁 &nbsp;View Full Details
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase text-yellow-700 border border-yellow-500/28"
                      style={{ background: 'rgba(234,175,36,0.08)' }}>
                      🥇 &nbsp;Hackathon Winner
                    </div>
                    <div className="flex-shrink-0 text-center px-3 py-1.5 rounded-xl border border-yellow-500/30"
                      style={{ background: 'linear-gradient(135deg, rgba(234,175,36,0.15), rgba(234,175,36,0.05))' }}>
                      <div className="font-serif text-[22px] font-black text-yellow-500 leading-none">#1</div>
                      <div className="text-[9px] font-semibold text-yellow-600/60 tracking-widest uppercase">Rank</div>
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl font-black text-white tracking-tight mb-1">SU Hackathon 2026</h3>
                  <p className="text-yellow-600 text-sm font-medium mb-4">1st Place — Team VentureHack · Sangam University, Bhilwara</p>

                  <div className="h-px w-full mb-4" style={{ background: 'linear-gradient(90deg, rgba(234,175,36,0.4), rgba(139,92,246,0.3), transparent)' }} />

                  <p className="text-slate-400 text-[13.5px] leading-relaxed mb-5">
                    Built <span className="text-white font-semibold">KisanDost</span> — an AI-powered precision agriculture platform for Indian farmers, winning 1st place at Sangam University Hackathon.
                  </p>

                  <div className="flex items-center justify-between">
                    <button
                      onClick={(e) => { e.stopPropagation(); setActiveAchievement('su'); }}
                      className="flex items-center gap-2 text-yellow-500 hover:text-yellow-400 font-bold text-sm transition-all hover:gap-3"
                    >
                      View Details <ArrowRight size={14} />
                    </button>
                    <div className="flex gap-1.5">
                      {['React', 'Python', 'AI'].map(t => (
                        <span key={t} className="text-[11px] font-semibold text-slate-500 border border-slate-700/60 rounded-full px-2.5 py-1"
                          style={{ background: 'rgba(148,163,184,0.06)' }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 right-0 w-20 h-20 pointer-events-none"
                  style={{ background: 'radial-gradient(circle at 100% 100%, rgba(139,92,246,0.12), transparent 70%)' }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {activeAchievement && (
        <div
          className="fixed inset-0 z-[9000] flex items-center justify-center p-4"
          style={{ background: 'rgba(3,5,12,0.88)', backdropFilter: 'blur(14px)' }}
          onClick={() => setActiveAchievement(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="w-full max-w-[700px] rounded-3xl overflow-hidden"
            style={{
              background: '#0a101e',
              border: '1px solid rgba(234,175,36,0.18)',
              boxShadow: '0 0 0 1px rgba(139,92,246,0.1), 0 40px 120px rgba(0,0,0,0.7)'
            }}
            onClick={e => e.stopPropagation()}
          >
            <div className="flex flex-col sm:flex-row">
              <div className="sm:w-[45%] relative flex-shrink-0 min-h-[220px] sm:min-h-[320px] overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dgib19szk/image/upload/v1774690494/WhatsApp_Image_2026-03-19_at_9.42.24_PM_fkctpx.jpg"
                  alt="SU Hackathon 2026"
                  className="w-full h-full object-cover"
                  style={{ minHeight: '220px' }}
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,16,30,0.85) 0%, transparent 60%)' }} />
                <p className="absolute bottom-3 left-3 right-3 text-white/70 text-[11px] leading-snug">
                  Winners of SU Hackathon 2026 · Sangam University, Bhilwara
                </p>
              </div>

              <div className="sm:w-[55%] p-7 flex flex-col justify-between relative">
                <button
                  onClick={() => setActiveAchievement(null)}
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-slate-400 hover:text-yellow-400 transition-colors text-sm border border-slate-700/50"
                  style={{ background: 'rgba(148,163,184,0.08)' }}
                >✕</button>

                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase text-yellow-700 border border-yellow-500/28 mb-4"
                    style={{ background: 'rgba(234,175,36,0.08)' }}>
                    🥇 &nbsp;Hackathon Winner
                  </div>
                  <h3 className="font-serif text-[1.7rem] font-black text-white tracking-tight leading-tight mb-1">SU Hackathon 2026</h3>
                  <p className="text-yellow-600 text-sm font-medium mb-1">Sangam University, Bhilwara</p>
                  <p className="text-slate-400 text-sm mb-4">
                    <span className="text-yellow-500 font-bold">🥇 1st Rank</span> &nbsp;·&nbsp; Team VentureHack
                  </p>
                  <div className="h-px mb-4" style={{ background: 'linear-gradient(90deg, rgba(234,175,36,0.4), rgba(139,92,246,0.3), transparent)' }} />
                  <p className="text-slate-300 text-[13.5px] leading-relaxed mb-4">
                    Built <span className="text-white font-semibold">KisanDost</span> — an AI-powered precision agriculture platform featuring satellite crop monitoring, profit prediction &amp; multilingual support. Shipped in{' '}
                    <strong className="text-yellow-400">under 24 hours</strong>.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {['24 Hours', 'AI + Cloud', 'React JS', 'Python'].map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full text-[11px] font-semibold text-slate-400 border border-slate-700/60"
                        style={{ background: 'rgba(148,163,184,0.07)' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <a href="https://venturehack.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-3.5 rounded-2xl font-bold text-sm text-[#050810] transition-opacity hover:opacity-85"
                  style={{ background: 'linear-gradient(135deg, #c9940e, #e8a820)' }}
                >
                  View Project →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Achievements;
