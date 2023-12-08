'use client';

import React from 'react';
import {motion} from 'framer-motion';
import {SectionWrapper} from './hoc';
import {textVariant} from '@/utils/motion';
import {styles} from '@/app/styles';

const Contact = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>We&apos;re just a few clicks away</p>
      <h1 className={styles.sectionHeadText}>Contact</h1>
    </motion.div>
  </>
);

export default SectionWrapper(Contact, 'contact');
