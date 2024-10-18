'use client';

import CapabilityCard from './CapabilityCard';
import SectionWrapper from '../hoc/SectionWrapper';
import {Avatar} from '@/providers/AppProvider';
import {CAPABILITIES} from './constants';

function About() {
  return (
    <div className="flex flex-row items-start gap-0 sm:gap-4">
      <div className="flex flex-col justify-center items-center mt-5">
        <div className="w-5 h-5 rounded-full bg-primary" />
        <div className="w-1 sm:h-[32.5rem] h-[30rem] bg-gradient-to-b from-primary" />
      </div>
      <div className="px-4">
        <div className="flex flex-row justify-between items-center">
          <article>
            <h1 className="mt-8 font-black text-[2.5rem] xs:text-[3.125rem] sm:text-[3.75rem] lg:text-[5rem] lg:leading-[6.125rem]">
              Hey there. It&apos;s <span className="text-primary">Daniel.</span>
            </h1>
            <p className="mt-2 text-gray-700 dark:text-gray-500 font-medium text-[1rem] xs:text-[1.25rem] sm:text-[1.625rem] lg:text-[1.875rem] leading-[2rem]">
              DEVELOPER | ARCHITECT | QUANT ENTHUSIAST <br />
            </p>
            <p className="mt-2 lg:pe-12 text-gray-700 dark:text-gray-500 font-medium text-[0.625rem] xs:text-[0.875rem] sm:text-[1.125rem] lg:text-[1.5rem] sm:leading-[1.5rem]">
              I got several aliases, and "jooncco" is one of them especially
              when I do develop and build things. I started my career as a
              back-end engineer at LG CNS, an awsome company to start a career,
              and I found that I could be the full-stack engineer that any team
              would LOVE to work with. I&apos;ve led many business critical
              projects to success, ranging from small to big scales. You can
              find the details&nbsp;
              <a
                className="text-cyan-500 dark:text-violet-500 underline"
                href="#projects">
                here
              </a>
              .
            </p>
          </article>
          <Avatar
            variant="circular"
            alt="profile"
            withBorder
            className="mt-12 hidden lg:block lg:w-[20rem] lg:h-[18.75rem] border-2 border-primary"
            src="/assets/images/about/profile.jpg"
          />
        </div>
        <div className="mt-10 flex flex-wrap gap-6">
          {CAPABILITIES.map((capability) => (
            <CapabilityCard key={capability.title} {...capability} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SectionWrapper(About, 'about');
