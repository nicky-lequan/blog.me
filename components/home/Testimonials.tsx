'use client';

import {Carousel} from '@material-tailwind/react';
import React from 'react';
import TestimonialCard from './TestimonialCard';

export default function Testimonials(): JSX.Element {
  return (
    <Carousel
      className="rounded-xl"
      autoplay={true}
      autoplayDelay={8000}
      loop={true}>
      <TestimonialCard />
      <TestimonialCard />
      <TestimonialCard />
      <TestimonialCard />
    </Carousel>
  );
}
