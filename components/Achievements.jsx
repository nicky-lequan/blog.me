'use client';

import React from 'react';
import {motion} from 'framer-motion';
import {SectionWrapper} from './hoc';
import {textVariant} from '@/utils/motion';
import {styles} from '@/app/styles';
import {fadeIn} from '@/utils/motion';

const Achievements = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Glorious moments</p>
      <h1 className={styles.sectionHeadText}>Achievements</h1>
    </motion.div>

    <motion.div
      className="mt-8"
      variants={fadeIn('left', 'tween', 0, 1)}></motion.div>
  </>
);

export default SectionWrapper(Achievements, 'achievements');
