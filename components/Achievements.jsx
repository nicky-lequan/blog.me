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
  Tooltip,
} from '@material-tailwind/react';
import {
  AcademicCap,
  BuildingOffice2Icon,
  CodeBracketIcon,
  CodeforcesIcon,
  GlobeIcon,
  IdentificationIcon,
  TrophyIcon,
} from './Icons';
import Image from 'next/image';

const achievements = [
  {
    title: 'Amazon EKS JAM Singapore Facilitator',
    subtitle: '25 OCT 2023',
    icon: <GlobeIcon />,
    color: 'orange',
    tooltipContent: (
      <Image
        src="/img/achievements/amazon_eks_jam_singapore.png"
        alt="amazon_eks_jam_singapore"
        width={360}
        height={360}
        className="rounded-md"
      />
    ),
  },
  {
    title: '24th Place, LG Code Jam',
    subtitle: '15 SEP 2023',
    icon: <CodeBracketIcon />,
    color: 'pink',
    tooltipContent: (
      <Image
        src="/img/achievements/lg_code_jam.png"
        alt="lg_code_jam"
        width={360}
        height={360}
        className="rounded-md"
      />
    ),
  },
  {
    title: 'AWS JAM Winner',
    subtitle: '20 JUN 2023',
    icon: <TrophyIcon />,
    color: 'orange',
    tooltipContent: (
      <Image
        src="/img/achievements/aws_jam.png"
        alt="aws_jam"
        width={360}
        height={360}
        className="rounded-md"
      />
    ),
  },
  {
    title: 'AWS Certified Solutions Architect Professional',
    subtitle: '02 FEB 2023',
    icon: <IdentificationIcon />,
    color: 'orange',
    tooltipContent: (
      <Image
        src="/img/achievements/aws_sap.png"
        alt="aws_sap"
        width={360}
        height={360}
        className="rounded-md"
      />
    ),
  },
  {
    title: 'Codeforces Specialist',
    subtitle: '18 OCT 2020',
    icon: <CodeforcesIcon />,
    color: 'teal',
    tooltipContent: (
      <Image
        src="/img/achievements/codeforces_specialist.png"
        alt="codeforces_specialist"
        width={360}
        height={360}
        className="rounded-md"
      />
    ),
  },
  {
    title: 'Computer Science B.S. Yonsei, Seoul',
    subtitle: '25 FEB 2019',
    icon: <AcademicCap />,
    color: 'blue',
    tooltipContent: (
      <Image
        src="/img/achievements/cs_yonsei.png"
        alt="cs_yonsei"
        width={360}
        height={360}
        className="rounded-md"
      />
    ),
  },
  {
    title: 'Software Engineer, LG CNS',
    subtitle: '7 JAN 2019',
    icon: <BuildingOffice2Icon />,
    color: 'pink',
    tooltipContent: (
      <Image
        src="/img/achievements/lgcns_start.png"
        alt="lgcns_start"
        width={360}
        height={360}
        className="rounded-md"
      />
    ),
  },
];

const Achievements = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>The moments</p>
      <h1 className={styles.sectionHeadText}>Achievements</h1>
    </motion.div>

    <motion.div
      className="mt-8 p-8 h-[560px] overflow-scroll bg-slate-100 dark:bg-stone-950 rounded-[20px] shadow-inner"
      variants={fadeIn('left', 'tween', 0, 1)}>
      <Timeline>
        {achievements.map((item, index) => (
          <TimelineItem key={index} className="h-28 max-w-[28rem]">
            <TimelineConnector className="!w-[78px]" />
            <Tooltip
              key={index}
              content={item.tooltipContent}
              placement="right"
              className="p-4 bg-neutral2 hidden lg:block shadow-xl">
              <TimelineHeader className="py-3 pl-4 pr-8 relative rounded-[20px] bg-zinc-100 dark:bg-zinc-900  shadow-lg">
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
            </Tooltip>
          </TimelineItem>
        ))}
      </Timeline>
    </motion.div>
  </>
);

export default SectionWrapper(Achievements, 'achievements');
