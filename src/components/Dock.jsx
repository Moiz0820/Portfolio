import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  PiHouseDuotone as Home, 
  PiBriefcaseDuotone as Briefcase, 
  PiFileCodeDuotone as FileCode, 
  PiGraduationCapDuotone as GraduationCap, 
  PiCertificateDuotone as Award 
} from 'react-icons/pi';
import { cn } from '../lib/utils';

const apps = [
  { id: 'hero', icon: Home, label: 'Home' },
  { id: 'experience', icon: Briefcase, label: 'Experience' },
  { id: 'academics', icon: GraduationCap, label: 'Academics' },
  { id: 'certifications', icon: Award, label: 'Certifications' },
  { id: 'projects', icon: FileCode, label: 'Projects' },
];

export const Dock = () => {
  let mouseX = useMotionValue(Infinity);

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className={cn(
          "mx-auto flex h-16 items-end gap-4 rounded-full px-4 pb-3",
          "bg-white/5 border border-white/10 backdrop-blur-2xl shadow-xl",
          "ring-1 ring-white/10"
        )}
      >
        {apps.map((app) => (
          <AppIcon mouseX={mouseX} key={app.id} app={app} />
        ))}
      </motion.div>
    </div>
  );
};

function AppIcon({ mouseX, app }) {
  let ref = useRef(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  const Icon = app.icon;

  const scrollToSection = () => {
    const el = document.getElementById(app.id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.button
      ref={ref}
      style={{ width, height: width }}
      onClick={scrollToSection}
      className="group relative flex aspect-square items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
      whileTap={{ scale: 0.95 }}
    >
      <Icon className="w-1/2 h-1/2 text-white opacity-80 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
      {/* Tooltip */}
      <span className="absolute -top-10 scale-0 rounded-md bg-white/10 backdrop-blur-md border border-white/10 px-2 py-1 text-xs text-white opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100">
        {app.label}
      </span>
    </motion.button>
  );
}
