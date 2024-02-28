import About from '../components/About/About';
import Projects from '@/components/Projects/Projects';
import CompetitiveProgramming from '@/components/CompetitiveProgramming/CompetitiveProgramming';
import Skills from '@/components/Skills/Skills';
import Portfolio from '@/components/Portfolio/Portfolio';
import Testimonials from '@/components/Testimonials/Testimonials';
import Achievements from '@/components/Achievements/Achievements';

function HomePage() {
  return (
    <div className="px-0 sm:px-8 flex flex-col bg-neutral rounded-2xl drop-shadow-lg">
      <About />
      <Projects />
      <Skills />
      <Portfolio />
      <CompetitiveProgramming />
      <Achievements />
      <Testimonials />
    </div>
  );
}

export default HomePage;
