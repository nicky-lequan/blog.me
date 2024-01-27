import {motion} from 'framer-motion';
import {staggerContainer} from '@/utility/motion';

function SectionWrapper(Component, idName) {
  const WrappedSection = () => (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{once: true, amount: 0.25}}
      className="mt-8 mb-80 px-8">
      <span className="hash-span" id={idName}>
        &nbsp;
      </span>
      <Component />
    </motion.section>
  );

  return WrappedSection;
}

export default SectionWrapper;
