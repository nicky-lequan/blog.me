import About from '../components/About';
import Work from '@/components/Work';
import CompetitiveProgramming from '@/components/CompetitiveProgramming';
import Skills from '@/components/Skills';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Accomplishments from '@/components/Accomplishments';

function HomePage() {
  return (
    <div className="px-8 flex flex-col bg-neutral rounded-2xl drop-shadow-lg">
      <About />
      <Work />
      <Skills />
      <Portfolio />
      <CompetitiveProgramming />
      <Accomplishments />
      {/* <Testimonials /> */}
      <Contact />
    </div>
  );
}

export default HomePage;
