import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
  Menu,
  X,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Download,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ExternalLink,
  Play,
  Sun,
  Moon
} from "lucide-react";

// Initialize EmailJS (do this once when component mounts)
emailjs.init('l-V9MM0TrkHxURYX6'); // EmailJS Public Key

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [certIndex, setCertIndex] = useState(0);
  const [projectsToShow, setProjectsToShow] = useState(3);
  const [scrollY, setScrollY] = useState(0);
  const [isDark, setIsDark] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let observer = null;
    // Small delay to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      };

      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const classList = entry.target.className;
            
            if (classList.includes('scroll-animate-left')) {
              entry.target.classList.add('scroll-visible-left');
            } else if (classList.includes('scroll-animate-right')) {
              entry.target.classList.add('scroll-visible-right');
            } else if (classList.includes('scroll-animate-up')) {
              entry.target.classList.add('scroll-visible-up');
            } else if (classList.includes('scroll-animate-scale')) {
              entry.target.classList.add('scroll-visible-scale');
            }
            
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      // Observe all elements with scroll-animate classes
      const animatedElements = document.querySelectorAll('[class*="scroll-animate"]');
      animatedElements.forEach((el) => {
        observer.observe(el);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      if (observer) observer.disconnect();
    };
  }, []);

  const certificates = [
    { id: 1, title: 'CS105: Introduction to Python', issuer: 'Saylor.org', date: 'December 19, 2025', image: 'https://res.cloudinary.com/dgib19szk/image/upload/v1767782202/5645318445PP-1_n1xomm.png' },
    { id: 2, title: 'Building with Artificial Intelligence', issuer: 'Saylor.org', date: 'December 19, 2025', image: 'https://res.cloudinary.com/dgib19szk/image/upload/v1767782202/1755841329PP-1_j6rc80.png' },
    { id: 3, title: 'Ai Tools workshop', issuer: 'Be10X', date: 'October 26th, 2025', image: 'https://res.cloudinary.com/dgib19szk/image/upload/v1767782202/Certificate-1_z9oatd.png' },
  ];

  const projects = [
    {
      title: 'Coursera',
      desc: 'Built a Coursera-inspired learning platform clone using HTML, CSS, and JavaScript with a responsive UI.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://res.cloudinary.com/dgib19szk/image/upload/v1767780750/Screenshot_2026-01-07_102815_rr1koh.png',
      category: 'Learning Platform',
      github: 'https://github.com/Parmarprashant/coursera-clone',
      live: 'https://courseraa-prashant.netlify.app',
      youtube: 'https://youtu.be/bOv65Dt3avk?si=x2qNM685yzrV1PNp'
    },
    {
      title: 'Delhivery',
      desc: 'Built a Delhivery platform clone using HTML, CSS, and JavaScript with a responsive UI.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://res.cloudinary.com/dgib19szk/image/upload/v1767780750/Screenshot_2026-01-07_103140_fx5l0q.png',
      category: 'Logistics',
      github: 'https://github.com/Parmarprashant/delhivery-clone',
      live: 'https://del-prashant.netlify.app',
      youtube: 'https://youtu.be/znt3gThQh4g?si=l8NLNiQVXbgACb0E'
    },
    {
      title: 'Skipii',
      desc: 'Built a Skipii platform clone using HTML, CSS, and JavaScript with a responsive UI.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://res.cloudinary.com/dgib19szk/image/upload/v1767780750/Screenshot_2026-01-07_103834_z0bjuj.png',
      category: 'Food Delivery',
      github: 'https://github.com/Parmarprashant/skipii-clone',
      live: 'https://skippi-prashant.netlify.app',
      youtube: 'https://youtu.be/AAypqWni_MM?si=EZaaIZhWFAGqC5FG'
    },
    {
      title: 'BluetoKaiCoffee',
      desc: 'Built a BluetoKaiCoffee platform clone using HTML, CSS, and JavaScript with a responsive UI.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://res.cloudinary.com/dgib19szk/image/upload/v1767780750/Screenshot_2026-01-07_104334_zlcpvi.png',
      category: 'E-Commerce',
      github: 'https://github.com/Parmarprashant/bluetokai-clone',
      live: 'https://blue-clone-prashant.netlify.app',
      youtube: 'https://youtu.be/O6Mdh3mOgCo?si=3erYXPQ9AzeIjcr3'
    },
    {
      title: 'Postman API',
      desc: 'Built a Postman API platform clone using HTML, CSS, and JavaScript with responsive design',
      tags: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://res.cloudinary.com/dgib19szk/image/upload/v1767780750/Screenshot_2026-01-07_104426_inuup6.png',
      category: 'Developer Tools',
      github: 'https://github.com/Parmarprashant/postman-clone',
      live: 'https://post-clone-prashan.netlify.app',
      youtube: 'https://youtu.be/1ZDdGl2ar2U?si=V5s70zRHTWk0oXmN'
    },
    {
      title: 'Blix Scooter',
      desc: 'Built a Blix Scooter platform clone using HTML, CSS, and JavaScript with modern UI',
      tags: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://res.cloudinary.com/dgib19szk/image/upload/v1767780751/Screenshot_2026-01-07_104517_bsyo7d.png',
      category: 'E-Commerce',
      github: 'https://github.com/Parmarprashant/blix-scooter-clone',
      live: 'https://bliss-clone.netlify.app',
      youtube: 'https://youtu.be/lVykFH56af8?si=y45U3vmHcRnK3Dgd'
    },
  ];

  const education = [
    { school: 'Swaminarayan University', field: 'Computer Engineering', detail: 'Relevant coursework: Web Development' },
    { school: "Little flower's School", field: 'Higher Secondary Education', detail: 'Focus on Science and Mathematics. With Some Coding experience in Python', year: '2023-2025' },
  ];

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Form input change handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Form submit handler with EmailJS
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('');

    try {
      // Validate form
      if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
        setFormStatus('Please fill in all fields');
        setIsSubmitting(false);
        return;
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setFormStatus('Please enter a valid email address');
        setIsSubmitting(false);
        return;
      }

      // Send email using EmailJS
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
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setFormStatus('');
        }, 5000);
      }

    } catch (error) {
      console.error('EmailJS Error:', error);
      console.error('Error text:', error.text);
      console.error('Error message:', error.message);
      setFormStatus(`✗ Error: ${error.text || error.message || 'Please try again.'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-black z-[9999] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          </div>

          <div className="text-center relative z-10">
            <div className="flex justify-center mb-12">
              <div className="relative w-32 h-32">
                <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 border-r-purple-500 animate-spin"></div>
                <div className="absolute inset-4 rounded-full border-3 border-transparent border-b-blue-400 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '2s' }}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img src="https://res.cloudinary.com/dgib19szk/image/upload/v1767781842/WhatsApp_Image_2025-12-19_at_6.26.39_PM_sqhrst.jpg"
                    alt="Loading profile"
                    className="profile-pic w-24 h-24 rounded-full object-cover border-2 border-blue-500 animate-pulse"
                  />
                </div>
              </div>
            </div>

            <h2 className="text-4xl font-black text-white mb-3 tracking-tight animate-pulse">Prashant Parmar</h2>
            <p className="text-blue-400 font-bold text-lg mb-2">Web Developer</p>
            <div className="flex justify-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>
      )}

      <div className={`min-h-screen ${isDark ? 'bg-gradient-to-b from-slate-950 via-slate-900 to-black' : 'bg-gradient-to-b from-slate-50 via-blue-50 to-white'} text-white overflow-x-hidden`}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap');

          :root {
            --bg-primary: 5, 5, 5;
            --bg-secondary: 15, 23, 42;
            --text-primary: 255, 255, 255;
            --text-secondary: 203, 213, 225;
            --accent-blue: 59, 130, 246;
            --accent-purple: 168, 85, 247;
          }

          html.light-mode {
            --bg-primary: 255, 255, 255;
            --bg-secondary: 241, 245, 250;
            --text-primary: 15, 23, 42;
            --text-secondary: 71, 85, 105;
            --accent-blue: 37, 99, 235;
            --accent-purple: 147, 51, 234;
          }

          * {
            font-family: 'Poppins', sans-serif;
          }

          h1, h2, h3, h4, h5, h6 {
            font-family: 'Space Grotesk', sans-serif;
          }

          @keyframes slideInUp {
            from {
              opacity: 0;
              transform: translateY(60px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slideInDown {
            from {
              opacity: 0;
              transform: translateY(-50px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-60px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(60px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes fadeInScale {
            from {
              opacity: 0;
              transform: scale(0.9) translateY(20px);
            }
            to {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }

          @keyframes floatUpDown {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-25px);
            }
          }

          @keyframes glowPulse {
            0%, 100% {
              box-shadow: 0 0 30px rgba(59, 130, 246, 0.4), 0 0 60px rgba(168, 85, 247, 0.2);
            }
            50% {
              box-shadow: 0 0 50px rgba(59, 130, 246, 0.8), 0 0 100px rgba(168, 85, 247, 0.4);
            }
          }

          @keyframes blobRotate {
            0% {
              transform: translate(0, 0) scale(1) rotate(0deg);
            }
            33% {
              transform: translate(30px, -30px) scale(1.1) rotate(120deg);
            }
            66% {
              transform: translate(-30px, 30px) scale(0.9) rotate(240deg);
            }
            100% {
              transform: translate(0, 0) scale(1) rotate(360deg);
            }
          }

          @keyframes shimmerWave {
            0% {
              background-position: -1000px 0;
            }
            100% {
              background-position: 1000px 0;
            }
          }

          @keyframes morphGradient {
            0%, 100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }

          @keyframes textGlow {
            0%, 100% {
              text-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
            }
            50% {
              text-shadow: 0 0 20px rgba(59, 130, 246, 0.8), 0 0 30px rgba(168, 85, 247, 0.6);
            }
          }

          @keyframes cardEntry {
            0% {
              opacity: 0;
              transform: translateY(40px) rotateX(10deg);
            }
            100% {
              opacity: 1;
              transform: translateY(0) rotateX(0deg);
            }
          }

          @keyframes slideLeftToRight {
            0% {
              opacity: 0;
              transform: translateX(-100px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slideRightToLeft {
            0% {
              opacity: 0;
              transform: translateX(100px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes rotateAndScale {
            0% {
              transform: rotate(-10deg) scale(0.8);
              opacity: 0;
            }
            100% {
              transform: rotate(0deg) scale(1);
              opacity: 1;
            }
          }

          @keyframes bounceIn {
            0% {
              transform: scale(0.3);
              opacity: 0;
            }
            50% {
              opacity: 1;
            }
            70% {
              transform: scale(1.05);
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }

          @keyframes slideUpBounce {
            0% {
              opacity: 0;
              transform: translateY(50px);
            }
            60% {
              opacity: 1;
              transform: translateY(-10px);
            }
            80% {
              transform: translateY(5px);
            }
            100% {
              transform: translateY(0);
            }
          }

          @keyframes skewIn {
            0% {
              opacity: 0;
              transform: skewX(10deg) translateX(-30px);
            }
            100% {
              opacity: 1;
              transform: skewX(0) translateX(0);
            }
          }

          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes pulseScale {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.1);
            }
          }

          @keyframes rotateAxis {
            0% {
              transform: rotateY(0deg);
            }
            100% {
              transform: rotateY(360deg);
            }
          }

          @keyframes slideInFromBottom {
            0% {
              opacity: 0;
              transform: translateY(100px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Scroll animation classes - Initial state */
          .scroll-animate-left {
            opacity: 0;
            transform: translateX(-80px);
          }

          .scroll-animate-right {
            opacity: 0;
            transform: translateX(80px);
          }

          .scroll-animate-up {
            opacity: 0;
            transform: translateY(60px);
          }

          .scroll-animate-scale {
            opacity: 0;
            transform: scale(0.85);
          }

          /* Scroll animation classes - Animated state */
          .scroll-visible-left {
            animation: slideLeftToRight 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          }

          .scroll-visible-right {
            animation: slideRightToLeft 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          }

          .scroll-visible-up {
            animation: slideInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards !important;
          }

          /* Enhanced heading animations */
          .section-heading {
            display: block;
          }

          .scroll-visible-scale {
            animation: fadeInScale 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          }

          .animate-slide-in-up {
            animation: slideInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          }

          .animate-slide-in-down {
            animation: slideInDown 0.8s ease-out forwards;
          }

          .animate-slide-in-left {
            animation: slideInLeft 0.8s ease-out forwards;
          }

          .animate-slide-in-right {
            animation: slideInRight 0.8s ease-out forwards;
          }

          .animate-fade-scale {
            animation: fadeInScale 0.6s ease-out forwards;
          }

          .animate-float {
            animation: floatUpDown 4s ease-in-out infinite;
          }

          .animate-glow {
            animation: glowPulse 3s ease-in-out infinite;
          }

          .animate-blob {
            animation: blobRotate 10s infinite;
          }

          .animate-text-glow {
            animation: textGlow 2s ease-in-out infinite;
          }

          .animate-card-entry {
            animation: cardEntry 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
            opacity: 0;
          }

          .animate-rotate-scale {
            animation: rotateAndScale 0.6s ease-out forwards;
          }

          .animate-bounce-in {
            animation: bounceIn 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          }

          .animate-slide-up-bounce {
            animation: slideUpBounce 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          }

          .animate-skew-in {
            animation: skewIn 0.6s ease-out forwards;
          }

          .animate-fade-in-up {
            animation: fadeInUp 0.6s ease-out forwards;
          }

          .animate-pulse-scale {
            animation: pulseScale 2s ease-in-out infinite;
          }

          .animate-rotate-axis {
            animation: rotateAxis 3s linear infinite;
          }

          .animate-slide-in-bottom {
            animation: slideInFromBottom 0.7s ease-out forwards;
          }

          .animation-delay-100 { animation-delay: 0.1s; }
          .animation-delay-200 { animation-delay: 0.2s; }
          .animation-delay-300 { animation-delay: 0.3s; }
          .animation-delay-400 { animation-delay: 0.4s; }
          .animation-delay-500 { animation-delay: 0.5s; }
          .animation-delay-600 { animation-delay: 0.6s; }
          .animation-delay-700 { animation-delay: 0.7s; }
          .animation-delay-800 { animation-delay: 0.8s; }
          .animation-delay-1000 { animation-delay: 1s; }
          .animation-delay-2000 { animation-delay: 2s; }

          .gradient-text {
            background: linear-gradient(135deg, #3b82f6 0%, #a855f7 50%, #3b82f6 100%);
            background-size: 200% 200%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: morphGradient 4s ease infinite;
          }

          .card-hover {
            transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          }

          .card-hover:hover {
            transform: translateY(-16px);
            box-shadow: 0 30px 60px rgba(59, 130, 246, 0.2), 0 0 60px rgba(168, 85, 247, 0.1);
          }

          .glass-effect {
            background: rgba(15, 23, 42, 0.4);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(59, 130, 246, 0.2);
          }

          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          /* Light Mode Styles */
          html.light-mode {
            --bg-primary: 255, 255, 255;
            --text-primary: 15, 23, 42;
          }

          html.light-mode {
            color-scheme: light;
          }

          html.light-mode body,
          html.light-mode main,
          html.light-mode .min-h-screen {
            background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e0f2fe 100%);
            color: #1e293b;
          }

          html.light-mode section {
            background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
            color: #1e293b;
          }

          html.light-mode h1,
          html.light-mode h2,
          html.light-mode h3,
          html.light-mode h4,
          html.light-mode h5,
          html.light-mode h6 {
            color: #0f172a;
            font-weight: 700;
          }

          html.light-mode .text-white {
            color: #0f172a;
          }

          html.light-mode .text-slate-300 {
            color: #475569;
          }

          html.light-mode .text-slate-400 {
            color: #64748b;
          }

          html.light-mode .text-slate-500 {
            color: #64748b;
          }

          html.light-mode .text-blue-400 {
            color: #2563eb;
          }

          html.light-mode .text-purple-400 {
            color: #a855f7;
          }

          html.light-mode .bg-slate-800 {
            background-color: #f1f5f9;
            border-color: #cbd5e1;
          }

          html.light-mode .bg-slate-800\/50 {
            background-color: rgba(241, 245, 250, 0.8);
          }

          html.light-mode .bg-slate-900 {
            background-color: #e2e8f0;
            border-color: #cbd5e1;
          }

          html.light-mode .glass-effect {
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(59, 130, 246, 0.2);
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
          }

          html.light-mode .border-blue-500\/20 {
            border-color: rgba(37, 99, 235, 0.3);
          }

          html.light-mode .border-blue-500\/30 {
            border-color: rgba(37, 99, 235, 0.4);
          }

          html.light-mode .border-blue-500\/50 {
            border-color: rgba(37, 99, 235, 0.6);
          }

          html.light-mode .hover\:text-blue-400:hover {
            color: #1e40af;
          }

          html.light-mode .group:hover .group-hover\:text-blue-400 {
            color: #1e40af;
          }

          html.light-mode .group-hover\:text-blue-300 {
            color: #3b82f6;
          }

          html.light-mode .gradient-text {
            background: linear-gradient(135deg, #1e40af 0%, #7c3aed 50%, #1e40af 100%);
            background-size: 200% 200%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          html.light-mode .card-hover:hover {
            box-shadow: 0 30px 60px rgba(37, 99, 235, 0.15), 0 0 60px rgba(168, 85, 247, 0.1);
            transform: translateY(-16px);
          }

          html.light-mode .bg-gradient-to-r {
            background-image: linear-gradient(to right, var(--tw-gradient-stops));
          }

          html.light-mode .from-blue-600,
          html.light-mode .from-blue-500 {
            --tw-gradient-from: #2563eb;
            --tw-gradient-to: rgba(37, 99, 235, 0);
            --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
          }

          html.light-mode .to-purple-600,
          html.light-mode .to-purple-500 {
            --tw-gradient-to: #a855f7;
          }

          html.light-mode .hover\:border-blue-500:hover {
            border-color: #2563eb;
          }

          html.light-mode .hover\:bg-blue-500\/10:hover {
            background-color: rgba(37, 99, 235, 0.1);
          }

          html.light-mode .hover\:border-blue-500\/70:hover {
            border-color: rgba(37, 99, 235, 0.7);
          }

          html.light-mode .hover\:bg-blue-500\/20:hover {
            background-color: rgba(37, 99, 235, 0.2);
          }

          html.light-mode .shadow-2xl {
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
          }

          html.light-mode .hover\:shadow-xl:hover {
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
          }

          html.light-mode .animate-glow {
            box-shadow: 0 0 30px rgba(37, 99, 235, 0.3), 0 0 60px rgba(168, 85, 247, 0.15);
          }

          html.light-mode nav.glass-effect {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            border-color: rgba(59, 130, 246, 0.2);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          }

          html.light-mode .animate-text-glow {
            text-shadow: 0 0 10px rgba(37, 99, 235, 0.4);
          }

          html.light-mode input,
          html.light-mode textarea {
            background: rgba(255, 255, 255, 0.9);
            color: #1e293b;
            border-color: rgba(37, 99, 235, 0.3);
          }

          html.light-mode input:hover,
          html.light-mode textarea:hover {
            border-color: rgba(37, 99, 235, 0.5);
            background: rgba(255, 255, 255, 0.95);
          }

          html.light-mode input:focus,
          html.light-mode textarea:focus {
            border-color: rgba(37, 99, 235, 0.8);
            box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
          }

          html.light-mode .placeholder-slate-500::placeholder {
            color: #94a3b8;
          }

          html.light-mode .form-status {
            padding: 12px 16px;
            border-radius: 8px;
            text-align: center;
            font-weight: 600;
            animation: slideInUp 0.4s ease-out;
          }

          html.light-mode .form-status.success {
            background: rgba(34, 197, 94, 0.15);
            color: #16a34a;
            border: 1px solid rgba(34, 197, 94, 0.3);
          }

          html.light-mode .form-status.error {
            background: rgba(239, 68, 68, 0.15);
            color: #dc2626;
            border: 1px solid rgba(239, 68, 68, 0.3);
          }

          /* Light mode: primary gradient buttons keep white text */
          html.light-mode a.bg-gradient-to-r.from-blue-600,
          html.light-mode a.bg-gradient-to-r.from-blue-500,
          html.light-mode button.bg-gradient-to-r.from-blue-600,
          html.light-mode button.bg-gradient-to-r.from-blue-500,
          html.light-mode a.bg-gradient-to-r.from-green-500,
          html.light-mode a.bg-gradient-to-r.from-green-600 {
            color: #ffffff !important;
          }

          /* Light mode: richer primary gradient (blue–purple) for better visibility */
          html.light-mode a.from-blue-600,
          html.light-mode a.from-blue-500,
          html.light-mode button.from-blue-600,
          html.light-mode button.from-blue-500 {
            --tw-gradient-from: #1d4ed8;
            --tw-gradient-to: rgba(29, 78, 216, 0);
            --tw-gradient-stops: var(--tw-gradient-from), #7c3aed;
          }
          html.light-mode a.to-purple-600,
          html.light-mode a.to-purple-500,
          html.light-mode button.to-purple-600,
          html.light-mode button.to-purple-500 {
            --tw-gradient-to: #7c3aed;
          }

          /* Light mode: outline buttons (border + blue text) */
          html.light-mode .border-2.border-blue-500 {
            border-color: #2563eb;
          }
          html.light-mode a.border-blue-500.text-blue-400 {
            color: #1d4ed8;
            border-color: #2563eb;
          }
          html.light-mode a.border-blue-500.text-blue-400:hover {
            background-color: rgba(37, 99, 235, 0.08);
            color: #1e40af;
          }

          /* Light mode: slate outline button (Resume) */
          html.light-mode a.border-slate-600 {
            border-color: #64748b;
            color: #475569;
          }
          html.light-mode a.border-slate-600:hover {
            border-color: #2563eb;
            color: #1d4ed8;
          }

          /* Light mode: GitHub / dark secondary buttons – keep dark background, white text */
          html.light-mode a.from-slate-700,
          html.light-mode a.from-slate-600 {
            --tw-gradient-from: #334155;
            --tw-gradient-to: rgba(51, 65, 85, 0);
            --tw-gradient-stops: var(--tw-gradient-from), #1e293b;
            color: #ffffff !important;
          }
          html.light-mode a.to-slate-800,
          html.light-mode a.to-slate-700,
          html.light-mode button.to-slate-600 {
            --tw-gradient-to: #1e293b;
          }

          /* Light mode: disabled GitHub button */
          html.light-mode button.cursor-not-allowed.bg-slate-700\\/80,
          html.light-mode span.cursor-not-allowed.bg-slate-700\\/80 {
            background-color: rgba(148, 163, 184, 0.5);
            color: #64748b;
          }

          /* Light mode: green Live button – keep white text */
          html.light-mode a.from-green-500,
          html.light-mode a.from-green-600 {
            --tw-gradient-from: #16a34a;
            --tw-gradient-to: rgba(22, 163, 74, 0);
            --tw-gradient-stops: var(--tw-gradient-from), #059669;
            color: #ffffff !important;
          }
          html.light-mode a.to-emerald-600,
          html.light-mode a.to-emerald-700 {
            --tw-gradient-to: #059669;
          }

          /* Light mode: form submit button */
          html.light-mode button.bg-gradient-to-r.from-blue-600 {
            color: #ffffff !important;
          }
          html.light-mode button.bg-gradient-to-r:disabled {
            background: linear-gradient(to right, #94a3b8, #64748b);
            color: #ffffff !important;
          }

          /* Light mode: Video button (white bg) – ensure contrast */
          html.light-mode a.bg-white.rounded-lg {
            background-color: #f8fafc;
            border: 1px solid #e2e8f0;
            color: #1e293b;
          }
          html.light-mode a.bg-white.rounded-lg:hover {
            background-color: #f1f5f9;
            border-color: #cbd5e1;
          }

          /* Light mode: small badges (e.g. category, certificate count) */
          html.light-mode .bg-blue-500\\/20.border-blue-500\\/30 {
            background-color: rgba(37, 99, 235, 0.12);
            border-color: rgba(37, 99, 235, 0.4);
            color: #1d4ed8;
          }

          /* Light mode: icon boxes (gradient circles) keep white icon */
          html.light-mode .bg-gradient-to-br.from-blue-500 .text-white,
          html.light-mode .bg-gradient-to-br.from-blue-500 svg,
          html.light-mode .bg-gradient-to-br.from-red-600 .text-white {
            color: #ffffff !important;
          }

          /* Light mode: theme toggle button in nav */
          html.light-mode button.rounded-full.bg-gradient-to-r {
            color: #ffffff !important;
          }

          /* Light mode: social links hover */
          html.light-mode .group.hover\:-translate-y-3:hover .text-slate-300 {
            color: #1e293b;
          }
          html.light-mode .group.hover\:scale-125:hover .text-slate-300 {
            color: #0f172a;
          }

          /* Light mode: brighter profile photos */
          html.light-mode img.profile-pic {
            filter: brightness(1.35) contrast(1.08);
          }

          /* Status message styles */
        `}</style>

        {/* Navigation */}
        <nav className="fixed w-full glass-effect shadow-2xl z-50 border-b border-blue-500/20 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img
                src="https://res.cloudinary.com/dgib19szk/image/upload/v1767781842/WhatsApp_Image_2025-12-19_at_6.26.39_PM_sqhrst.jpg"
                alt="Prashant Parmar logo"
                className="profile-pic w-10 h-10 rounded-full border-2 border-blue-500 object-cover"
              />
              <h1 className="text-2xl font-black">
                <span className="gradient-text">PP</span>
              </h1>
            </div>

            <div className="hidden md:flex gap-10 items-center">
              {['About', 'Projects', 'Certificates', 'Skills', 'Education', 'Contact'].map((item, idx) => (
                <a
                  key={idx}
                  href={`#${item.toLowerCase()}`}
                  className="text-slate-300 hover:text-blue-400 font-semibold transition-all duration-300 relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
              
              {/* Theme Toggle Button */}
              <button
                onClick={() => {
                  setIsDark(!isDark);
                  document.documentElement.classList.toggle('light-mode');
                }}
                className="p-2.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 flex items-center justify-center"
                title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 hover:bg-slate-800/50 rounded-lg transition-all"
            >
              {menuOpen ? <X size={24} className="text-blue-400" /> : <Menu size={24} className="text-blue-400" />}
            </button>
          </div>

          {menuOpen && (
            <div className="md:hidden fixed inset-0 z-50 min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black animate-slide-in-down flex flex-col">
              <div className="flex justify-end p-6">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-slate-800/50 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={28} className="text-blue-400" />
                </button>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center gap-8 px-6">
                {['About', 'Projects', 'Certificates', 'Skills', 'Education', 'Contact'].map((item, idx) => (
                  <a
                    key={idx}
                    href={`#${item.toLowerCase()}`}
                    className="text-xl text-slate-300 font-semibold hover:text-blue-400 transition-colors py-2"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section className="min-h-screen pt-28 sm:pt-32 md:pt-24 lg:pt-20 pb-12 md:pb-0 max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 md:gap-14 lg:gap-20 items-center justify-items-center relative overflow-hidden">
          <div className="absolute top-0 right-1/3 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

          <div className="space-y-8 md:space-y-10 relative z-10 h-full flex flex-col justify-center">
            <div className="space-y-5 sm:space-y-6 animate-slide-in-left">
              <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tighter animate-slide-up-bounce animation-delay-200">
                Hi, I'm
                <br />
                <span className="gradient-text animate-text-glow">Prashant</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-lg animate-fade-in-up animation-delay-300">
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
                <a href="#" className="px-8 py-4 rounded-full font-bold border-2 border-slate-600 text-slate-300 hover:border-blue-500 hover:text-blue-400 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 animate-slide-up-bounce animation-delay-600">
                  <Download size={18} /> Resume
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center items-center relative z-10 animate-slide-in-right h-full min-h-[280px] sm:min-h-0">
            <div className="relative animate-float">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-blue-500/50 shadow-2xl animate-glow hover:animate-pulse-scale">
                <img
                  src="https://res.cloudinary.com/dgib19szk/image/upload/v1767781842/WhatsApp_Image_2025-12-19_at_6.26.39_PM_sqhrst.jpg"
                  alt="Prashant Parmar profile"
                  className="profile-pic w-full h-full object-cover hover:scale-110 transition-transform duration-500 brightness-110 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-96 h-40 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-3xl opacity-30 animate-blob"></div>
            </div>
          </div>
        </section>

        {/* About Section */}
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

        {/* Projects Section */}
        <section id="projects" className="py-10 sm:py-12 md:py-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-1000"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-12 md:mb-20 scroll-animate-up">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 md:mb-6 tracking-tight gradient-text section-heading">
                Featured Projects
              </h2>
              <p className="text-xl text-slate-300 scroll-animate-up" style={{ animationDelay: '0.2s' }}>Showcase of my best work and accomplishments</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {projects.slice(0, projectsToShow).map((project, idx) => (
                <div
                  key={idx}
                  className="card-hover group glass-effect rounded-2xl overflow-hidden border border-blue-500/20 hover:border-blue-500/50 relative scroll-animate-up animate-fade-scale"
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="relative h-48 bg-gradient-to-br from-blue-600 to-purple-600 overflow-hidden group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

                    {/* YouTube Play Button on Hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <a
                        href={project.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-16 h-16 bg-gradient-to-br from-red-600 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-2xl hover:shadow-purple-600/50 transform hover:scale-125 transition-all duration-300 animate-bounce-in border-2 border-white/20"
                      >
                        <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube Play" className="w-8 h-8 drop-shadow-md" />
                      </a>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 mb-4">
                      {project.category}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-slate-300 text-sm mb-4 line-clamp-2">
                      {project.desc}
                    </p>

                    <div className="flex gap-2 flex-wrap mb-6">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="bg-slate-800/50 text-slate-300 px-2 py-1 rounded text-xs font-bold">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3 items-center pt-4 border-t border-blue-500/20">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 rounded-lg font-bold text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center gap-2 group/live relative overflow-hidden hover:shadow-lg hover:shadow-green-500/50 hover:scale-105 hover:-translate-y-1"
                      >
                        <ExternalLink size={16} />
                        <span>Live</span>
                      </a>

                      {project.github && project.github !== '#' ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-4 py-2 rounded-lg font-bold text-white bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 transition-all duration-300 flex items-center justify-center gap-2 group/github relative overflow-hidden hover:shadow-lg hover:shadow-slate-500/50 hover:scale-105 hover:-translate-y-1"
                        >
                          <Github size={16} />
                          <span>GitHub</span>
                        </a>
                      ) : (
                        <span
                          className="flex-1 px-4 py-2 rounded-lg font-bold text-white bg-slate-700/80 text-slate-400 cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 opacity-80"
                          title="Repo not linked — add github URL in App.jsx projects array"
                        >
                          <Github size={16} />
                          <span>GitHub</span>
                        </span>
                      )}

                      <a
                        href={project.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg font-bold bg-white hover:bg-slate-50 transition-all duration-300 flex items-center justify-center gap-2 group/youtube relative overflow-hidden hover:shadow-lg hover:shadow-red-500/60 hover:scale-105 hover:-translate-y-1"
                      >
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
                          alt="YouTube"
                          className="w-4 h-4"
                        />
                        <span className="relative z-10 hidden sm:inline bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">Video</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-16 flex justify-center gap-4">
              {projectsToShow > 3 && (
                <button
                  onClick={() => setProjectsToShow(Math.max(3, projectsToShow - 3))}
                  className="px-8 py-4 rounded-full font-bold border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
                >
                  <ChevronLeft size={18} />
                  Show Less
                </button>
              )}
              {projectsToShow < projects.length && (
                <button
                  onClick={() => {
                    setProjectsToShow(projectsToShow + 3);
                    setTimeout(() => {
                      document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="px-8 py-4 rounded-full font-bold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50 inline-flex items-center gap-2"
                >
                  Show More Projects
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Certificates Section */}
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

        {/* Education Section */}
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

        {/* Contact Section */}
        <section id="contact" className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
            {/* Section Header */}
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

            {/* Main Contact Container */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Contact Info Cards */}
              <div className="md:col-span-1 space-y-6">
                {/* Email Card */}
                <div className="glass-effect rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/50 transition-all scroll-animate-left group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Email</h3>
                  <a href="mailto:prashantparmar9919@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors text-sm break-all">
                    prashantparmar9919@gmail.com
                  </a>
                </div>

                {/* Location Card */}
                <div className="glass-effect rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/50 transition-all scroll-animate-left group" style={{ animationDelay: '0.1s' }}>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Location</h3>
                  <p className="text-slate-300 text-sm">Kadi, Gujarat, India</p>
                </div>

                {/* Response Time Card */}
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

              {/* Contact Form */}
              <div className="md:col-span-2">
                <div className="glass-effect rounded-3xl p-8 md:p-10 border border-blue-500/30 scroll-animate-right">
                  {formStatus && (
                    <div className={`form-status ${formStatus.includes('✓') ? 'success' : 'error'} mb-8`}>
                      {formStatus}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
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

                    {/* Email Field */}
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

                    {/* Message Field */}
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

                    {/* Submit Button */}
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

            {/* Additional Contact Methods */}
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
                  { Icon: Twitter, link: 'https://x.com/prashantparmxr', label: 'Twitter', color: 'from-cyan-500 to-blue-500' }
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    title={social.label}
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

        {/* Footer */}
        <footer className="border-t border-blue-500/20 py-6 sm:py-8 text-center relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <p className="text-slate-400 font-semibold">
              <span className="text-blue-400">© 2025</span> Prashant Parmar. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}