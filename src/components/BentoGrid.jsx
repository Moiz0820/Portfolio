import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  PiCodeDuotone as Code2, 
  PiHardDrivesDuotone as Server, 
  PiDatabaseDuotone as Database, 
  PiChartLineUpDuotone as LineChart, 
  PiBrainDuotone as BrainCircuit, 
  PiPulseDuotone as Activity, 
  PiHeartDuotone as Heart, 
  PiArrowUpRightDuotone as ArrowUpRight, 
  PiListChecksDuotone as ListChecks,
  PiWrenchDuotone as Wrench
} from 'react-icons/pi';
import { cn } from '../lib/utils';

const projects = [
  {
    title: 'Financial Intelligence Platform',
    desc: 'Engineered a custom Financial Intelligence Platform automating real-time revenue, ROI, and comprehensive project profitability.',
    details: [
      'Engineered a custom Financial Intelligence Platform using Python, JavaScript, HTML, and CSS to automate the calculation of real-time revenue, ROI, and comprehensive project profitability.',
      'Architected an end-to-end financial forecasting engine that utilizes historical data to predict project performance, resulting in a 70% reduction in manual workload for both management and the analytics team.',
      'Streamlined executive decision-making by consolidating complex financial workstreams into a centralized dashboard, replacing legacy manual reporting with automated, high-fidelity forecasting models.'
    ],
    icon: LineChart,
    colSpan: 'md:col-span-2'
  },
  {
    title: 'IntervAI',
    desc: 'AI-driven recruitment tool using OpenAI matching realistic interview environments.',
    details: [
      'Developed a real-time speech-to-text pipeline using OpenAI Whisper and GPT-4 to generate customized, dynamic follow-up questions during mock interviews.',
      'Built an interactive client dashboard with React and WebRTC to record, stream, and evaluate candidate performance metrics (sentiment, vocabulary, and response time).',
      'Designed an automated assessment generator that matches resume keyword profiles with industry standards, reducing candidate screening latency by 45%.'
    ],
    icon: BrainCircuit,
    colSpan: 'md:col-span-1'
  },
  {
    title: 'Mask Detection',
    desc: 'Facial detection with OpenCV, Matplot, and Python.',
    details: [
      'Trained a convolutional neural network (CNN) on over 10,000 face images with and without masks, achieving a 94.6% verification accuracy rate.',
      'Leveraged OpenCV\'s Haar cascades and Single Shot MultiBox Detector (SSD) to implement high-speed real-time detection on resource-constrained video feeds.',
      'Integrated a notification trigger system using Matplotlib for visual validation, sending automated alerts to security systems when mask violations occur.'
    ],
    icon: Code2,
    colSpan: 'md:col-span-1'
  },
  {
    title: 'RiNAZ',
    desc: 'Raspberry Pi NAS online network storage platform for automated file sorting.',
    details: [
      'Configured a Raspberry Pi 4 Model B with a custom Linux server to host a Samba-based Network Attached Storage (NAS) accessible across local networks.',
      'Wrote automated Bash and Python cron jobs to scan target directories, extract file metadata, and dynamically organize files into categorized storage paths.',
      'Optimized read/write throughput by 30% through custom cache configurations, disk striping, and hardware monitoring scripts.'
    ],
    icon: Server,
    colSpan: 'md:col-span-1'
  },
  {
    title: 'Counterfeit Images',
    desc: 'Research on detection capabilities using ML and forensics.',
    details: [
      'Conducted comprehensive digital image forensic research to identify localized pixel inconsistencies, color filter array (CFA) interpolation anomalies, and compression traces.',
      'Trained custom autoencoders and ResNet models to distinguish between authentic images and AI-generated (GAN/diffusion-based) synthetic media, yielding a 91% F1 score.',
      'Published structural analysis and detection pipeline benchmarks for image tampering detection in academic domains.'
    ],
    icon: Database,
    colSpan: 'md:col-span-1'
  }
];

const tech = ['PowerBI', 'Python', 'n8n', 'Tableau', 'R Studio', 'SQL', 'HTML', 'CSS', 'JavaScript'];
const skills = ['Data Analysis', 'Financial Reporting', 'Strategic Decisions', 'Automation', 'AI/ML', 'Research Analysis', 'UI/UX', 'Project Management'];
const hobbies = ['Writing', 'Drawing', 'Swimming', 'Fitness & Workouts', 'Trekking', 'Xenophile', 'Reading'];

export const BentoGrid = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 max-w-5xl mx-auto px-4 md:px-8">
      <div className="mb-12 flex items-center gap-4">
        <Wrench className="w-8 h-8 text-brand-500 animate-pulse" />
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-1 font-display">Craft & Core</h2>
          <p className="text-white/60 text-base font-light font-sans">Featured projects and the tools I use to build them.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* Skills & Attributes Column (Left Side) */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          {/* Tech Arsenal */}
          <motion.div
            whileHover={{ y: -2 }}
            className="glassmorphism p-6 rounded-3xl flex flex-col group"
          >
            <div className="flex items-center gap-3 mb-4">
              <Code2 className="w-5 h-5 text-brand-500 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold font-display">Tech</h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {tech.map(t => (
                <span key={t} className="px-2 py-1 rounded-md text-[11px] font-medium tracking-wide uppercase text-white/70 border border-brand-500/10 hover:border-brand-500/50 cursor-default transition-colors font-sans">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Core Skills */}
          <motion.div
            whileHover={{ y: -2 }}
            className="glassmorphism p-6 rounded-3xl flex flex-col group bg-white/5"
          >
            <div className="flex items-center gap-3 mb-4">
              <ListChecks className="w-5 h-5 text-brand-500 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold text-white/90 font-display">Skills</h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {skills.map(s => (
                <span key={s} className="px-2 py-1 rounded-md text-[11px] font-medium tracking-wide uppercase text-white/70 border border-brand-500/10 hover:border-brand-500/50 cursor-default transition-colors font-sans">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Hobbies */}
          <motion.div
            whileHover={{ y: -2 }}
            className="glassmorphism p-6 rounded-3xl flex flex-col group h-full bg-white/5"
          >
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-5 h-5 text-rose-500 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold text-white/90 font-display">Interests</h3>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-auto">
              {hobbies.map(hobby => (
                <span key={hobby} className="px-2 py-1 rounded-md text-[11px] font-medium tracking-wide uppercase text-white/70 border border-brand-500/10 hover:border-brand-500/50 cursor-default transition-colors font-sans">
                  {hobby}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Projects Bento Boxes (Right Side) */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((proj, idx) => {
            const Icon = proj.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedProject(proj)}
                className={cn(
                  "glassmorphism p-8 rounded-3xl group cursor-pointer transition-all hover:border-brand-500/30 flex flex-col",
                  proj.colSpan
                )}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white/5 rounded-xl group-hover:bg-brand-500/20 transition-colors">
                    <Icon className="w-6 h-6 text-white group-hover:text-brand-400" />
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-white/20 group-hover:text-brand-500 transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white font-display mt-auto">{proj.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed font-light group-hover:text-white/80 transition-colors font-sans">
                  {proj.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            proj={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

function ProjectModal({ proj, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const Icon = proj.icon;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
        onClick={onClose}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-zinc-900/90 backdrop-blur-2xl border border-white/20 rounded-[40px] p-8 md:p-10 shadow-2xl flex flex-col"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white/50 hover:text-brand-500 transition-colors p-2 bg-white/5 hover:bg-white/10 rounded-full"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <span className="text-brand-500 font-semibold tracking-widest uppercase text-xs md:text-sm mb-3 block font-sans">Project Exploration</span>
        <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-8 font-display">{proj.title}</h3>

        <div className="h-[1px] w-full bg-gradient-to-r from-brand-500/50 via-white/10 to-transparent mb-8" />

        <div className="text-white/70 leading-relaxed text-base md:text-lg space-y-6 font-sans">
          {proj.details ? (
            <div className="bg-white/5 border border-white/10 p-6 rounded-3xl">
              <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                <Icon className="w-5 h-5 text-brand-500" />
                Project Architecture & Results
              </h4>
              <ul className="list-none space-y-3">
                {proj.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-brand-500 mt-1.5 text-xs">●</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="opacity-60 italic text-center py-10">Detailed overview content pending generation...</p>
          )}
        </div>
      </motion.div>
    </div>
  );
}
