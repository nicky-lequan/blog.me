'use client';

import {motion} from 'framer-motion';
import {slideIn, textVariant} from '@/utility/motion';
import SectionWrapper from './hoc/SectionWrapper';
import ContactForm from './ContactForm';
import EarthCanvas from './EarthCanvas';
import StarsCanvas from './Stars';

function Contact() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="md:text-[1rem] text-[0.75rem] text-gray-700 dark:text-gray-500 uppercase tracking-wider">
          Tell me about your company
        </p>
        <h1 className="text-text font-black md:text-[3.125rem] sm:text-[2.625rem] text-[1.875rem]">
          Contact
        </h1>
      </motion.div>

      <div className="relative z-0 bg-slate-900 dark:bg-transparent mt-8 xl:flex-row flex-col-reverse flex gap-4 overflow-hidden rounded-[1.25rem]">
        <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className="z-1">
          <ContactForm />
        </motion.div>

        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="xl:w-[30%] xl:flex-1 xl:h-auto md:h-[34.375rem] h-[21.875rem]">
          <EarthCanvas />
        </motion.div>
        <StarsCanvas />
      </div>
    </>
  );
}

export default SectionWrapper(Contact, 'contact');
