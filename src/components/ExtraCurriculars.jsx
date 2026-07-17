import React from 'react';
import { motion } from 'framer-motion';
import { 
  PiUsersDuotone as UsersIcon, 
  PiListChecksDuotone as ProjectIcon, 
  PiMonitorPlayDuotone as MovieIcon,
  PiSparkleDuotone as SparkleIcon
} from 'react-icons/pi';
import { cn } from '../lib/utils';

const activities = [
  {
    role: 'Event Manager',
    organization: 'Geekforgeeks — Bennett University',
    icon: UsersIcon,
    color: 'hover:border-brand-500/40 group-hover:text-brand-500',
    highlights: [
      'Conducted various technical and non-technical events on a large scale as the Events Head.',
      'Collaborated with start-ups and established multiple future growth contracts for the chapter\'s continued success.'
    ]
  },
  {
    role: 'Project Management',
    organization: 'Enactus — Bennett University',
    icon: ProjectIcon,
    color: 'hover:border-brand-500/40 group-hover:text-brand-500',
    highlights: [
      'Learned and implemented large-scale project management methodologies.',
      'Managed and coordinated large teams for community and social development projects.'
    ]
  },
  {
    role: 'Events Core',
    organization: 'Sunset Movie Club — Bennett University',
    icon: MovieIcon,
    color: 'hover:border-brand-500/40 group-hover:text-brand-500',
    highlights: [
      'Contributed as a member of the core team to execute club screenings and student engagements.',
      'Collaborated with team members to deliver events efficiently and timely.'
    ]
  }
];

export const ExtraCurriculars = () => {
  return (
    <section id="extra-curriculars" className="py-24 max-w-5xl mx-auto px-4 md:px-8 border-t border-white/5">
      <div className="mb-12 flex items-center gap-4">
        <SparkleIcon className="w-8 h-8 text-brand-500 animate-pulse" />
        <h2 className="text-3xl md:text-5xl font-bold font-display">Extra-Curricular Activities</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {activities.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div 
              key={idx}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={cn(
                "group glassmorphism rounded-3xl p-8 border border-white/5 flex flex-col justify-between transition-all duration-300",
                "hover:border-brand-500/30 hover:shadow-[0_10px_30px_rgba(251,191,36,0.05)]"
              )}
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center group-hover:bg-brand-500/20 transition-all duration-300">
                    <Icon className="w-6 h-6 text-brand-500 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-white/40 font-semibold bg-white/5 px-3 py-1 rounded-full">
                    Club Leadership
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-2 leading-tight tracking-tight font-display group-hover:text-brand-400 transition-colors">
                  {item.role}
                </h3>
                <p className="text-xs text-brand-500/80 uppercase tracking-wider font-semibold mb-6">
                  {item.organization}
                </p>

                {/* Highlights */}
                <ul className="space-y-3.5">
                  {item.highlights.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-sm text-white/60 leading-relaxed font-light font-sans group-hover:text-white/80 transition-colors">
                      <span className="text-brand-500 mt-1.5 text-[8px] flex-shrink-0">●</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
