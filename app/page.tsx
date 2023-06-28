import HomeBanner from '@/components/home/HomeBanner';
import React from 'react';

export default function Home(): JSX.Element {
  return (
    <div className="text-white">
      <HomeBanner />
      <h2 className="mt-10">Testimonials</h2>
      <p className="my-5">Thoughts on me.</p>
      <h2 className="mt-10">Recent Activities</h2>
      <p className="my-5">My recent activities.</p>
      <h2 className="mt-10">Donation</h2>
      <p className="my-5">Buy me a cup of coffee.</p>
    </div>
  );
}
