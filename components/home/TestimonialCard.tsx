import React from 'react';

interface TestimonialCardProps {
  className?: string;
}

export default function TestimonialCard({
  className,
}: TestimonialCardProps): JSX.Element {
  return (
    <figure
      className={`${
        className ?? ''
      } p-8 flex flex-col items-center justify-center text-center border-b border-indigo-200/10 bg-indigo-700/10 rounded-lg`}>
      <blockquote className="max-w-2xl mx-auto mb-4 lg:mb-8 text-gray-400">
        <h3 className="text-lg font-semibold text-white">
          Solid foundation for any project
        </h3>
        <p className="my-4">
          &quot;Designing with Figma components that can be easily translated to
          the utility classes of Tailwind CSS is a huge timesaver!&quot;
        </p>
      </blockquote>
      <figcaption className="flex items-center justify-center space-x-3">
        <img
          className="rounded-full w-9 h-9"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
          alt="profile picture"
        />
        <div className="space-y-0.5 font-medium text-white text-left">
          <div>Roberta Casas</div>
          <div className="text-sm text-gray-400">Lead designer at Dropbox</div>
        </div>
      </figcaption>
    </figure>
  );
}
