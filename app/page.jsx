import React from 'react';
import DynamicTextBanner from '../components/DynamicTextBanner';
import About from '../components/About';
import Work from '@/components/Work';
import CompetitiveProgramming from '@/components/Achievements';
import Skills from '@/components/Skills';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <DynamicTextBanner />
      <About />
      <Work />
      <Skills />
      <Portfolio />
      <CompetitiveProgramming />
      <Testimonials />
      <Contact />
    </>
  );
}
