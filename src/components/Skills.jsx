import React from 'react';
import { motion } from 'framer-motion';

const skills = ['React.js', 'Next.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Node.js', 'Express.js', 'Python', 'C/C++', 'MongoDB', 'PostgreSQL', 'Git', 'GitHub', 'Figma', 'Postman', 'Redux', 'Docker', 'AWS'];

const skillsContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.12,
    },
  },
};

const skillItem = {
  hidden: { opacity: 0, y: 24, scale: 0.94 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="py-10 sm:py-12 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="glass-effect relative overflow-hidden rounded-3xl border border-blue-500/20 p-8 md:p-12"
        >
          <div className="pointer-events-none absolute inset-x-10 top-0 h-24 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-transparent blur-2xl" />
          <h3 className="mb-3 text-3xl md:text-4xl font-black text-white gradient-text">Skills & Technologies</h3>
          <p className="mb-8 max-w-2xl text-xl text-slate-300">
            Tools I use to design, build, and ship responsive web experiences.
          </p>

          <motion.div
            variants={skillsContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5"
          >
            {skills.map((skill, idx) => (
              <motion.div
                key={skill}
                variants={skillItem}
                whileHover={{ y: -8, scale: 1.04, rotate: idx % 2 === 0 ? 1.2 : -1.2 }}
                transition={{ type: 'spring', stiffness: 280, damping: 18 }}
                className="group relative cursor-pointer overflow-hidden rounded-xl border border-blue-500/20 bg-white/[0.03] p-4 text-center shadow-[0_8px_30px_rgba(15,23,42,0.12)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-600/0 via-purple-600/0 to-blue-600/0 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:from-blue-600/20 group-hover:via-purple-600/25 group-hover:to-blue-600/20" />
                <div className="pointer-events-none absolute -inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="relative z-10 inline-block font-bold text-slate-300 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-300">
                  {skill}
                </span>
                <div className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500 group-hover:w-3/4" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
