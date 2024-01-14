'use client';

import React from 'react';
import {Avatar} from '@material-tailwind/react';
import CapabilityCard from './CapabilityCard';
import SectionWrapper from './hoc/SectionWrapper';
import {motion} from 'framer-motion';
import {textVariant} from '@/utils/motion';

const capabilities = [
  {
    title: 'Solutions Architect',
    iconSrc: '/img/solid_figure_3.png',
  },
  {
    title: 'Full-stack Engineer',
    iconSrc: '/img/solid_figure_1.png',
  },
  {
    title: 'Backend Engineer',
    iconSrc: '/img/solid_figure_2.png',
  },
  {
    title: 'Problem Solver',
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
    <div className="px-4">
      <div className="flex flex-row justify-between items-center">
        <div>
          <h1 className="mt-8 font-black text-[40px] xs:text-[50px] sm:text-[60px] lg:text-[80px] lg:leading-[98px]">
            Hi there. I&apos;m <span className="text-primary">JunHa.</span>
          </h1>
          <p className="mt-2 text-gray-700 dark:text-gray-500 font-medium text-[16px] xs:text-[20px] sm:text-[26px] lg:text-[30px] leading-[32px]">
            I&apos;M A BUILDER. <br />
          </p>
          <p className="mt-2 lg:pe-12 text-gray-700 dark:text-gray-500 font-medium text-[10px] xs:text-[14px] sm:text-[18px] lg:text-[24px] sm:leading-[24px]">
            I build whatever I want to, with whatever needed.
            <br />
            Recently I&apos;m digging Next.js, Amazon EKS, and Competitive
            Programming with Java. Weight training gives me power and positive
            mindset and that is why I go to the gym at least 3 times a week.
            House music, phoenix darts, computer games and snow boarding are my
            favorite hobbies. I&apos;m an undeniable coffee aficionado.
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
