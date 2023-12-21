import React from 'react';
import Image from 'next/image';
import {Typography} from '@material-tailwind/react';
import Link from 'next/link';
import {motion} from 'framer-motion';
import {fadeIn} from '@/utils/motion';
import {numberWithCommas} from '@/utils/numbers';

const CPCard = ({
  index,
  name,
  iconSrc,
  linkUrl,
  currentRating,
  level,
  top,
  maxRating,
  rank,
  attended,
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{once: true}}
      variants={fadeIn('up', 'spring', 0.5 * index, 0.75)}
      whileHover={{scale: 1.05}}
      whileTap={{scale: 1}}
      className="min-w-[380px] sm:min-w-[400px] md:min-w-[440px] max-w-[520px] green-violet-gradient p-[1px] rounded-[20px] drop-shadow-xl">
      <Link href={linkUrl}>
        <div className="bg-white/90 dark:bg-slate-950/90 rounded-[20px]">
          <div className="p-4 flex flex-row justify-between">
            <div className="flex flex-col space-y-2">
              <div className="flex flex-row space-x-1 items-center">
                <Image src={iconSrc} alt={name} width={52} height={52} />
                <Typography variant="h4" className="font-heavydata">
                  {name}
                </Typography>
              </div>

              <div className="py-2 grid grid-cols-2 grid-flow-row gap-4">
                <div className="flex flex-col items-center justify-center gap-1">
                  <Typography
                    variant="small"
                    className="font-semibold text-stone dark:text-stone-400">
                    Rating
                  </Typography>
                  <Typography
                    variant="small"
                    className="text-xl font-normal font-heavydata">
                    {numberWithCommas(currentRating)}
                  </Typography>
                </div>

                <div className="min-w-[80px] flex flex-col items-center justify-center gap-1">
                  <Typography
                    variant="small"
                    className="font-semibold text-stone dark:text-stone-400">
                    Level
                  </Typography>
                  <Typography
                    variant="small"
                    className="text-sm sm:text-lg font-medium font-heavydata">
                    {level}
                  </Typography>
                </div>

                <div className="flex flex-col items-center gap-1">
                  <Typography
                    variant="small"
                    className="font-semibold text-stone dark:text-stone-400">
                    Rank
                  </Typography>
                  <Typography
                    variant="small"
                    className="text-lg font-medium font-heavydata">
                    {numberWithCommas(rank)}
                  </Typography>
                </div>

                <div className="flex flex-col items-center justify-center gap-1">
                  <Typography
                    variant="small"
                    className="font-semibold text-stone dark:text-stone-400">
                    Attended
                  </Typography>
                  <Typography
                    variant="small"
                    className="text-lg font-medium font-heavydata">
                    {numberWithCommas(attended)}
                  </Typography>
                </div>
              </div>
            </div>
            <div className="ml-10 sm:ml-0 px-6 md:px-8 w-[46%] flex flex-col bg-white/40 dark:bg-slate/10 rounded-[20px] items-center justify-center gap-1 shadow-md">
              <Typography
                variant="small"
                className="text-sm sm:text-lg font-semibold text-stone dark:text-stone-400">
                Top
              </Typography>
              <Typography
                variant="lead"
                className="text-2xl sm:text-4xl font-bold font-heavydata">
                {top.toFixed(1)} %
              </Typography>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CPCard;
