'use client';

import {useState} from 'react';
import SectionWrapper from './hoc/SectionWrapper';
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineIcon,
  Typography,
  TimelineHeader,
} from '@/providers/AppProvider';
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

const accomplishments = [
  {
    title: 'Amazon EKS JAM Singapore Facilitator',
    subtitle: '25 OCT 2023',
    icon: <UserGroupIcon />,
    color: 'orange',
    imageSrc: '/assets/images/accomplishments/amazon_eks_jam_singapore.png',
  },
  {
    title: '24th Place, LG Code Jam',
    subtitle: '15 SEP 2023',
    icon: <CodeBracketIcon />,
    color: 'pink',
    imageSrc: '/assets/images/accomplishments/lg_code_jam.png',
  },
  {
    title: 'AWS JAM Winner',
    subtitle: '20 JUN 2023',
    icon: <TrophyIcon />,
    color: 'orange',
    imageSrc: '/assets/images/accomplishments/aws_jam.png',
  },
  {
    title: 'AWS Certified Solutions Architect Professional',
    subtitle: '02 FEB 2023',
    icon: <IdentificationIcon />,
    color: 'orange',
    imageSrc: '/assets/images/accomplishments/aws_sap.png',
  },
  {
    title: 'Codeforces Specialist',
    subtitle: '18 OCT 2020',
    icon: <CodeforcesIcon />,
    color: 'teal',
    imageSrc: '/assets/images/accomplishments/codeforces_specialist.png',
  },
  {
    title: 'Computer Science B.S. Yonsei, Seoul',
    subtitle: '25 FEB 2019',
    icon: <AcademicCap />,
    color: 'blue',
    imageSrc: '/assets/images/accomplishments/cs_yonsei.png',
  },
  {
    title: 'Software Engineer, LG CNS',
    subtitle: '7 JAN 2019',
    icon: <BuildingOffice2Icon />,
    color: 'pink',
    imageSrc: '/assets/images/accomplishments/lgcns_start.png',
  },
];

function Accomplishments() {
  const [imageIdx, setImageId] = useState(-1);

  return (
    <>
      <p className="md:text-[1rem] text-[0.75rem] text-gray-700 dark:text-gray-500 uppercase tracking-wider">
        My small wins
      </p>
      <h1 className="text-text font-black md:text-[3.125rem] sm:text-[2.625rem] text-[1.875rem]">
        Accomplishments
      </h1>

      <div className="relative mt-8">
        <div className="p-8 h-[35rem] overflow-scroll bg-slate-200 dark:bg-stone-950 rounded-[1.25rem] shadow-inner">
          <Timeline>
            {accomplishments.map((item, index) => (
              <TimelineItem
                key={index}
                className="h-28 max-w-[28rem]"
                onMouseEnter={() => setImageId(index)}>
                <TimelineConnector className="!w-[4.875rem]" />
                <TimelineHeader className="py-3 pl-4 pr-8 relative rounded-[1.25rem] bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-900 dark:hover:bg-zinc-800  shadow-lg">
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
              </TimelineItem>
            ))}
          </Timeline>
          {imageIdx === -1 && (
            <div className="absolute right-12 top-12 w-[25rem] h-[25rem] hidden xl:flex xl:flex-col items-center justify-center rounded-xl bg-white dark:bg-zinc-900 shadow-xl">
              <PhotoIcon className="!h-24 !w-24" />
              Hover an event to see image
            </div>
          )}
          {imageIdx > -1 && (
            <div className="p-[0.063rem] green-violet-gradient absolute right-10 top-10 rounded-xl hidden xl:block shadow-xl">
              <div className="p-2 bg-zinc-50 dark:bg-zinc-900 rounded-xl">
                <Image
                  src={accomplishments[imageIdx].imageSrc}
                  alt="trailer"
                  width={400}
                  height={400}
                  priority={true}
                  className="rounded-lg"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default SectionWrapper(Accomplishments, 'accomplishments');
