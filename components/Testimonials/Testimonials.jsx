import SectionWrapper from '../hoc/SectionWrapper';
import SlidingCarousel from './SlidingCarousel';
import {TESTIMONIALS} from './constants';

function Testimonials() {
  return (
    <>
      <p className="md:text-[1rem] text-[0.75rem] text-gray-700 dark:text-gray-500 uppercase tracking-wider">
        Shoutouts
      </p>
      <h1 className="text-text font-black md:text-[3.125rem] sm:text-[2.625rem] text-[1.875rem]">
        Testimonials
      </h1>

      <div className="mt-8">
        <SlidingCarousel
          autoplay={false}
          loop={false}
          contents={TESTIMONIALS}
        />
      </div>
    </>
  );
}

export default SectionWrapper(Testimonials, 'testimonials');
