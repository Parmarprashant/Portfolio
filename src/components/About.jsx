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

const About = () => {
  return (
    <section id="about" className="py-10 sm:py-12 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-20 scroll-animate-up">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 md:mb-6 tracking-tight gradient-text section-heading">
            About Me
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto scroll-animate-up" style={{ animationDelay: '0.2s' }}>
            I'm a first-year Computer Engineering student at Swaminarayan University with a passion for web development and building innovative digital solutions. As a beginner in the tech world, I'm enthusiastic about learning new technologies and creating meaningful projects that solve real problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="glass-effect rounded-2xl p-8 border border-blue-500/20 scroll-animate-left">
            <h3 className="text-2xl font-bold text-white mb-4 gradient-text">My Journey</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              I started my coding journey during high school with a curiosity about how websites and applications work. Now, as a first-year student, I'm actively learning full-stack development and exploring different technologies. Every project I build teaches me something new, and I'm committed to improving my skills every day. My education at Swaminarayan University combined with self-directed learning has given me a solid foundation in web development.
            </p>
          </div>
          
          <div className="glass-effect rounded-2xl p-8 border border-blue-500/20 scroll-animate-right">
            <h3 className="text-2xl font-bold text-white mb-4 gradient-text">What I'm Learning</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              I'm currently learning the MERN stack (MongoDB, Express, React, Node.js) and have a growing understanding of JavaScript, HTML, and CSS. I'm also exploring Python and other backend technologies. Through my projects and coursework, I'm building responsive web applications and developing problem-solving skills. I'm eager to collaborate on projects and contribute to the developer community while continuing to expand my knowledge.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: 'https://cdn-icons-png.flaticon.com/512/1995/1995467.png',
              alt: 'Developer',
              title: 'Full Stack Developer',
              desc: 'Building modern web applications with React, JavaScript, and responsive design principles.'
            },
            {
              icon: 'https://cdn-icons-png.flaticon.com/512/3143/3143615.png',
              alt: 'Tools',
              title: 'Tech Enthusiast',
              desc: 'Passionate about C/C++, Python, MongoDB, and exploring new technologies.'
            },
            {
              icon: 'https://cdn-icons-png.flaticon.com/512/1524/1524896.png',
              alt: 'Target',
              title: 'Problem Solver',
              desc: 'I love taking on challenging projects and pushing my technical boundaries.'
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="card-hover glass-effect rounded-2xl p-8 border border-blue-500/20 group scroll-animate-up"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all shadow-lg group-hover:animate-rotate-axis">
                <img src={item.icon} alt={item.alt} className="w-7 h-7" loading="lazy" decoding="async" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{item.title}</h3>
              <p className="text-slate-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <motion.div
          id="skills"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="glass-effect relative overflow-hidden rounded-3xl border border-blue-500/20 p-8 md:p-12 mt-24 md:mt-32"
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

export default About;
