'use client';

import React from 'react';
import {motion} from 'framer-motion';
import {SectionWrapper} from './hoc';
import {textVariant} from '@/utils/motion';
import {styles} from '@/app/styles';

const Testimonials = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>What others say about me</p>
      <h1 className={styles.sectionHeadText}>Testimonials</h1>
    </motion.div>
  </>
);

export default SectionWrapper(Testimonials, 'testimonials');
