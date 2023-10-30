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
          <h1 className="mt-2 font-black text-[40px] xs:text-[50px] sm:text-[60px] lg:text-[80px] lg:leading-[98px]">
            Hi there. I'm <span className="text-secondary">JunHa.</span>
          </h1>
          <p className="mt-2 text-gray-700 dark:text-gray-500 font-medium text-[16px] xs:text-[20px] sm:text-[26px] lg:text-[30px] lg:leading-[40px]">
            I'm a full-stack software engineer. <br />
          </p>
          <p className="mt-2 text-gray-700 dark:text-gray-500 font-medium text-[10px] xs:text-[14px] sm:text-[18px] lg:text-[24px] lg:leading-[32px]">
            AWS, K8s, Next.js, and Competitive Programming are the things that
            I'm into nowadays. I have more capabilities of course, so please
            refer to the Skills section if you wish to see more. I'm currently
            open for job opportunities by the way, especially those in Canada.
            So please don't hesitate to reach me if you're a manager, head
            hunter, or whatever your position is. Weight training, watching
            performances, going to music festivals and snow boarding are my top
            hobbies. I listen to jazzy-house mix when I work, and I'm also an
            inevitable coffee lover.
          </p>
        </div>
      </div>

      {/* Contact Me:
      Looking for a self-motivated & mission oriented engineer ?
      Man, you're on the right track.
      */}
    </section>
  );
}
