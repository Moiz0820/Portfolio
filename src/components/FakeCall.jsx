import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  PiCalendarDuotone as Calendar, 
  PiClockDuotone as Clock, 
  PiVideoCameraDuotone as Video, 
  PiXDuotone as X, 
  PiArrowRightDuotone as ArrowRight, 
  PiCheckCircleDuotone as CheckCircle2 
} from 'react-icons/pi';

export const FakeCall = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isDismissed || showDialog) return;
      
      const scrollPosition = window.innerHeight + window.scrollY;
      const bodyHeight = document.documentElement.offsetHeight;
      
      if (scrollPosition >= bodyHeight - 1000) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed, showDialog]);

  const handleDecline = () => {
    setIsVisible(false);
    setIsDismissed(true);
  };

  const handleAccept = () => {
    setIsVisible(false);
    setShowDialog(true);
    setIsDismissed(true);
  };

  const closeDialog = () => {
    setShowDialog(false);
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && !showDialog && (
          <motion.div
            initial={{ y: 20, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.95, filter: "blur(4px)" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-4 left-4 right-4 md:left-auto md:bottom-10 md:right-10 z-[100] w-auto md:w-[380px]"
          >
            {/* macOS Calendar / Cron Style Notification */}
            <div className="glassmorphism rounded-3xl p-5 shadow-[0_20px_40px_rgba(0,0,0,0.4)] border border-white/10 bg-[#121212]/95 backdrop-blur-3xl relative overflow-hidden group">
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-500/0 via-brand-500 to-brand-500/0 opacity-50" />
              
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                   <div className="absolute top-0 w-full h-[14px] bg-brand-500/20" />
                   <span className="text-xl font-bold text-brand-500 mt-2">12</span>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold tracking-wider uppercase text-brand-500">Meeting Request</span>
                    <span className="text-[10px] text-white/40">Just now</span>
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight leading-tight">Explore Synergies with Moiz</h3>
                  <div className="flex items-center gap-2 mt-2 text-white/50 text-xs">
                     <Clock className="w-3.5 h-3.5" />
                     <span>15 min Video Call</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button 
                  onClick={handleDecline}
                  className="flex-1 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-white/70 text-sm font-medium transition-colors"
                >
                  Dismiss
                </button>
                
                <button 
                  onClick={handleAccept}
                  className="flex-1 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-400 text-black text-sm font-bold transition-all shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:shadow-[0_0_25px_rgba(251,191,36,0.5)] flex items-center justify-center gap-2"
                >
                  Schedule 
                  <Video className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showDialog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="glassmorphism w-full max-w-lg rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 relative border border-white/10 bg-[#0A0A0A] shadow-2xl"
            >
              <button 
                onClick={closeDialog}
                className="absolute top-6 right-6 p-2 text-white/30 hover:text-white transition-colors bg-white/5 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="flex items-center gap-5 mb-8">
                <div className="w-14 h-14 rounded-full bg-brand-500/10 flex items-center justify-center border border-brand-500/20">
                  <Calendar className="w-6 h-6 text-brand-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">Let's Connect</h3>
                  <p className="text-white/40 text-sm mt-1">Available for Opportunities</p>
                </div>
              </div>
              
              <div className="space-y-5 text-white/70 leading-relaxed font-light text-base bg-white/5 border border-white/5 rounded-3xl p-6">
                <p>Hello!</p>
                <p>Thank you for stopping by my portfolio. I am currently open to new opportunities and excited to tackle fresh challenges.</p>
                <p>Whether you're looking for someone to optimize complex data workflows, lead impact-driven projects, or augment your analytics capabilities—I'd love to jump on a brief call.</p>
                
                <div className="mt-8 flex flex-col md:flex-row items-center gap-4 bg-black/40 rounded-2xl p-4 border border-white/5">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5">
                     <CheckCircle2 className="w-5 h-5 text-brand-500" />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <span className="block text-[10px] uppercase tracking-widest text-white/40 mb-1">Direct Contact</span>
                    <a 
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=moiz0507@gmail.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-lg font-medium text-white hover:text-brand-500 transition-colors"
                    >
                      moiz0507@gmail.com
                    </a>
                  </div>
                  <a 
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=moiz0507@gmail.com"
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black font-semibold hover:bg-white/90 transition-all text-sm"
                  >
                    Email Me <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
              
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
