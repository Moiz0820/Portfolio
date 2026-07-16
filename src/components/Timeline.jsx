import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';
import { 
  PiBriefcaseDuotone as Briefcase, 
  PiBuildingsDuotone as Building2, 
  PiGraduationCapDuotone as GraduationCap, 
  PiMagnifyingGlassDuotone as Search, 
  PiPulseDuotone as Activity, 
  PiUsersDuotone as Users, 
  PiMonitorPlayDuotone as MonitorPlay, 
  PiCodeDuotone as Code2 
} from 'react-icons/pi';
import { cn } from '../lib/utils';
import GlassCard from './ui/glass-card';
import { GlassButton } from './ui/glass-button';

const experiences = [
  {
    company: 'Faateh Real Estate',
    role: 'Business Data and Finance Analyst',
    location: 'Dubai, UAE',
    date: 'March 2024 - Present',
    desc: 'Analyzed market trends and property data. Migrated legacy financial systems to ERPNext and automated reconciliations.',
    icon: Building2,
    highlights: [
      'Strategic Market Intelligence: Engineered real-time variance analysis dashboards using Power BI to monitor operational budgets, identifying 100% of cost-saving opportunities through data-driven trend analysis.',
      'System Migration Leadership: Orchestrated the end-to-end migration of legacy financial data to a firm-wide Frappe/ERPNext system, ensuring 100% data integrity and reducing cross-departmental reporting lag by 50%.',
      'Automation & Efficiency: Developed custom Python scripts to automate complex bank reconciliations and monthly forecasting, saving the finance team approximately 20 hours of manual labor per week.',
      'Financial Stewardship: Maintain comprehensive financial reporting across business units, performing predictive modeling to guide property investment strategies and strategic leadership decisions.'
    ]
  },
  {
    company: 'UC Berkeley',
    role: 'Research Analyst',
    location: 'Remote',
    date: 'January 2024 - March 2024',
    desc: 'Provided remote innovative solutions for large-scale data management and conducted deep-dive analyses over diverse datasets.',
    icon: Search,
    highlights: [
      'Data Management Solutions: Collaborated with the research team to provide innovative remote solutions for large-scale data management and software support.',
      'Analytical Support: Showcased technical rigor in conducting deep-dive analysis over diverse datasets to support ongoing academic research initiatives.'
    ]
  },
  {
    company: 'Deloitte',
    role: 'SA&MA Analyst Intern',
    location: 'Kolkata',
    date: 'July 2023 - October 2023',
    desc: 'Synthesized complex datasets using Python and Power BI to generate actionable insights and inform strategic recommendations.',
    icon: Briefcase,
    highlights: [
      'Consulting Insights: Synthesized complex datasets using Python and Power BI to generate actionable insights for the Consulting Director.',
      'Client Strategy: Directly informed strategic recommendations for high-level clients by bridging the gap between raw data and business value.'
    ]
  },
  {
    company: 'National University of Singapore (NUS)',
    role: 'Academic Intern',
    location: 'Singapore',
    date: 'June 2023 - July 2023',
    desc: 'Engineered a deep learning data analytics solution and managed high-fidelity data preprocessing for optimal model performance.',
    icon: GraduationCap,
    highlights: [
      'Deep Learning Engineering: Engineered a practical data analytics solution for the education industry utilizing Deep Learning architectures.',
      'Data Preprocessing: Managed high-fidelity data inputs through comprehensive feature engineering and preprocessing to optimize model performance.'
    ]
  },
  {
    company: 'Amazon (AWS Focus)',
    role: 'AWS Certification Program',
    location: 'NUS, Singapore',
    date: 'June 2023 - July 2023',
    desc: 'Achieved AWS certification focusing on Amazon SageMaker and gained hands-on experience in deploying scalable AI solutions.',
    icon: MonitorPlay,
    highlights: [
      'Cloud Infrastructure: Achieved AWS certification with a primary focus on Amazon SageMaker for machine learning workflows.',
      'Model Deployment: Gained hands-on experience in deploying scalable AI solutions within the AWS ecosystem.'
    ]
  },
  {
    company: 'ALSAY Gastech Pvt Ltd',
    role: 'R&D Internship',
    location: 'Noida',
    date: 'January 2023 - March 2023',
    desc: 'Conducted technical research and experimented with market data to identify industrial trends and inform R&D strategies.',
    icon: Code2,
    highlights: [
      'Market Research & Analysis: Conducted technical research and experiments, analyzing market data to identify emerging industrial trends and patterns.',
      'Experimental Data: Collected and organized experimental datasets to provide insights for product development and R&D strategies.'
    ]
  },
  {
    company: 'ZAK Venture Pvt Ltd',
    role: 'Data Analyst Internship',
    location: 'Noida',
    date: 'July 2022 - January 2023',
    desc: 'Engineered automated data-cleaning pipelines and performed extensive EDA to improve data quality and influence strategy.',
    icon: Activity,
    highlights: [
      'Data Pipeline Engineering: Engineered automated data-cleaning pipelines for large-scale datasets, uncovering hidden trends that influenced quarterly business strategy.',
      'Exploratory Analysis: Performed extensive exploratory data analysis (EDA) and data wrangling to improve organizational data quality.'
    ]
  },
  {
    company: 'Berkeley Haas',
    role: 'Research Analyst Intern',
    location: 'Kolkata',
    date: 'June 2022',
    desc: 'Advised on research software architecture and provided tutorials on modern data management techniques.',
    icon: Search,
    highlights: [
      'Methodology Support: Advised on research software architecture and supported the development of methodologies and data collection tools.',
      'Technical Tutorials: Provided tutorials on modern data management techniques, improving the efficiency of data collection for research teams.'
    ]
  },
  {
    company: 'InAmigos Foundation',
    role: 'Virtual Volunteering',
    location: 'Virtual',
    date: 'April 2022 - April 2023',
    desc: 'Leveraged technology to support impactful social projects while honing remote collaboration skills.',
    icon: Users,
    highlights: [
      'Leveraged technology to support impactful social projects while honing remote collaboration and technical communication skills.'
    ]
  },
  {
    company: 'Hamari Pahchan NGO',
    role: 'Social Entrepreneurship',
    location: 'Virtual',
    date: 'April 2022 - September 2022',
    desc: 'Managed community engagement projects to promote sustainable development.',
    icon: Users,
    highlights: [
      'Managed community engagement projects, focusing on sustainable development and innovative project management practices.'
    ]
  }
];

export const Timeline = () => {
  const containerRef = useRef(null);
  const [selectedExperience, setSelectedExperience] = useState(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end bottom"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 30
  });

  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  const calculateWorkMonths = () => {
    const startYear = 2024;
    const startMonth = 2; // March is index 2
    const now = new Date();
    const totalMonths = (now.getFullYear() - startYear) * 12 + (now.getMonth() - startMonth) + 1;
    return `${totalMonths} Months`;
  };

  return (
    <section id="experience" className="py-24 relative max-w-[1200px] mx-auto px-4 md:px-8">
      {/* Headings */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-display tracking-tight">
          Professional Journey
        </h2>

        {/* Interactive Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-5xl mx-auto">
          <GlassButton>
            <h3 className="text-brand-500 font-semibold text-sm md:text-base uppercase tracking-widest font-sans">Total Internship Experience</h3>
            <p className="text-white font-light text-2xl md:text-3xl mt-3">20 Months</p>
          </GlassButton>
          <GlassButton>
            <h3 className="text-brand-500 font-semibold text-sm md:text-base uppercase tracking-widest font-sans">Total Work Experience</h3>
            <p className="text-white font-light text-2xl md:text-3xl mt-3">{calculateWorkMonths()}</p>
          </GlassButton>
          <GlassButton>
            <h3 className="text-brand-500 font-semibold text-sm md:text-base uppercase tracking-widest font-sans">Total Volunteering Exp.</h3>
            <p className="text-white font-light text-2xl md:text-3xl mt-3">19 Months</p>
          </GlassButton>
        </div>
      </div>

      <div className="relative mt-24" ref={containerRef}>
        <div className="flex flex-col gap-16 relative">
          {/* Subdued Energy Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2 rounded-full z-0" />

          {/* Animated Gold Line tracking the exact container bounds */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-4 md:left-1/2 top-0 w-[3px] bg-brand-500 -translate-x-1/2 rounded-full z-10 shadow-[0_0_15px_#fbbf24]"
          />

          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <TimelineCard
                key={index}
                exp={exp}
                isEven={isEven}
                onDetails={() => setSelectedExperience(exp)}
              />
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedExperience && (
          <ExperienceModal
            exp={selectedExperience}
            onClose={() => setSelectedExperience(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

function ExperienceModal({ exp, onClose }) {
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

        <span className="text-brand-500 font-semibold tracking-widest uppercase text-xs md:text-sm mb-3 block">{exp.date}</span>
        <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-2 font-display">{exp.role}</h3>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-8">
          <span className="text-lg text-white/80 font-serif italic">{exp.company}</span>
          <span className="hidden sm:inline text-white/20">•</span>
          <span className="text-sm text-brand-500/80 uppercase tracking-widest">{exp.location}</span>
        </div>

        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        <div className="text-white/70 leading-relaxed text-base md:text-lg space-y-6">
          <p>{exp.desc}</p>
          <div className="bg-white/5 border border-white/10 p-6 rounded-3xl">
            <h4 className="text-white font-bold mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Key Contributions & Highlights
            </h4>
            <ul className="list-none space-y-3">
              {exp.highlights?.map((highlight, idx) => {
                const parts = highlight.split(': ');
                return (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-brand-500 mt-1.5 text-xs">●</span>
                    <span className="leading-relaxed">
                      {parts.length > 1 ? (
                        <>
                          <strong className="text-white/90 font-semibold">{parts[0]}:</strong> {parts.slice(1).join(': ')}
                        </>
                      ) : (
                        highlight
                      )}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function TimelineCard({ exp, isEven, onDetails }) {
  const cardRef = useRef(null);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "relative flex items-center md:w-1/2 pl-12 md:pl-0",
        isEven ? "md:pr-12 md:mr-auto justify-end" : "md:pl-12 md:ml-auto"
      )}
    >
      {/* Animated Connector Dot */}
      <motion.div
        /* Start with a solid black/dark background to mask the line behind it */
        initial={{ backgroundColor: "#0a0a0a" }} 
        /* Fill with gold when in view */
        whileInView={{ backgroundColor: "#f59e0b" }} 
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className={cn(
          "absolute top-1/2 -translate-y-1/2 w-4 h-4 border-2 border-brand-500 rounded-full z-20",
          "left-4 -translate-x-1/2 md:translate-x-0 md:left-auto",
          isEven ? "md:-right-[8px]" : "md:-left-[8px]"
        )}
      />

      {/* Glass Card Integration */}
      <GlassCard
        className="z-30 w-full max-w-full"
        title={exp.role}
        company={exp.company}
        location={exp.location}
        date={exp.date}
        subtitle={exp.desc}
        isEven={isEven}
        icon={exp.icon}
        onDetailsClick={onDetails}
      />
    </motion.div>
  );
}
