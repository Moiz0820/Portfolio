import React from 'react';
import { motion } from 'framer-motion';
import { ParticleNetwork } from './ParticleNetwork';

export const Hero = () => {
  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-dark-bg">
      {/* Interactive Particle Constellation */}
      <ParticleNetwork />

      {/* Overlay Gradient for focus */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-dark-bg/80 to-dark-bg pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto flex flex-col items-center">
        <motion.a
          href="/CV.pdf"
          download="Moiz_Anwar_CV.pdf"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full border border-brand-500/30 bg-brand-500/10 hover:bg-brand-500/20 hover:scale-105 backdrop-blur-md transition-all cursor-pointer group shadow-[0_0_15px_rgba(251,191,36,0.15)]"
        >
          <svg className="w-4 h-4 text-brand-500 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-400">
            Download CV
          </span>
        </motion.a>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-4xl md:text-7xl font-bold tracking-tight text-white mb-6 font-display"
        >
          Moiz <span className="text-brand-500">Anwar</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-2xl text-white/90 font-medium mb-4"
        >
          Business Data & Finance Analyst
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-sm md:text-base text-gray-400 font-light leading-relaxed max-w-2xl px-4"
        >
          Specializing in AI-driven solutions, high-scale data migration, and comprehensive financial reporting.
          I combine technical rigor with business acumen to streamline reporting, identify cost-saving workflows, and solve complex data challenges.
        </motion.p>
      </div>
    </section>
  );
};
