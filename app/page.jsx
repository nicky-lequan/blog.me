import About from '../components/About/About';
import Work from '@/components/Work';
import CompetitiveProgramming from '@/components/CompetitiveProgramming';
import Skills from '@/components/Skills';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Achievements from '@/components/Achievements';

function HomePage() {
  return (
    <div className="px-0 sm:px-8 flex flex-col bg-neutral rounded-2xl drop-shadow-lg">
      <About />
      <Work />
      <Skills />
      <Portfolio />
      <CompetitiveProgramming />
      <Achievements />
      {/* <Testimandanonials /> */}
      <Contact />
    </div>
  );
}

export default HomePage;
