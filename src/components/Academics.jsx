import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PiGraduationCapDuotone as GraduationCap, PiCertificateDuotone as Award } from 'react-icons/pi';
import { cn } from '../lib/utils';

const academics = [
  { grade: 'Undergraduate (B.Tech CSE)', school: 'Bennett University', score: 'CGPA: 9', color: 'bg-brand-500/20 text-brand-500 border-brand-500/30' },
  { grade: '12th Grade', school: 'Grace Ling Liang Senior Secondary School', score: '89%', color: 'bg-brand-500/20 text-brand-500 border-brand-500/30' },
  { grade: '10th Grade', school: 'Grace Ling Liang High School', score: '86%', color: 'bg-brand-500/20 text-brand-500 border-brand-500/30' }
];

export const Academics = () => {
  const [revealed, setRevealed] = useState({});

  const toggleReveal = (idx) => {
    setRevealed(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <section id="academics" className="py-24 max-w-5xl mx-auto px-4 md:px-8">
      <div className="mb-12 flex items-center gap-4">
        <GraduationCap className="w-8 h-8 text-brand-500 animate-pulse" />
        <h2 className="text-3xl md:text-5xl font-bold">Academics</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {academics.map((item, idx) => {
          const isRevealed = !!revealed[idx];
          return (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              onClick={() => toggleReveal(idx)}
              className={cn("group glassmorphism rounded-3xl border cursor-pointer relative overflow-hidden", item.color)}
            >
              {/* Ambient Background Glow when hidden */}
              <div className="absolute inset-0 bg-white/5 group-hover:bg-transparent transition-colors duration-500 z-0" />
              
              {/* Crystal clear title, blurred content */}
              <div className="relative z-10 px-8 pt-8 pb-4 h-full flex flex-col justify-between">
                <h3 className="text-xl font-bold mb-2 text-white z-20">{item.grade}</h3>
                
                {/* Floating Reveal Indicator */}
                <div className={cn(
                  "absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300 z-30 pt-10",
                  isRevealed ? "opacity-0" : "opacity-100 md:group-hover:opacity-0"
                )}>
                  <span className="text-brand-500/80 uppercase tracking-widest text-xs font-semibold bg-dark-bg/60 backdrop-blur-sm px-4 py-1.5 rounded-full border border-brand-500/20">
                    Reveal Grade
                  </span>
                </div>

                <div className={cn(
                  "flex flex-col justify-end flex-grow transition-all duration-[600ms] ease-out pt-4",
                  isRevealed ? "blur-none opacity-100 scale-100" : "blur-xl opacity-20 scale-95 md:group-hover:scale-100 md:group-hover:blur-none md:group-hover:opacity-100"
                )}>
                  <p className="text-sm opacity-80 mb-6 font-light shadow-black/50">{item.school}</p>
                  <span className="text-4xl font-light tracking-tighter text-brand-500 opacity-90 drop-shadow-md">{item.score}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
