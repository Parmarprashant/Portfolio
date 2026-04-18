import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto min-h-screen px-4 sm:px-6 pt-28 sm:pt-32 md:pt-24 lg:pt-20 pb-12 md:pb-0 grid md:grid-cols-2 gap-12 md:gap-14 lg:gap-20 items-center justify-items-center relative z-10">
        <div className="space-y-8 md:space-y-10 relative z-10 h-full flex flex-col justify-center">
          <div className="space-y-5 sm:space-y-6 animate-slide-in-left">
            <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tighter animate-slide-up-bounce animation-delay-200 text-white [[class*='light-mode']_&]:text-slate-900">
              Hi, I'm
              <br />
              <span className="gradient-text animate-text-glow">Prashant</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 [[class*='light-mode']_&]:text-slate-600 leading-relaxed max-w-lg animate-fade-in-up animation-delay-300">
              A passionate web developer crafting beautiful, responsive, and high-performance digital experiences. I transform ideas into code.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 pt-4 sm:pt-6">
              <a href="#contact" className="px-8 py-4 rounded-full font-bold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50 group flex items-center gap-2 animate-rotate-scale animation-delay-400">
                Get in Touch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#projects" className="px-8 py-4 rounded-full font-bold border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10 transition-all duration-300 transform hover:scale-105 animate-skew-in animation-delay-500">
                View My Work
              </a>
              <a href="/Prashant-Parmar_Resume.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full font-bold border-2 border-slate-600 text-slate-300 [[class*='light-mode']_&]:text-slate-600 [[class*='light-mode']_&]:border-slate-300 hover:border-blue-500 hover:text-blue-400 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 animate-slide-up-bounce animation-delay-600">
                <Download size={18} /> Resume
              </a>
            </div>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center items-center relative z-10 animate-slide-in-right h-full min-h-[280px] sm:min-h-0">
          <div className="relative animate-float">
            <div className="absolute inset-[-18px] rounded-full border border-blue-400/20"></div>
            <div className="absolute inset-[-34px] rounded-full border border-purple-400/10"></div>

            <div className="relative rounded-full bg-white/30 p-3 shadow-[0_30px_80px_rgba(59,130,246,0.16)] backdrop-blur-2xl">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-[26rem] md:h-[26rem] rounded-full overflow-hidden border border-white/60 shadow-2xl group">
                <img
                  src="https://res.cloudinary.com/dgib19szk/image/upload/f_auto,q_auto,w_600/v1767781842/WhatsApp_Image_2025-12-19_at_6.26.39_PM_sqhrst.jpg"
                  alt="Prashant Parmar profile"
                  className="profile-pic w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 brightness-110 contrast-105"
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-white/10"></div>
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/20 to-transparent"></div>
              </div>
            </div>

            <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 h-40 w-96 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 blur-3xl opacity-25 animate-blob"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
