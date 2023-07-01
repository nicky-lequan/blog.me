import HomeBanner from '@/components/home/HomeBanner';
import {H2} from '@/components/common/Header';
import React from 'react';
import Testimonials from '@/components/home/Testimonials';

export default function Home(): JSX.Element {
  return (
    <div className="text-white">
      <HomeBanner />
      <H2 className="mt-10 mb-4">Testimonials</H2>
      <Testimonials />
      <H2 className="mt-10">Recent Activities</H2>
      <p className="my-5">My recent activities.</p>
      <H2 className="mt-10">Donation</H2>
      <p className="my-5">Buy me a cup of coffee.</p>
    </div>
  );
}
