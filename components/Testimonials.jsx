'use client';

import React from 'react';
import {motion} from 'framer-motion';
import {SectionWrapper} from './hoc';
import {textVariant} from '@/utils/motion';
import {styles} from '@/app/styles';
import {fadeIn} from '@/utils/motion';
import SlidingCarousel from './SlidingCarousel';

const Testimonials = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Well, my colleagues say</p>
      <h1 className={styles.sectionHeadText}>Testimonials</h1>
    </motion.div>

    <motion.div className="mt-8" variants={fadeIn('left', 'tween', 0, 1)}>
      <SlidingCarousel autoplay={false} loop={false} />
    </motion.div>
  </>
);

export default SectionWrapper(Testimonials, 'testimonials');
