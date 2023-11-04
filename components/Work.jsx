'use client';

import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import {motion} from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import {SectionWrapper} from './hoc';
import {textVariant} from '@/utils/motion';
import {styles} from '@/app/styles';

const Work = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have experienced so far</p>
        <h1 className={styles.sectionHeadText}>Work Experience.</h1>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Work, 'work');
