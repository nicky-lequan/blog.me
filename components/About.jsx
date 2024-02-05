'use client';

import CapabilityCard from './CapabilityCard';
import SectionWrapper from './hoc/SectionWrapper';
import {Avatar} from '@/providers/AppProvider';

const capabilities = [
  {
    title: 'Full Stack Developer',
    iconSrc: '/assets/images/solid_figure_1.png',
  },
  {
    title: 'Back End Developer',
    iconSrc: '/assets/images/solid_figure_2.png',
  },
  {
    title: 'Solutions Architect',
    iconSrc: '/assets/images/solid_figure_3.png',
  },
  {
    title: 'Problem Solver',
    iconSrc: '/assets/images/solid_figure_4.png',
  },
];

function About() {
  return (
    <div className="flex flex-row items-start gap-5">
      <div className="flex flex-col justify-center items-center mt-5">
        <div className="w-5 h-5 rounded-full bg-primary" />
        <div className="w-1 sm:h-[32.5rem] h-[30rem] bg-gradient-to-b from-primary" />
      </div>
      <div className="px-4">
        <div className="flex flex-row justify-between items-center">
          <div>
            <h1 className="mt-8 font-black text-[2.5rem] xs:text-[3.125rem] sm:text-[3.75rem] lg:text-[5rem] lg:leading-[6.125rem]">
              Hi there. I&apos;m <span className="text-primary">JunHa.</span>
            </h1>
            <p className="mt-2 text-gray-700 dark:text-gray-500 font-medium text-[1rem] xs:text-[1.25rem] sm:text-[1.625rem] lg:text-[1.875rem] leading-[2rem]">
              I&apos;M A BUILDER. <br />
            </p>
            <p className="mt-2 lg:pe-12 text-gray-700 dark:text-gray-500 font-medium text-[0.625rem] xs:text-[0.875rem] sm:text-[1.125rem] lg:text-[1.5rem] sm:leading-[1.5rem]">
              I build whatever I want to, with whatever needed.
              <br />
              Recently I&apos;m digging Next.js, Amazon EKS, and Competitive
              Programming with Java. Weight training gives me power and positive
              mindset and that is why I go to the gym at least 3 times a week.
              House music, phoenix darts, computer games and snow boarding are
              my favorite hobbies. I&apos;m an undeniable coffee aficionado.
            </p>
          </div>
          <Avatar
            variant="circular"
            alt="profile"
            withBorder
            className="mt-12 hidden lg:block lg:w-[20rem] lg:h-[18.75rem] border-2 border-primary"
            src="/assets/images/profile.jpg"
          />
        </div>
        <div className="mt-10 flex flex-wrap gap-6">
          {capabilities.map((capability, idx) => (
            <CapabilityCard
              key={capability.title}
              index={idx}
              {...capability}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SectionWrapper(About, 'about');
