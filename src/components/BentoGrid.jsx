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
  PiWrenchDuotone as Wrench,
  PiArrowSquareOutDuotone as ExternalLink,
  PiGithubLogoDuotone as Github
} from 'react-icons/pi';
import { cn } from '../lib/utils';

const projects = [
  {
    title: 'FinPulse — FX & Macro Terminal',
    desc: 'Institutional-grade foreign exchange terminal with real-time ECB feeds, GCC peg anchor, and drift simulation.',
    details: [
      'Architected a real-time currency intelligence terminal consuming live European Central Bank (ECB) reference rates across 30+ world reserve currencies.',
      'Engineered an interactive quantitative time-series engine with 7-day Simple Moving Average (SMA-7), volatility dispersion metrics (σ), and day-over-day delta momentum tracking.',
      'Integrated a procurement timing drift simulator and synthetic central bank peg engine for UAE Dirham (AED), calculating foreign exchange risk for cross-border investments.',
      'Implemented 1-click tabular dataset export to CSV for seamless integration with Power BI, Excel, and Python analytics pipelines.'
    ],
    icon: Activity,
    colSpan: 'md:col-span-2',
    liveUrl: 'https://moiz0820.github.io/FinPulse/',
    githubUrl: 'https://github.com/Moiz0820/FinPulse'
  },
  {
    title: 'UrbanMetric — Geospatial Infrastructure Engine',
    desc: 'Commercial real estate spatial density, multimodal transit accessibility, and 5-dimension catchment scoring.',
    details: [
      'Engineered a high-density spatial analytics engine calculating pedestrian transit catchment radiuses (500m-2000m) and distance decay impedance models.',
      'Integrated zero-auth Esri World Dark Gray Canvas and OpenStreetMap GIS raster tile layers with building-level satellite inspection.',
      'Formulated a 5-dimension radar equilibrium scoring engine evaluating transit mobility, commercial hubs, retail amenities, lifestyle, and essential services.',
      'Implemented dynamic radial POI generation on map clicks with 1-click CSV spatial inventory dataset export.'
    ],
    icon: LineChart,
    colSpan: 'md:col-span-2',
    liveUrl: 'https://moiz0820.github.io/UrbanMetric/',
    githubUrl: 'https://github.com/Moiz0820/UrbanMetric'
  },
  {
    title: 'MacroDivergence — World Bank Econometric Engine',
    desc: 'Closed-form Ordinary Least Squares (OLS) bivariate regression and longitudinal cross-country economic divergence.',
    details: [
      'Built a split-pane econometric research terminal consuming live World Bank Open Data API v2 across emerging and advanced trading economies.',
      'Formulated closed-form OLS mathematical regression algorithms computing slope (β₁), intercept (β₀), Pearson correlation (r), and goodness-of-fit (R²).',
      'Developed an empirical residual decomposition model highlighting structural economic outperformance (eᵢ = Yᵢ - Ŷᵢ) with dynamic sample cohort filtering.',
      'Engineered longitudinal multi-country time series trajectories (2019-2024) with 1-click harmonized empirical CSV dataset export.'
    ],
    icon: Database,
    colSpan: 'md:col-span-1',
    liveUrl: 'https://moiz0820.github.io/MacroDivergence/',
    githubUrl: 'https://github.com/Moiz0820/MacroDivergence'
  },
  {
    title: 'AirPulse — Atmospheric Telemetry Engine',
    desc: 'High-frequency particulate dispersion (PM2.5/PM10) and WHO 2021 air quality compliance across 8 global megacities.',
    details: [
      'Engineered a 3-column industrial mission control flight deck consuming live European ECMWF / CAMS atmospheric telemetry via Open-Meteo.',
      'Developed synchronized multi-station polling monitoring 6 criteria pollutants (PM2.5, PM10, NO2, O3, CO, SO2) with live WHO guideline cap breach alerts.',
      'Modeled 24-hour diurnal sinusoidal dispersion curves simulating rush-hour emission peaks and atmospheric thermal inversions.',
      'Integrated a differential ranking matrix computing percentage deltas against WHO safe limits with instant telemetry CSV export.'
    ],
    icon: Server,
    colSpan: 'md:col-span-1',
    liveUrl: 'https://moiz0820.github.io/AirPulse/',
    githubUrl: 'https://github.com/Moiz0820/AirPulse'
  },
  {
    title: 'TalentMetrics — Global Tech Labor & Arbitrage Engine',
    desc: 'Cross-border AI & Data Science compensation percentiles, purchasing power parity, and Dubai 0% tax arbitrage.',
    details: [
      'Architected a dual-pane financial workbench analyzing P25/P50/P75/P90 compensation distributions across 7 global engineering hubs.',
      'Engineered an interactive fiscal tax arbitrage simulator modeling statutory income tax and prime 1BR rents to compute net discretionary cash yield.',
      'Implemented high-dimensional skill premium multipliers for specialized capabilities (LLM fine-tuning, distributed Spark, MLOps, Econometrics).',
      'Built a comparative hub matrix demonstrating net purchasing power superiority of Dubai 0% tax shield over US/EU hubs with CSV reporting.'
    ],
    icon: BrainCircuit,
    colSpan: 'md:col-span-2',
    liveUrl: 'https://moiz0820.github.io/TalentMetrics/',
    githubUrl: 'https://github.com/Moiz0820/TalentMetrics'
  },
  {
    title: 'Financial Intelligence Platform',
    desc: 'Custom enterprise intelligence platform automating real-time revenue, ROI, and comprehensive project profitability.',
    details: [
      'Engineered a custom Financial Intelligence Platform automating the calculation of real-time revenue, ROI, and comprehensive project profitability at Faateh Real Estate.',
      'Architected an end-to-end forecasting engine utilizing historical data to predict performance, reducing manual workload by 70%.',
      'Consolidated complex corporate workstreams into an executive dashboard, replacing legacy manual reports with automated models.'
    ],
    icon: LineChart,
    colSpan: 'md:col-span-1'
  },
  {
    title: 'IntervAI — Dynamic Evaluation Pipeline',
    desc: 'AI-driven technical evaluation pipeline using Whisper and GPT-4 matching realistic interview conditions.',
    details: [
      'Developed a real-time speech-to-text pipeline using OpenAI Whisper and GPT-4 to generate customized, dynamic follow-up questions during mock interviews.',
      'Built an interactive dashboard with React and WebRTC to record, stream, and evaluate candidate performance metrics (sentiment, vocabulary, and latency).',
      'Designed an automated assessment generator matching resume keyword profiles with industry standards, reducing screening latency by 45%.'
    ],
    icon: Code2,
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

          {(proj.liveUrl || proj.githubUrl) && (
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {proj.liveUrl && (
                <a
                  href={proj.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-brand-500 hover:bg-brand-400 text-zinc-950 font-bold font-sans text-sm tracking-wide transition-all shadow-lg hover:shadow-brand-500/25 cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Launch Live Project</span>
                </a>
              )}
              {proj.githubUrl && (
                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-medium font-sans text-sm tracking-wide transition-all border border-white/10 cursor-pointer"
                >
                  <Github className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
