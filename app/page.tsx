import DynamicTextBanner from '@/components/DynamicTextBanner';
import {H1} from '@/components/Headers';
import React from 'react';

export default function Home(): JSX.Element {
  return (
    <>
      <DynamicTextBanner />
      <H1 className="mt-10 mb-4">Recent Activities</H1>
    </>
  );
}
