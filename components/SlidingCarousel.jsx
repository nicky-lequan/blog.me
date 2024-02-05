'use client';

import {Carousel} from '@material-tailwind/react';
import TestimonialCard from './TestimonialCard';

function SlidingCarousel({
  autoplay = true,
  autoplayDelay = 6000,
  loop = true,
  contents,
}) {
  return (
    <div className="bg-slate-200 dark:bg-stone-950 rounded-[1.25rem] shadow-inner">
      <Carousel
        className="rounded-xl items-center"
        autoplay={autoplay}
        autoplayDelay={autoplayDelay}
        loop={loop}>
        {/* {contents} */}
        {/* dummy contents */}
        <TestimonialCard
          title="Solid foundation for any project"
          content="Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!"
          imageSource="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
          author="Roberta Casas"
          jobTitle="Lead designer at Dropbox"
        />
        <TestimonialCard
          title="Speechless with how easy this was to integrate"
          content="I recently got my hands on Flowbite Pro, and holy crap, I'm speechless with how easy this was to integrate within my application. Most templates are a pain, code is scattered, and near impossible to theme. Flowbite has code in one place and I'm not joking when I say it took me a matter of minutes to copy the code, customise it and integrate within a Laravel + Vue application. If you care for your time, I hands down would go with this."
          imageSource="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
          author="Bonnie Green"
          jobTitle="Developer at Open AI"
        />
        <TestimonialCard
          title="Mindblowing workflow and variants"
          content="As someone who mainly designs in the browser, I've been a casual user of Figma, but as soon as I saw and started playing with FlowBite my mind was 🤯. Everything is so well structured and simple to use (I've learnt so much about Figma by just using the toolkit). Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application."
          imageSource="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
          author="Jese Leos"
          jobTitle="Software Engineer at Facebook"
        />
      </Carousel>
    </div>
  );
}

export default SlidingCarousel;
