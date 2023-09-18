import { Carousel } from '@/app/provider';
import React from 'react';
import TestimonialCard from './TestimonialCard';

export default function Testimonials(): JSX.Element {
  return (
    <div className="bg-[#6F8FAF]/20 dark:bg-indigo-400/10 rounded-xl">
      <Carousel
        className="rounded-xl items-center"
        autoplay={true}
        autoplayDelay={8000}
        loop={true}>
        <TestimonialCard
          className="mt-4 mb-12 md:mx-auto md:w-7/12"
          title="Solid foundation for any project"
          content="Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!"
          imageSource="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
          author="Roberta Casas"
          jobTitle="Lead designer at Dropbox"
        />
        <TestimonialCard
          className="mt-4 mb-12 md:mx-auto md:w-7/12"
          title="Speechless with how easy this was to integrate"
          content="I recently got my hands on Flowbite Pro, and holy crap, I'm speechless with how easy this was to integrate within my application. Most templates are a pain, code is scattered, and near impossible to theme. Flowbite has code in one place and I'm not joking when I say it took me a matter of minutes to copy the code, customise it and integrate within a Laravel + Vue application. If you care for your time, I hands down would go with this."
          imageSource="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
          author="Bonnie Green"
          jobTitle="Developer at Open AI"
        />
        <TestimonialCard
          className="mt-4 mb-12 md:mx-auto md:w-7/12"
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
