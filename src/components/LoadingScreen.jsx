import React from 'react';

const LoadingScreen = () => {
  return (
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
  );
};

export default LoadingScreen;
