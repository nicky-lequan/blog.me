'use client';

import {fadeIn} from '../utils/motion';
import {motion} from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import {Tilt} from 'react-tilt';

const CapabilityCard = ({index, title, iconSrc}) => (
  <Tilt className="sm:w-[200px] w-full max-w-sm">
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{once: true}}
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="w-full green-violet-gradient p-[1px] rounded-[20px] drop-shadow-xl">
      <div
        options={{max: 45, scale: 1, speed: 450}}
        className="bg-white/90 dark:bg-slate-950/90 rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center">
        <Image
          src={iconSrc}
          alt={title}
          width={100}
          height={100}
          className="w-16 h-16 object-contain"
        />
        <h3 className="text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

export default CapabilityCard;
