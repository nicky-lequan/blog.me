'use client';

import React from 'react';
import {motion} from 'framer-motion';
import {SectionWrapper} from './hoc';
import {textVariant} from '@/utils/motion';
import {styles} from '@/app/styles';
import {fadeIn} from '@/utils/motion';
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineIcon,
  Typography,
  TimelineHeader,
} from '@material-tailwind/react';
import {
  AcademicCap,
  BuildingOffice2Icon,
  CodeBracketIcon,
  CodeforcesIcon,
  IdentificationIcon,
  PhotoIcon,
  TrophyIcon,
  UserGroupIcon,
} from './Icons';
import Image from 'next/image';
import {useState} from 'react';

const achievements = [
  {
    title: 'Amazon EKS JAM Singapore Facilitator',
    subtitle: '25 OCT 2023',
    icon: <UserGroupIcon />,
    color: 'orange',
    imageSrc: '/img/achievements/amazon_eks_jam_singapore.png',
  },
  {
    title: '24th Place, LG Code Jam',
    subtitle: '15 SEP 2023',
    icon: <CodeBracketIcon />,
    color: 'pink',
    imageSrc: '/img/achievements/lg_code_jam.png',
  },
  {
    title: 'AWS JAM Winner',
    subtitle: '20 JUN 2023',
    icon: <TrophyIcon />,
    color: 'orange',
    imageSrc: '/img/achievements/aws_jam.png',
  },
  {
    title: 'AWS Certified Solutions Architect Professional',
    subtitle: '02 FEB 2023',
    icon: <IdentificationIcon />,
    color: 'orange',
    imageSrc: '/img/achievements/aws_sap.png',
  },
  {
    title: 'Codeforces Specialist',
    subtitle: '18 OCT 2020',
    icon: <CodeforcesIcon />,
    color: 'teal',
    imageSrc: '/img/achievements/codeforces_specialist.png',
  },
  {
    title: 'Computer Science B.S. Yonsei, Seoul',
    subtitle: '25 FEB 2019',
    icon: <AcademicCap />,
    color: 'blue',
    imageSrc: '/img/achievements/cs_yonsei.png',
  },
  {
    title: 'Software Engineer, LG CNS',
    subtitle: '7 JAN 2019',
    icon: <BuildingOffice2Icon />,
    color: 'pink',
    imageSrc: '/img/achievements/lgcns_start.png',
  },
];

const Achievements = () => {
  const [imageIdx, setImageId] = useState(-1);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>The moments</p>
        <h1 className={styles.sectionHeadText}>Achievements</h1>
      </motion.div>

      <motion.div
        className="mt-8 relative"
        variants={fadeIn('left', 'tween', 0, 1)}>
        <div className="p-8 h-[560px] overflow-scroll bg-slate-200 dark:bg-stone-950 rounded-[20px] shadow-inner">
          <Timeline>
            {achievements.map((item, index) => (
              <TimelineItem
                key={index}
                className="h-28 max-w-[28rem]"
                onMouseEnter={() => setImageId(index)}>
                <TimelineConnector className="!w-[78px]" />
                {/* <Tooltip
              key={index}
              content={item.tooltipContent}
              placement="right"
              className="p-2 bg-neutral2 hidden lg:block shadow-xl"> */}
                <TimelineHeader className="py-3 pl-4 pr-8 relative rounded-[20px] bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-900 dark:hover:bg-zinc-800  shadow-lg">
                  <TimelineIcon
                    className="p-3"
                    variant="ghost"
                    color={item.color}>
                    {item.icon}
                  </TimelineIcon>
                  <div className="flex flex-col gap-1">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="text-text text-sm md:text-md font-semibold font-heavydata">
                      {item.title}
                    </Typography>
                    <Typography
                      variant="small"
                      className="text-xs font-normal text-gray dark:text-gray-400 font-heavydata">
                      {item.subtitle}
                    </Typography>
                  </div>
                </TimelineHeader>
                {/* </Tooltip> */}
              </TimelineItem>
            ))}
          </Timeline>
          {imageIdx === -1 && (
            <div className="absolute right-12 top-12 w-[400px] h-[400px] hidden xl:flex xl:flex-col items-center justify-center rounded-[20px] bg-zinc-50 dark:bg-zinc-900 shadow-xl">
              <PhotoIcon className="!h-24 !w-24" />
              Hover to see an image
            </div>
          )}
          {imageIdx > -1 && (
            <div className="p-2 absolute right-10 top-10 rounded-3xl bg-zinc-50 dark:bg-zinc-900 hidden xl:block shadow-xl">
              <Image
                src={achievements[imageIdx].imageSrc}
                alt="trailer"
                width={400}
                height={400}
                className="bg-white/90 dark:bg-slate-950/90 rounded-[20px]"
              />
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Achievements, 'achievements');
