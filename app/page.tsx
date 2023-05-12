import HomeBanner from '@/components/home/HomeBanner';
import React from 'react';

export default function Home(): JSX.Element {
  return (
    <div className="text-white">
      <HomeBanner />
      <h1 className="mt-8 font-bold text-3xl">Junha Jeong</h1>
      <p className="my-5">This is my home page.</p>
    </div>
  );
}
