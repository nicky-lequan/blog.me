'use client';

import Image from 'next/image';
import Link from 'next/link';
import {fadeIn} from '@/utility/motion';
import {numberWithCommas} from '@/utility/number';
import {Typography} from '@/providers/AppProvider';
import {motion} from 'framer-motion';

function CPCard({
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
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{once: true}}
      variants={fadeIn('up', 'spring', 0.5 * index, 0.75)}
      whileHover={{scale: 1.05}}
      whileTap={{scale: 1}}
      className="min-w-0 sm:min-w-[25rem] md:min-w-[27.5rem] max-w-[30rem] green-violet-gradient p-[0.063rem] rounded-[1.25rem] drop-shadow-xl">
      <Link href={linkUrl}>
        <div className="bg-white/90 dark:bg-slate-950/90 rounded-[1.25rem]">
          <div className="p-4 flex flex-col sm:flex-row justify-between gap-2 sm:gap-0">
            <div className="flex flex-col space-y-2">
              <div className="flex flex-row space-x-1 items-center">
                <Image src={iconSrc} alt={name} width={52} height={52} />
                <Typography variant="h4" className="font-heavydata">
                  {name}
                </Typography>
              </div>

              <div className="py-2 sm:min-w-[21rem] grid grid-cols-4 grid-flow-row gap-4 sm:gap-0">
                <div className="flex flex-col items-center gap-1">
                  <Typography
                    variant="small"
                    className="font-semibold text-stone dark:text-stone-400 font-heavydata">
                    Rating
                  </Typography>
                  <Typography
                    variant="small"
                    className="text-lg font-medium leading-8 font-heavydata">
                    {numberWithCommas(currentRating)}
                  </Typography>
                </div>

                <div className="flex flex-col items-center gap-1">
                  <Typography
                    variant="small"
                    className="font-semibold text-stone dark:text-stone-400 font-heavydata">
                    Level
                  </Typography>
                  <Typography
                    variant="small"
                    className="text-lg font-medium leading-8 font-heavydata">
                    {level}
                  </Typography>
                </div>

                <div className="flex flex-col items-center gap-1">
                  <Typography
                    variant="small"
                    className="font-semibold text-stone dark:text-stone-400 font-heavydata">
                    Rank
                  </Typography>
                  <Typography
                    variant="small"
                    className="text-lg font-medium leading-8 font-heavydata">
                    {numberWithCommas(rank)}
                  </Typography>
                </div>

                <div className="flex flex-col items-center gap-1">
                  <Typography
                    variant="small"
                    className="font-semibold text-stone dark:text-stone-400 font-heavydata">
                    Attended
                  </Typography>
                  <Typography
                    variant="small"
                    className="text-lg font-medium leading-8 font-heavydata">
                    {numberWithCommas(attended)}
                  </Typography>
                </div>
              </div>
            </div>
            <div className="ml-0 sm:ml-2 py-4 px-6 w-full sm:max-w-[6rem] flex flex-col bg-slate-400/10 dark:bg-[#303542]/20 rounded-2xl items-center justify-center gap-1 shadow-md">
              <Typography
                variant="small"
                className="text-sm sm:text-lg font-semibold text-stone dark:text-stone-400 font-heavydata">
                Top
              </Typography>
              <Typography
                variant="lead"
                className="text-xl sm:text-2xl font-bold font-heavydata">
                {top.toFixed(1)}
                <span className="text-xs">&nbsp;%</span>
              </Typography>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default CPCard;
