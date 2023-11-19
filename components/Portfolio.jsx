'use client';

import React from 'react';
import {motion} from 'framer-motion';
import {SectionWrapper} from './hoc';
import {textVariant} from '@/utils/motion';
import {styles} from '@/app/styles';

const Portfolio = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>My works</p>
      <h1 className={styles.sectionHeadText}>Portfolio</h1>
    </motion.div>
  </>
);

export default SectionWrapper(Portfolio, 'portfolio');
