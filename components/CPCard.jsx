import Image from 'next/image';
import Link from 'next/link';
import {fadeIn} from '@/utils/motion';
import {numberWithCommas} from '@/utils/numbers';
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
      className="min-w-[23.75rem] sm:min-w-[25rem] md:min-w-[27.5rem] max-w-[32.5rem] green-violet-gradient p-[0.063rem] rounded-[1.25rem] drop-shadow-xl">
      <Link href={linkUrl}>
        <div className="bg-white/90 dark:bg-slate-950/90 rounded-[1.25rem]">
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
                    className="font-semibold text-stone dark:text-stone-400 font-heavydata">
                    Rating
                  </Typography>
                  <Typography
                    variant="small"
                    className="text-xl font-normal font-heavydata">
                    {numberWithCommas(currentRating)}
                  </Typography>
                </div>

                <div className="min-w-[5rem] flex flex-col items-center justify-center gap-1">
                  <Typography
                    variant="small"
                    className="font-semibold text-stone dark:text-stone-400 font-heavydata">
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
                    className="font-semibold text-stone dark:text-stone-400 font-heavydata">
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
                    className="font-semibold text-stone dark:text-stone-400 font-heavydata">
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
            <div className="ml-10 sm:ml-0 px-6 md:px-8 w-[46%] flex flex-col bg-slate-300/20 dark:bg-slate/20 rounded-2xl items-center justify-center gap-1">
              <Typography
                variant="small"
                className="text-sm sm:text-lg font-semibold text-stone dark:text-stone-400 font-heavydata">
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
}

export default CPCard;
