import HomeBanner from '@/components/home/HomeBanner';
import React from 'react';

export default function Home(): JSX.Element {
  return (
    <div className="text-white">
      <HomeBanner />
      <h1>Testimonials</h1>
      <p className="my-5">Thoughts on me.</p>
      <h2>Recent Activities</h2>
      <p className="my-5">My recent activities.</p>
      <h3>Donation</h3>
      <p className="my-5">Buy me a cup of coffee.</p>
    </div>
  );
}
