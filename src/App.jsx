import React from 'react';
import { Dock } from './components/Dock';
import { Hero } from './components/Hero';
import { LogoTicker } from './components/LogoTicker';
import { Timeline } from './components/Timeline';
import { BentoGrid } from './components/BentoGrid';
import { Academics } from './components/Academics';
import { Certifications } from './components/Certifications';
import { ExtraCurriculars } from './components/ExtraCurriculars';
import { Footer } from './components/Footer';
import { FakeCall } from './components/FakeCall';

function App() {
  return (
    <main className="min-h-screen bg-dark-bg text-white selection:bg-brand-500 selection:text-black font-sans relative">
      <Hero />
      <LogoTicker />
      <Timeline />
      <Academics />
      <Certifications />
      <ExtraCurriculars />
      <BentoGrid />
      <Footer />
      <Dock />
      <FakeCall />
    </main>
  );
}

export default App;
