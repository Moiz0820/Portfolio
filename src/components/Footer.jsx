import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaMedium } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer id="contact" className="py-24 px-4 w-full flex flex-col justify-center items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-500/5 z-0" />
      <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent z-0" />
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl text-center relative z-10"
      >
        <blockquote className="text-lg md:text-xl font-light text-white/50 leading-snug">
          "A jack of all trades is a master of none, <br className="hidden md:block"/>
          <span className="text-white/70 font-medium">
            but oftentimes better than a master of one.
          </span>"
        </blockquote>
        <div className="mt-12 flex items-center justify-center gap-6">
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=moiz0507@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white/50 hover:text-brand-500 transition-colors p-3 bg-white/5 hover:bg-brand-500/10 rounded-full border border-white/5 hover:border-brand-500/30"
          >
            <FaEnvelope className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/moiz-anwar-5a01561b9/" target="_blank" rel="noreferrer" className="text-white/50 hover:text-brand-500 transition-colors p-3 bg-white/5 hover:bg-brand-500/10 rounded-full border border-white/5 hover:border-brand-500/30">
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a href="https://github.com/Moiz0820" target="_blank" rel="noreferrer" className="text-white/50 hover:text-brand-500 transition-colors p-3 bg-white/5 hover:bg-brand-500/10 rounded-full border border-white/5 hover:border-brand-500/30">
            <FaGithub className="w-5 h-5" />
          </a>
          <a href="https://moiz0507.medium.com" target="_blank" rel="noreferrer" className="text-white/50 hover:text-brand-500 transition-colors p-3 bg-white/5 hover:bg-brand-500/10 rounded-full border border-white/5 hover:border-brand-500/30">
            <FaMedium className="w-5 h-5" />
          </a>
        </div>
        <p className="mt-16 text-xs text-white/30 uppercase tracking-widest">© {new Date().getFullYear()} Moiz Anwar. All Rights Reserved.</p>
      </motion.div>
    </footer>
  );
};
