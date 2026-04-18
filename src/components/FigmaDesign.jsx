import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Maximize2 } from 'lucide-react';

const figmaDesigns = [
  {
    id: 1,
    title: "EduFusion – Learning Management Dashboard",
    description: "Designed a modern learning management dashboard focused on clarity and usability for both instructors and students. The interface includes assignment tracking, student performance insights, badge achievements, and integrated coding platforms. Emphasis was placed on structured layouts, visual hierarchy, and quick navigation to help users monitor progress efficiently. The design balances data density with readability, ensuring a smooth academic workflow experience.",
    image: "https://res.cloudinary.com/dgib19szk/image/upload/v1776449606/Screenshot_2026-04-17_164448_r4fau2.png",
  },
  {
    id: 2,
    title: "Urban Veins – Hotel Booking Experience",
    description: "Created a seamless hotel booking interface that guides users from search to room selection with minimal friction. The design highlights key information such as pricing, ratings, and amenities while maintaining a clean and visually engaging layout. A strong focus was placed on user flow—search → results → room details → checkout—to ensure intuitive navigation and decision-making.",
    image: "https://res.cloudinary.com/dgib19szk/image/upload/v1776449612/Screenshot_2026-04-17_164658_wgyr3b.png",
  },
  {
    id: 3,
    title: "AuraStream – OTT Streaming Platform UI",
    description: "Designed a responsive OTT streaming platform interface optimized for both desktop and mobile devices. The layout showcases featured content, categorized browsing, and personalized recommendations, along with detailed movie pages and promotional sections. Special attention was given to content discoverability, visual engagement, and cross-device consistency. The design aims to deliver an immersive and user-friendly entertainment experience.",
    image: "https://res.cloudinary.com/dgib19szk/image/upload/v1776449608/Screenshot_2026-04-17_164732_lxl9k4.png",
  },
  {
    id: 4,
    title: "SplitFlow – Expense Splitting Mobile App",
    description: "Designed a user-friendly mobile application to simplify group expense management and bill splitting. The app allows users to create or join groups, track shared expenses, monitor balances, and settle payments seamlessly. Key features include expense categorization, real-time balance updates, activity tracking, and payment intent visualization. The design focuses on clarity, minimal cognitive load, and smooth navigation across multiple user flows—from onboarding and authentication to expense entry and settlement.",
    image: "https://res.cloudinary.com/dgib19szk/image/upload/v1776450448/Screenshot_2026-04-17_235700_dxnxj0.png",
  }
];

const FigmaDesign = () => {
  const [selectedDesign, setSelectedDesign] = useState(null);

  return (
    <section id="figma-design" className="min-h-screen flex items-center py-20 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600 rounded-full mix-blend-screen filter blur-[120px] opacity-30 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600 rounded-full mix-blend-screen filter blur-[120px] opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-[1600px] mx-auto w-full px-4 sm:px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6 md:mb-8 tracking-tight section-heading">
            <span className="heading-primary">Figma </span>
            <span className="heading-secondary">Design</span>
          </h2>
          <p className="text-2xl text-description max-w-3xl mx-auto">
            A showcase of creative UI/UX designs, wireframes, and high-fidelity prototypes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-12">
          {figmaDesigns.map((design, idx) => (
            <motion.div
              key={design.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group glass-effect rounded-3xl overflow-hidden border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedDesign(design)}
            >
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={design.image}
                  alt={design.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30 transform scale-0 group-hover:scale-100 transition-transform duration-500">
                    <Maximize2 className="text-white w-10 h-10" />
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white [[class*='light-mode']_&]:text-slate-900 mb-4 group-hover:text-blue-400 transition-colors">
                  {design.title}
                </h3>
                <p className="text-slate-300 [[class*='light-mode']_&]:text-slate-600 text-lg line-clamp-3 leading-relaxed">
                  {design.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedDesign && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
            onClick={() => setSelectedDesign(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative max-w-6xl w-full bg-[#0a101e]/90 rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-6 right-6 z-10 text-white/50 hover:text-white [[class*='light-mode']_&]:text-slate-400 [[class*='light-mode']_&]:hover:text-slate-900 transition-colors bg-white/10 [[class*='light-mode']_&]:bg-slate-100 [[class*='light-mode']_&]:hover:bg-slate-200 p-2 rounded-full backdrop-blur-md"
                onClick={() => setSelectedDesign(null)}
              >
                <X size={24} />
              </button>
              
              <div className="flex flex-col lg:flex-row max-h-[90vh]">
                <div className="lg:w-2/3 bg-black/50 flex items-center justify-center p-4">
                  <img
                    src={selectedDesign.image}
                    alt={selectedDesign.title}
                    className="max-w-full max-h-[70vh] object-contain rounded-lg"
                  />
                </div>
                
                <div className="lg:w-1/3 p-8 md:p-12 overflow-y-auto bg-gradient-to-b from-slate-900 to-black [[class*='light-mode']_&]:from-slate-50 [[class*='light-mode']_&]:to-white">
                  <div className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6 border border-blue-500/30">
                    UI/UX Design
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-white [[class*='light-mode']_&]:text-slate-900 mb-6 gradient-text">
                    {selectedDesign.title}
                  </h3>
                  <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8"></div>
                  <p className="text-slate-300 [[class*='light-mode']_&]:text-slate-600 text-lg leading-relaxed mb-8">
                    {selectedDesign.description}
                  </p>
                  
                  <div className="space-y-6 pt-8 border-t border-white/10 [[class*='light-mode']_&]:border-slate-200">
                    <div>
                      <h4 className="text-white [[class*='light-mode']_&]:text-slate-900 font-bold mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                        Design Tools
                      </h4>
                      <p className="text-slate-400 [[class*='light-mode']_&]:text-slate-500">Figma, Adobe Illustrator</p>
                    </div>
                    <div>
                      <h4 className="text-white [[class*='light-mode']_&]:text-slate-900 font-bold mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                        Platform
                      </h4>
                      <p className="text-slate-400 [[class*='light-mode']_&]:text-slate-500">Desktop & Mobile Responsive</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FigmaDesign;
