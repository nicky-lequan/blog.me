import Image from 'next/image';
import React from 'react';

const TestimonialCard = ({title, content, imageSource, author, jobTitle}) => (
  <figure className="mt-4 mb-12 md:mx-auto md:w-7/12 green-violet-gradient p-[1px] rounded-[20px] drop-shadow-xl">
    <div className="p-8 flex flex-col items-center justify-center text-center bg-white/90 dark:bg-slate-950/90 shadow-lg shadow-current dark:shadow-gray-800 rounded-[20px]">
      <blockquote className="max-w-2xl mx-auto mb-4 lg:mb-8 text-gray-800 dark:text-gray-400">
        <svg
          className="h-12 mx-auto mb-3 text-gray-900 dark:text-gray-700"
          viewBox="0 0 24 27"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
            fill="currentColor"
          />
        </svg>
        <h3 className="text-xl font-semibold text-black dark:text-white">
          {title}
        </h3>
        <p className="my-4">&quot;{content}&quot;</p>
      </blockquote>
      <figcaption className="flex items-center justify-center space-x-3 mb-4">
        <img className="rounded-full w-9 h-9" src={imageSource} alt={author} />
        <div className="space-y-0.5 font-medium text-black dark:text-white text-left">
          <div>{author}</div>
          <div className="text-sm text-gray-900 dark:text-gray-400">
            {jobTitle}
          </div>
        </div>
      </figcaption>
    </div>
  </figure>
);

export default TestimonialCard;
