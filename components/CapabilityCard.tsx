'use client';
import {fadeIn} from '@/lib/motion';
import {motion} from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import {Tilt} from 'react-tilt';

interface CapabilityCardProps {
  index: number;
  title: string;
  icon: any;
}

export default function CapabilityCard({
  index,
  title,
  icon,
}: CapabilityCardProps): JSX.Element {
  return (
    <Tilt className="sm:w-[180px] w-full">
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w-full green-violet-gradient p-[1px] rounded-[20px] drop-shadow-2xl">
        <div className="bg-neutral rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center">
          <Image src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
}
