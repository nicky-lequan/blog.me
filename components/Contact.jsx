'use client';

import React from 'react';
import {motion} from 'framer-motion';
import {SectionWrapper} from './hoc';
import {textVariant} from '@/utils/motion';
import {styles} from '@/app/styles';

const Contact = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h1 className={styles.sectionHeadText}>Contact</h1>
      </motion.div>
      Looking for a self-motivated & mission oriented engineer ? Man, you're on
      the right track.
    </>
  );
};

export default SectionWrapper(Contact, 'contact');
