import React from 'react';
import ImageBanner from '@/components/ImageBanner';

export default function Posts() {
  return (
    <>
      <ImageBanner />
      <div className="mt-4 max-w-6xl min-w-0 px-6 py-4 flex-auto flex flex-col bg-neutral rounded-2xl">
        <h1 className="w-full text-text font-black md:text-[50px] sm:text-[42px] text-[30px]">
          Posts
        </h1>
        The magic you&apos;re looking for is in the work you&apos;re
        avoiding.The magic you&apos;re looking for is in the work you&apos;re
        avoiding.The magic you&apos;re looking for is in the work you&apos;re
        avoiding.The magic you&apos;re looking for is in the work you&apos;re
        avoiding.The magic you&apos;re looking for is in the work you&apos;re
        avoiding.
      </div>
    </>
  );
}
