'use client';

import {motion} from 'framer-motion';
import {fadeIn, textVariant} from '@/utility/motion';
import SectionWrapper from './hoc/SectionWrapper';
import SlidingCarousel from './SlidingCarousel';

function Testimonials() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="md:text-[1rem] text-[0.75rem] text-gray-700 dark:text-gray-500 uppercase tracking-wider">
          Shoutouts
        </p>
        <h1 className="text-text font-black md:text-[3.125rem] sm:text-[2.625rem] text-[1.875rem]">
          Testimonials
        </h1>
      </motion.div>

      <motion.div className="mt-8" variants={fadeIn('left', 'tween', 0, 1)}>
        <SlidingCarousel autoplay={false} loop={false} />
      </motion.div>
    </>
  );
}

export default SectionWrapper(Testimonials, 'testimonials');
