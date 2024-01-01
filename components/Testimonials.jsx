'use client';

import React from 'react';
import {motion} from 'framer-motion';
import {SectionWrapper} from './hoc';
import {textVariant} from '@/utils/motion';

import {fadeIn} from '@/utils/motion';
import SlidingCarousel from './SlidingCarousel';

const Testimonials = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className="md:text-[14px] text-[10px] text-gray-700 dark:text-gray-500 uppercase tracking-wider">
        Shoutouts
      </p>
      <h1 className="text-text font-black md:text-[50px] sm:text-[42px] text-[30px]">
        Testimonials
      </h1>
    </motion.div>

    <motion.div className="mt-8" variants={fadeIn('left', 'tween', 0, 1)}>
      <SlidingCarousel autoplay={false} loop={false} />
    </motion.div>
  </>
);

export default SectionWrapper(Testimonials, 'testimonials');
