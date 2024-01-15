'use client';

import {motion} from 'framer-motion';
import {slideIn, textVariant} from '@/utils/motion';
import SectionWrapper from './hoc/SectionWrapper';
import ContactForm from './ContactForm';
import EarthCanvas from './EarthCanvas';
import StarsCanvas from './Stars';

function Contact() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="md:text-[16px] text-[12px] text-gray-700 dark:text-gray-500 uppercase tracking-wider">
          Tell me about your company
        </p>
        <h1 className="text-text font-black md:text-[50px] sm:text-[42px] text-[30px]">
          Contact
        </h1>
      </motion.div>

      <div className="relative z-0 bg-slate-900 dark:bg-transparent mt-8 xl:flex-row flex-col-reverse flex gap-4 overflow-hidden rounded-[20px]">
        <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className="z-1">
          <ContactForm />
        </motion.div>

        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="xl:w-[30%] xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
          <EarthCanvas />
        </motion.div>
        <StarsCanvas />
      </div>
    </>
  );
}

export default SectionWrapper(Contact, 'contact');
