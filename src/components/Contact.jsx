import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Github, Linkedin, Twitter, ArrowRight, Youtube, Code2 } from "lucide-react";

// Initialize EmailJS outside component or inside useEffect.
// Moving it here so it mounts once similar to what was in App.jsx
if (typeof window !== 'undefined') {
  emailjs.init('l-V9MM0TrkHxURYX6');
}

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('');

    try {
      if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
        setFormStatus('Please fill in all fields');
        setIsSubmitting(false);
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setFormStatus('Please enter a valid email address');
        setIsSubmitting(false);
        return;
      }

      const templateParams = {
        to_email: 'prashantparmar9919@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message
      };

      console.log('Sending with params:', templateParams);

      const response = await emailjs.send(
        'service_k2twq3k',
        'template_ktnrbo4',
        templateParams
      );

      console.log('Response:', response);

      if (response.status === 200) {
        setFormStatus('✓ Message sent successfully! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
        
        setTimeout(() => {
          setFormStatus('');
        }, 5000);
      }

    } catch (error) {
      console.error('EmailJS Error:', error);
      setFormStatus(`✗ Error: ${error.text || error.message || 'Please try again.'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-20 scroll-animate-up">
          <div className="inline-block px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-bold border border-blue-500/30 mb-4 md:mb-6">
            GET IN TOUCH
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 md:mb-6 tracking-tight gradient-text section-heading">
            Ready to Collaborate?
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto scroll-animate-up" style={{ animationDelay: '0.2s' }}>
            I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <div className="md:col-span-1 space-y-6">
            <div className="glass-effect rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/50 transition-all scroll-animate-left group">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Email</h3>
              <a href="mailto:prashantparmar9919@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors text-sm break-all">
                prashantparmar9919@gmail.com
              </a>
            </div>

            <div className="glass-effect rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/50 transition-all scroll-animate-left group" style={{ animationDelay: '0.1s' }}>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Location</h3>
              <p className="text-slate-300 text-sm">Kadi, Gujarat, India</p>
            </div>

            <div className="glass-effect rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/50 transition-all scroll-animate-left group" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 11-2 0 1 1 0 012 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm14 0a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Response Time</h3>
              <p className="text-slate-300 text-sm">Within 24 hours</p>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="glass-effect rounded-3xl p-8 md:p-10 border border-blue-500/30 scroll-animate-right">
              {formStatus && (
                <div className={`form-status ${formStatus.includes('✓') ? 'success' : 'error'} mb-8`}>
                  {formStatus}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="scroll-animate-left" style={{ animationDelay: '0.1s' }}>
                  <label className="block text-white font-semibold mb-3 text-sm uppercase tracking-wider">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="w-full glass-effect rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none border border-blue-500/30 hover:border-blue-500/50 focus:border-blue-400 transition-all duration-300 text-base"
                  />
                </div>

                <div className="scroll-animate-left" style={{ animationDelay: '0.2s' }}>
                  <label className="block text-white font-semibold mb-3 text-sm uppercase tracking-wider">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="w-full glass-effect rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none border border-blue-500/30 hover:border-blue-500/50 focus:border-blue-400 transition-all duration-300 text-base"
                  />
                </div>

                <div className="scroll-animate-left" style={{ animationDelay: '0.3s' }}>
                  <label className="block text-white font-semibold mb-3 text-sm uppercase tracking-wider">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, ideas, or anything else..."
                    rows="6"
                    className="w-full glass-effect rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none border border-blue-500/30 hover:border-blue-500/50 focus:border-blue-400 transition-all duration-300 resize-none text-base"
                  ></textarea>
                  <p className="text-xs text-slate-400 mt-2">Min. 10 characters</p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 disabled:from-slate-600 disabled:to-slate-600 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/40 hover:shadow-blue-500/60 group flex items-center justify-center gap-2 scroll-animate-up uppercase tracking-wider text-sm ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:-translate-y-1'}`}
                  style={{ animationDelay: '0.4s' }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                <p className="text-xs text-slate-400 text-center">
                  Your message will be sent directly to my email using EmailJS service.
                </p>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-12 border-t border-blue-500/20">
          <div className="text-center mb-12 scroll-animate-up">
            <h3 className="text-2xl font-bold text-white mb-3">Or Connect On Social Media</h3>
            <p className="text-slate-400">Follow me for updates and insights</p>
          </div>

          <div className="flex justify-center gap-8 flex-wrap">
            {[
              { Icon: Mail, link: 'mailto:prashantparmar9919@gmail.com', label: 'Email', color: 'from-red-600 to-orange-600' },
              { Icon: Github, link: 'https://github.com/Parmarprashant', label: 'GitHub', color: 'from-slate-700 to-slate-800' },
              { Icon: Linkedin, link: 'https://www.linkedin.com/in/prashant-parmar-0700373a1/', label: 'LinkedIn', color: 'from-blue-700 to-cyan-600' },
              { Icon: Twitter, link: 'https://x.com/prashantparmxr', label: 'Twitter', color: 'from-cyan-500 to-blue-500' },
              { Icon: Code2, link: 'https://leetcode.com/u/parmarprashant/', label: 'LeetCode', color: 'from-yellow-600 to-orange-500' },
              { Icon: Youtube, link: 'https://www.youtube.com/@prashantparmar9919', label: 'YouTube', color: 'from-red-600 to-red-700' }
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                title={social.label}
                aria-label={social.label}
                className={`group relative w-16 h-16 rounded-xl glass-effect border border-blue-500/30 hover:border-blue-500/70 flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 transform hover:scale-125 hover:-translate-y-3 scroll-animate-scale`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`}></div>
                <social.Icon size={28} className="group-hover:scale-110 transition-transform" />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-slate-800 px-3 py-1 rounded-lg text-xs font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {social.label}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
