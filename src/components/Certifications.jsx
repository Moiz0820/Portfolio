import React from 'react';
import { motion } from 'framer-motion';
import { PiCertificateDuotone as Award, PiArrowSquareOutDuotone as ExternalLink } from 'react-icons/pi';

const certs = [
  { name: 'Microsoft PL-300 Data Analyst Associate', link: 'https://learn.microsoft.com/en-us/users/moizanwar-6595/credentials/certification/data-analyst-associate' },
  { name: 'NVIDIA: Fundamentals of Accelerated Computing with CUDA Python', link: '#' },
  { name: 'IBM: Data Science Tools (DS0105EN)', link: 'https://courses.edx.org/certificates/ee6bd1199cfb4562acd937b1cf90fa8f' },
  { name: 'IBM: Python for Data Science, AI & Development (PY0101EN)', link: 'https://courses.edx.org/certificates/6ba13559406f497cade0eac040f33714' },
  { name: 'IBM: Introduction to Data Science (DS0101EN)', link: 'https://courses.edx.org/certificates/e44dc2ecd4aa4f5daad7c3a4ad6ca61f' },
  { name: 'IBM: AI for Everyone (AI0101EN)', link: 'https://courses.edx.org/certificates/8a1e57a8aa504b0a905d6e562e1cea1f' },
  { name: 'IBM: Cloud Application Development Foundations (CAD101EN)', link: 'https://courses.edx.org/certificates/f289e578a8da43719dfe5e5b72813e68' },
  { name: 'Harvard: Data Science - Visualization', link: 'https://courses.edx.org/certificates/038e4f3e09c6404abbdc742571765370' },
  { name: 'Harvard: Data Science - Probability', link: 'https://courses.edx.org/certificates/77d63e6e7cb0480ea2f827e54f81e3d2' },
  { name: 'Harvard: Data Science - Inference and Modeling', link: 'https://courses.edx.org/certificates/6270564ffde040d4bd0d6d4782fd659a' },
  { name: 'Harvard: Data Science - Wrangling', link: 'https://courses.edx.org/certificates/0d61b87cae004eca8a4a8858b8735e6e' },
  { name: 'Harvard: Using Python for Research', link: 'https://courses.edx.org/certificates/91fc91b2464841b9b6354cdd9880088e' },
  { name: 'Harvard: Data Science - R Basics', link: '#' },
  { name: 'Harvard: Data Science - Machine Learning', link: '#' },
  { name: 'UMich: Programming for Everybody', link: '#' }
];

export const Certifications = () => {
  return (
    <section id="certifications" className="py-24 max-w-5xl mx-auto px-4 md:px-8 border-t border-white/5">
      <div className="mb-12 flex items-center gap-4">
        <Award className="w-8 h-8 text-brand-500" />
        <h2 className="text-3xl md:text-5xl font-bold">Certifications</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {certs.map((cert, idx) => (
          <motion.a 
            key={idx}
            href={cert.link}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.02 }}
            className="glassmorphism p-5 rounded-2xl flex items-start justify-between group hover:border-brand-500/50 transition-colors"
          >
            <span className="text-sm text-white/80 font-medium group-hover:text-white transition-colors pr-4 leading-relaxed">{cert.name}</span>
            <ExternalLink className="w-4 h-4 text-white/20 group-hover:text-brand-500 flex-shrink-0 mt-1" />
          </motion.a>
        ))}
      </div>
    </section>
  );
};
