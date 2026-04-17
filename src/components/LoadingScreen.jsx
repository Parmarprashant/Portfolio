import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  const orbitDots = Array.from({ length: 10 }, (_, index) => ({
    id: index,
    angle: index * 36,
    delay: index * 0.12,
  }));

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#030712]">
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            'radial-gradient(circle at 30% 30%, rgba(37,99,235,0.22), transparent 34%), radial-gradient(circle at 70% 60%, rgba(168,85,247,0.18), transparent 30%), linear-gradient(135deg, #020617 0%, #081121 45%, #030712 100%)',
        }}
      />

      <motion.div
        className="absolute -left-20 top-16 h-72 w-72 rounded-full blur-3xl"
        style={{ background: 'rgba(59,130,246,0.22)' }}
        animate={{
          x: [0, 60, -10, 0],
          y: [0, 20, 70, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-20 bottom-10 h-80 w-80 rounded-full blur-3xl"
        style={{ background: 'rgba(168,85,247,0.18)' }}
        animate={{
          x: [0, -70, 10, 0],
          y: [0, -30, -80, 0],
          scale: [1, 0.9, 1.12, 1],
        }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(96,165,250,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.7) 1px, transparent 1px)',
          backgroundSize: '90px 90px',
        }}
      />

      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            'linear-gradient(180deg, transparent 0%, rgba(96,165,250,0.08) 45%, transparent 100%)',
        }}
        animate={{ y: ['-100%', '100%'] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'linear' }}
      />

      <div className="relative z-10 flex w-full max-w-3xl flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.84, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-10"
        >
          <motion.div
            className="absolute inset-[-34px] rounded-full border border-cyan-400/15"
            animate={{ rotate: 360, scale: [1, 1.04, 1] }}
            transition={{ rotate: { duration: 16, repeat: Infinity, ease: 'linear' }, scale: { duration: 4, repeat: Infinity } }}
          />
          <motion.div
            className="absolute inset-[-18px] rounded-full"
            style={{
              border: '2px solid transparent',
              borderTopColor: 'rgba(96,165,250,0.95)',
              borderRightColor: 'rgba(168,85,247,0.95)',
              filter: 'drop-shadow(0 0 20px rgba(59,130,246,0.45))',
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 3.6, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute inset-[-30px] rounded-full border border-fuchsia-400/20"
            style={{ borderStyle: 'dashed' }}
            animate={{ rotate: -360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          />

          {orbitDots.map((dot) => (
            <motion.span
              key={dot.id}
              className="absolute left-1/2 top-1/2 h-2.5 w-2.5 rounded-full"
              style={{
                background: dot.id % 2 === 0 ? '#60a5fa' : '#c084fc',
                boxShadow: dot.id % 2 === 0 ? '0 0 14px rgba(96,165,250,0.9)' : '0 0 14px rgba(192,132,252,0.9)',
              }}
              animate={{
                rotate: 360,
                opacity: [0.35, 1, 0.35],
                scale: [0.7, 1.3, 0.7],
              }}
              transition={{
                rotate: { duration: 7, repeat: Infinity, ease: 'linear', delay: dot.delay },
                opacity: { duration: 2.4, repeat: Infinity, delay: dot.delay },
                scale: { duration: 2.4, repeat: Infinity, delay: dot.delay },
              }}
            >
              <span
                className="absolute h-full w-full"
                style={{
                  transform: `rotate(${dot.angle}deg) translateY(-86px)`,
                  transformOrigin: 'center 86px',
                }}
              />
            </motion.span>
          ))}

          <motion.div
            className="absolute inset-[-12px] rounded-full"
            style={{
              background:
                'radial-gradient(circle, rgba(96,165,250,0.18) 0%, rgba(96,165,250,0.04) 45%, transparent 70%)',
            }}
            animate={{ scale: [1, 1.12, 1], opacity: [0.55, 0.9, 0.55] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
          />

          <div className="relative flex h-36 w-36 items-center justify-center rounded-full border border-white/10 bg-white/5 shadow-[0_0_80px_rgba(59,130,246,0.18)] backdrop-blur-2xl sm:h-40 sm:w-40">
            <motion.div
              className="absolute inset-2 rounded-full border border-cyan-300/20"
              animate={{ rotate: -360 }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            />
            <motion.img
              src="https://res.cloudinary.com/dgib19szk/image/upload/v1767781842/WhatsApp_Image_2025-12-19_at_6.26.39_PM_sqhrst.jpg"
              alt="Loading profile"
              className="profile-pic h-28 w-28 rounded-full object-cover ring-2 ring-cyan-400/70 sm:h-32 sm:w-32"
              animate={{ scale: [1, 1.04, 1], y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="space-y-4"
        >
          <motion.p
            className="text-[11px] font-semibold uppercase tracking-[0.45em] text-cyan-300/75"
            animate={{ opacity: [0.45, 1, 0.45], letterSpacing: ['0.45em', '0.52em', '0.45em'] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            Loading Portfolio Experience
          </motion.p>

          <motion.h2
            className="bg-gradient-to-r from-white via-cyan-100 to-fuchsia-200 bg-clip-text text-4xl font-black tracking-tight text-transparent sm:text-6xl"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              textShadow: [
                '0 0 20px rgba(59,130,246,0.18)',
                '0 0 34px rgba(168,85,247,0.25)',
                '0 0 20px rgba(59,130,246,0.18)',
              ],
            }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ backgroundSize: '200% 200%' }}
          >
            Prashant Parmar
          </motion.h2>

          <motion.p
            className="text-lg font-semibold text-cyan-300 sm:text-xl"
            animate={{ opacity: [0.6, 1, 0.6], y: [0, -2, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            Web Developer • Frontend Builder • Creative Coder
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 w-full max-w-md"
        >
          <div className="mb-3 flex items-center justify-between text-xs font-medium uppercase tracking-[0.28em] text-slate-400">
            <span>Booting Interface</span>
            <motion.span
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.4, repeat: Infinity }}
            >
              Please wait
            </motion.span>
          </div>

          <div className="relative h-2.5 overflow-hidden rounded-full border border-cyan-400/20 bg-slate-900/80">
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500"
              animate={{ width: ['12%', '38%', '62%', '84%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-white/45 to-transparent"
              animate={{ x: ['-30%', '460%'] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }}
            />
          </div>

          <div className="mt-5 flex items-center justify-center gap-2">
            {[0, 1, 2].map((dot) => (
              <motion.span
                key={dot}
                className="h-2.5 w-2.5 rounded-full"
                style={{
                  background: dot === 1 ? '#c084fc' : '#60a5fa',
                  boxShadow: dot === 1 ? '0 0 16px rgba(192,132,252,0.85)' : '0 0 16px rgba(96,165,250,0.85)',
                }}
                animate={{ y: [0, -8, 0], scale: [1, 1.35, 1], opacity: [0.45, 1, 0.45] }}
                transition={{ duration: 0.9, repeat: Infinity, delay: dot * 0.15 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingScreen;
