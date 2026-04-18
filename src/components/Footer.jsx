import React from 'react';

import { Github, Linkedin, Twitter, Youtube, Code2 } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { Icon: Github, link: 'https://github.com/Parmarprashant', label: 'GitHub' },
    { Icon: Linkedin, link: 'https://www.linkedin.com/in/prashant-parmar-0700373a1/', label: 'LinkedIn' },
    { Icon: Twitter, link: 'https://x.com/prashantparmxr', label: 'Twitter' },
    { Icon: Code2, link: 'https://leetcode.com/u/parmarprashant/', label: 'LeetCode' },
    { Icon: Youtube, link: 'https://www.youtube.com/@prashantparmar9919', label: 'YouTube' }
  ];

  return (
    <footer className="border-t border-blue-500/20 py-8 sm:py-12 text-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex justify-center gap-6 mb-8">
          {socialLinks.map((social, idx) => (
            <a
              key={idx}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125"
              title={social.label}
            >
              <social.Icon size={24} />
            </a>
          ))}
        </div>
        <p className="text-slate-400 font-semibold mb-2">
          Built with <span className="text-blue-400">React</span> & <span className="text-purple-400">Tailwind</span>
        </p>
        <p className="text-slate-500 text-sm">
          <span className="text-blue-400">© 2025</span> Prashant Parmar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
