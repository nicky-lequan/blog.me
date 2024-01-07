import React from 'react';
import DynamicTextBanner from '../components/DynamicTextBanner';
import About from '../components/About';
import Work from '@/components/Work';
import CompetitiveProgramming from '@/components/CompetitiveProgramming';
import Skills from '@/components/Skills';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Accomplishments from '@/components/Accomplishments';

const HomePage = () => (
  <div className="p-4 flex-auto flex flex-col bg-neutral rounded-2xl">
    <DynamicTextBanner />
    <About />
    <Work />
    <Skills />
    <Portfolio />
    <CompetitiveProgramming />
    <Accomplishments />
    <Testimonials />
    <Contact />
  </div>
);

export default HomePage;
