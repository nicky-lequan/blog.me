'use client';

import {Carousel} from '@material-tailwind/react';
import TestimonialCard from './TestimonialCard';

function SlidingCarousel({
  autoplay = false,
  autoplayDelay = 6000,
  loop = true,
  contents = [],
}) {
  return (
    <div className="bg-slate-200 dark:bg-stone-950 rounded-[1.25rem] shadow-inner">
      <Carousel
        className="rounded-xl items-center"
        autoplay={autoplay}
        autoplayDelay={autoplayDelay}
        loop={loop}>
        {contents.map((content, index) => (
          <TestimonialCard
            key={index}
            title={content.title}
            content={content.body}
            imageSource={content.imageSource}
            author={content.name}
            jobTitle={content.jobTitle}
          />
        ))}
      </Carousel>
    </div>
  );
}

export default SlidingCarousel;
