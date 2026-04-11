import React from 'react';

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
                <img src={item.icon} alt={item.alt} className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{item.title}</h3>
              <p className="text-slate-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="glass-effect rounded-3xl p-12 border border-blue-500/20 scroll-animate-up" id="skills">
          <h3 className="text-3xl font-bold text-white mb-6">Skills & Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {['React.js', 'Next.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Node.js', 'Express.js', 'Python', 'C/C++', 'MongoDB', 'PostgreSQL', 'Git', 'GitHub', 'Figma', 'Postman', 'Redux', 'Docker', 'AWS'].map((skill, idx) => (
              <div
                key={idx}
                className="glass-effect p-4 rounded-xl border border-blue-500/20 hover:border-blue-500/70 hover:bg-blue-500/20 transition-all duration-500 text-center group cursor-pointer relative overflow-hidden scroll-animate-scale"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-purple-600/0 to-blue-600/0 group-hover:from-blue-600/30 group-hover:via-purple-600/30 group-hover:to-blue-600/30 transition-all duration-500 pointer-events-none"></div>
                <span className="text-slate-300 font-bold group-hover:text-blue-300 transition-all duration-300 relative z-10 inline-block group-hover:scale-110 transform">
                  {skill}
                </span>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-3/4 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
