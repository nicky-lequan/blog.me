import About from '../components/About/About';
import Projects from '@/components/Projects/Projects';
import CompetitiveProgramming from '@/components/CompetitiveProgramming';
import Skills from '@/components/Skills';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';

function HomePage() {
  return (
    <div className="px-0 sm:px-8 flex flex-col bg-neutral rounded-2xl drop-shadow-lg">
      <About />
      <Projects />
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
