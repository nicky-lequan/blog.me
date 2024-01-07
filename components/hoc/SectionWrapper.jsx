import React from 'react';
import {motion} from 'framer-motion';
import {staggerContainer} from '@/utils/motion';

const SectionWrapper = (Component, idName) => {
  const WrappedSection = () => (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{once: true, amount: 0.25}}
      className="my-14 px-4">
      <span className="hash-span" id={idName}>
        &nbsp;
      </span>
      <Component />
    </motion.section>
  );

  return WrappedSection;
};

export default SectionWrapper;
