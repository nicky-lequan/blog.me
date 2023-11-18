'use client';

import React from 'react';
import {motion} from 'framer-motion';
import {SectionWrapper} from './hoc';
import {textVariant} from '@/utils/motion';
import {styles} from '@/app/styles';

const Skills = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My capabilities</p>
        <h1 className={styles.sectionHeadText}>Skills</h1>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Skills, 'skills');
