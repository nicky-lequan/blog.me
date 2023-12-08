'use client';

import React from 'react';
import {Avatar} from '@material-tailwind/react';
import CapabilityCard from './CapabilityCard';
import SectionWrapper from './hoc/SectionWrapper';
import {motion} from 'framer-motion';
import {textVariant} from '@/utils/motion';

const capabilities = [
  {
    title: 'Full-stack Engineer',
    iconSrc: '/img/solid_figure_1.png',
  },
  {
    title: 'Backend Engineer',
    iconSrc: '/img/solid_figure_2.png',
  },
  {
    title: 'Solutions Architect',
    iconSrc: '/img/solid_figure_3.png',
  },
  {
    title: 'Content Creator',
    iconSrc: '/img/solid_figure_4.png',
  },
];

const About = () => (
  <motion.div
    variants={textVariant()}
    className="flex flex-row items-start gap-5">
    <div className="flex flex-col justify-center items-center mt-5">
      <div className="w-5 h-5 rounded-full bg-primary" />
      <div className="w-1 sm:h-[520px] h-[480px] bg-gradient-to-b from-primary" />
    </div>
    <div className="lg:px-4">
      <div className="flex flex-row justify-between items-center">
        <div>
          <h1 className="mt-8 font-black text-[40px] xs:text-[50px] sm:text-[60px] lg:text-[80px] lg:leading-[98px]">
            Hi there. I&apos;m <span className="text-primary">JunHa.</span>
          </h1>
          <p className="mt-2 text-gray-700 dark:text-gray-500 font-medium text-[16px] xs:text-[20px] sm:text-[26px] lg:text-[30px] leading-[32px]">
            I&apos;m a full-stack engineer. <br />
          </p>
          <p className="mt-2 lg:pe-12 text-gray-700 dark:text-gray-500 font-medium text-[10px] xs:text-[14px] sm:text-[18px] lg:text-[24px] sm:leading-[24px]">
            K8s, Amazon EKS, Next.js, and Competitive Programming are the things
            that I&apos;m into nowadays. I have other capabilities of course, so
            please take a look at Work section if you wish to see more.
            <br />
            I&apos;m currently open to job opportunities by the way, especially
            those in Canada. So please don&apos;t hesitate to reach me if
            you&apos;re a manager, developer, or whatever your position is.
            Weight training, going to music festivals, phoenix dart, and snow
            boarding are my top hobbies. I watch abc news every morning, like to
            make friends, listen to jazzy-house mix when I work, and I&apos;m
            also an inevitable coffee lover.
          </p>
        </div>
        <Avatar
          variant="circular"
          alt="profile"
          withBorder
          className="mt-12 hidden lg:block lg:w-[320px] lg:h-[300px] border-2 border-primary"
          src="/img/profile.jpg"
        />
      </div>
      <div className="mt-10 flex flex-wrap gap-6">
        {capabilities.map((capability, idx) => (
          <CapabilityCard key={capability.title} index={idx} {...capability} />
        ))}
      </div>
    </div>
  </motion.div>
);

export default SectionWrapper(About, 'about');
