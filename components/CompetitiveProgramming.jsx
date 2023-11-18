'use client';

import React from 'react';
import {motion} from 'framer-motion';
import {SectionWrapper} from './hoc';
import {textVariant} from '@/utils/motion';
import {styles} from '@/app/styles';

const CompetitiveProgramming = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>This is a weight training</p>
        <h1 className={styles.sectionHeadText}>Competitive Programming</h1>
      </motion.div>
    </>
  );
};

export default SectionWrapper(
  CompetitiveProgramming,
  'competitive-programming'
);
