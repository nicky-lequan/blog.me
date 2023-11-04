import React from 'react';
import {motion} from 'framer-motion';
import {staggerContainer} from '@/utils/motion';

export default function SectionWrapper(Component, idName) {
  const WrappedSection = () => {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{once: true, amount: 0.25}}
        className="my-8 sm:px-16 px-6 max-w-7xl">
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

  return WrappedSection;
}
