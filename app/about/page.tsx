import {Typography} from '../provider';
import {H2} from '@/components/Headers';
import React from 'react';
import SlidingCarousel from '@/components/SlidingCarousel';

export default function Home(): JSX.Element {
  return (
    <>
      <Typography variant="h1" className="my-6 font-['raleway'] font-extrabold">
        About
      </Typography>
      <H2 className="mt-10 mb-4">Testimonials</H2>
      <SlidingCarousel />
      <H2 className="mt-10 mb-4">Recent Activity</H2>
      <p className="my-5 px-4">My recent activity.</p>
      <H2 className="mt-10 mb-4">Portfolio</H2>
      <p className="my-5 px-4">My artworks.</p>
      <H2 className="mt-10 mb-4">Contact</H2>
      <p className="my-5 px-4">Reach me.</p>
    </>
  );
}
