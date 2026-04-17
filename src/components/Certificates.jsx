import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { certificates } from '../data/constants';

const Certificates = () => {
  const sectionRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const [maxTranslate, setMaxTranslate] = useState(0);
  const [sectionHeight, setSectionHeight] = useState('260vh');

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -maxTranslate]);

  useEffect(() => {
    const updateMeasurements = () => {
      if (!viewportRef.current || !trackRef.current || typeof window === 'undefined') {
        return;
      }

      const viewportWidth = viewportRef.current.clientWidth;
      const viewportHeight = window.innerHeight;
      const nextMaxTranslate = Math.max(
        0,
        trackRef.current.scrollWidth - viewportWidth
      );

      setMaxTranslate(nextMaxTranslate);
      setSectionHeight(`${Math.max(viewportHeight * 2.2, viewportHeight + nextMaxTranslate + 240)}px`);
    };

    updateMeasurements();
    window.addEventListener('resize', updateMeasurements);

    return () => window.removeEventListener('resize', updateMeasurements);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="certificates"
      className="relative"
      style={{ height: sectionHeight }}
    >
      <div className="sticky top-0 flex min-h-screen items-center overflow-hidden py-10 sm:py-12 md:py-16">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-purple-600 opacity-20 blur-3xl" />
          <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-blue-600 opacity-20 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-4 sm:px-6">
          <div className="mb-10 text-center md:mb-14">
            <h2 className="section-heading mb-4 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
              <span className="gradient-text">Certificates</span>
            </h2>
            <p className="text-xl text-slate-300">
              Scroll through professional achievements and credentials
            </p>
          </div>

          <div ref={viewportRef} className="overflow-hidden">
            <motion.div
              ref={trackRef}
              style={{ x }}
              className="flex gap-6 pr-4 will-change-transform md:gap-8 md:pr-8"
            >
              {certificates.map((certificate, index) => (
                <article
                  key={certificate.id}
                  className="glass-effect w-[84vw] max-w-[680px] shrink-0 rounded-3xl border border-blue-500/30 p-6 md:w-[68vw] md:p-8"
                >
                  <div className="mb-8 flex items-center justify-between gap-4">
                    <div className="inline-block rounded-full border border-blue-500/30 bg-blue-500/20 px-4 py-2 text-sm font-bold text-blue-400">
                      Certificate {index + 1} of {certificates.length}
                    </div>
                  </div>

                  <div className="mb-8 space-y-8">
                    <div>
                      <p className="mb-2 text-sm font-bold uppercase tracking-wider text-slate-400">
                        Certificate
                      </p>
                      <h3 className="text-3xl font-black text-white md:text-4xl">
                        {certificate.title}
                      </h3>
                    </div>

                    <div className="grid gap-6 border-t border-blue-500/20 pt-4 md:grid-cols-2">
                      <div>
                        <p className="mb-2 text-sm font-bold text-slate-400">Issued By</p>
                        <p className="text-xl font-bold text-blue-400">{certificate.issuer}</p>
                      </div>
                      <div>
                        <p className="mb-2 text-sm font-bold text-slate-400">Date Issued</p>
                        <p className="text-xl font-bold text-purple-400">{certificate.date}</p>
                      </div>
                    </div>

                    {certificate.description && (
                      <div className="border-t border-blue-500/10 pt-4">
                        <p className="text-sm leading-relaxed text-slate-300">
                          {certificate.description}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="overflow-hidden rounded-xl border border-blue-500/20 shadow-lg">
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                      className="h-[320px] w-full object-cover md:h-[420px]"
                    />
                  </div>
                </article>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
