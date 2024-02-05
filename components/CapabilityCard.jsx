'use client';

import Image from 'next/image';
import {Tilt} from 'react-tilt';

function CapabilityCard({index, title, iconSrc}) {
  return (
    <Tilt className="w-full md:w-[12.5rem] max-w-md">
      <div className="w-full green-violet-gradient p-[0.063rem] rounded-[1.25rem] drop-shadow-xl">
        <div
          options={{max: 45, scale: 1, speed: 450}}
          className="bg-white/90 dark:bg-slate-950/90 rounded-[1.25rem] py-5 px-12 min-h-[17.5rem] flex flex-col justify-evenly items-center">
          <Image
            src={iconSrc}
            alt={title}
            width={100}
            height={100}
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-[1.25rem] font-bold text-center">{title}</h3>
        </div>
      </div>
    </Tilt>
  );
}

export default CapabilityCard;
