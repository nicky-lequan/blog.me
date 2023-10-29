import React from 'react';
import PokemonCanvas from '@/components/3d/PokemonCanvas';

export default function About(): JSX.Element {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="sm:px-16 px-6 absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-secondary" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-secondary" />
        </div>
        <div>
          <h1 className="font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
            Hi there. I'm <span className="text-secondary">JunHa.</span>
          </h1>
          <p className="w-7/12 text-gray-700 dark:text-gray-500 font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100">
            I'm a full-stack software engineer. <br />
            <br />
            AWS, K8s, Next.js, and Competitive Programming are the things that I'm into nowadays.
            I have more capabilities of course, so please refer to the Skills section if you wish to see more.
            
            I'm currently open for job opportunities by the way, especially those in Canada.  
            So please please don't hesitate if you're a manager, head hunter, or whatever your position is.

            Weight training, watching performances, going to music festivals and snow boarding are my top hobbies.
            I like to listen to jazzy house when I code, and I'm a inevitable coffee lover.
          </p>
        </div>
      </div>

      <PokemonCanvas />

      {/* Contact Me 문구: 
      You're on the right track if you're seeking for a deciplined, self-motivated,
      mission oreinted, and consistently learning engineer.*/}
    </section>
  );
}
