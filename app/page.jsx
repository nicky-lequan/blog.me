import React from 'react';
import DynamicTextBanner from '../components/DynamicTextBanner';
import About from '../components/About';
import Work from '@/components/Work';

export default function Home() {
  return (
    <>
      <DynamicTextBanner />
      <About />
      <Work />
      {/* Contact Me:
      Looking for a self-motivated & mission oriented engineer ?
      Man, you're on the right track.
      */}
    </>
  );
}
