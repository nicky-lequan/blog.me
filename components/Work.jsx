'use client';

import SectionWrapper from './hoc/SectionWrapper';
import {motion} from 'framer-motion';
import {fadeIn, textVariant} from '@/utils/motion';

import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
  Avatar,
  Badge,
} from '@/providers/AppProvider';

const experiences = [
  {
    title: 'Backend Engineer',
    companyName: 'LG Electronics',
    iconSrc: '/img/company/lg.png',
    date: 'Feb 2023 - Nov 2023',
    description: 'LGE SDP AppMod project: next generation IP TV web servers.',
    contributions: [
      'Implemented REST APIs for IP TVs: authenticates & initializes client module based on device meta data.',
      'Reduced execution time of a device initialization API into half by applying async executors (@Async annotation in Spring).',
      'Designed & implemented a batch micro service which periodically uploads log files to S3 bucket for monitoring.',
    ],
    stack: 'Spring Boot, MyBatis, MySQL, AWS',
  },
  {
    title: 'Full-stack Engineer',
    companyName: 'Bithumb meta',
    iconSrc: '/img/company/bithumb.png',
    date: 'Mar 2022 - Dec 2022',
    description: 'NFT marketplace Naemo World: https://naemo.io',
    contributions: [
      'My Wallet page & related REST APIs (connext wallet, get balance, etc.)',
      'SNS OAuth (Twitter, Discord, Telegram, Instagram)',
      'SNS Event Mission page & related REST APIs',
      'Ethereum/Solana withdraw REST API',
      'Admin Launchpad List page & related REST APIs. Launchpad is a collection of NFTs in promo.',
    ],
    stack:
      'Spring Boot, Spring Data JPA, QueryDSL-JPA, MySQL, React.js with mobX, AWS',
  },
  {
    title: 'Full-stack Engineer',
    companyName: 'LG U+',
    iconSrc: '/img/company/lg.png',
    date: 'Jul 2021 - Feb 2022',
    description:
      'Cloud resource management platform UCMP: a platform we can manage standardized GCP/AWS cloud resources with ease.',
    contributions: [
      'Implemented 2FA via email',
      'Sign up, sign out page & related REST APIs',
      'Cloud resource creation page & related REST APIs',
      'Email notification using Amazon SNS',
    ],
    stack: 'Spring Boot, MyBatis, Thymeleaf, React.js, MySQL, AWS, Github APIs',
  },
  {
    title: 'Full-stack Engineer',
    companyName: 'Hanwha Life Insurance',
    iconSrc: '/img/company/hanwha.png',
    date: 'Feb 2021 - Jun 2021',
    description:
      'Hanhwa point platform P3: reliable point management based on blockchain ledger.',
    contributions: [
      'Point transaction REST APIs (payment, transfer, refund)',
      'Back office: point usage history page & related REST APIs',
    ],
    stack: 'Spring Boot, MyBatis, React.js, MySQL, AWS',
  },
  {
    title: 'Backend Engineer',
    companyName: 'Okimoki',
    iconSrc: '/img/company/okimoki.png',
    date: 'Jan 2020 - Dec 2020',
    description:
      'LG CNS coffee order chatbot Okimoki: order your coffee inside Kakao talk.',
    contributions: [
      'Designed & implemented 3 back-end microservices (store, menu, order)',
      'Coffee coupon data modeling',
      'Designed & implemented user authentication',
    ],
    stack: 'Spring Boot, Spring Data JPA, Spring Webflux, Postgre SQL, AWS',
  },
];

function Work() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="md:text-[1rem] text-[0.75rem] text-gray-700 dark:text-gray-500 uppercase tracking-wider">
          Projects
        </p>
        <h1 className="text-text font-black md:text-[3.125rem] sm:text-[2.625rem] text-[1.875rem]">
          Work Experience.
        </h1>
      </motion.div>

      <motion.div
        className="mt-8 flex flex-col h-[60rem] overflow-scroll px-8 py-10 bg-slate-200 dark:bg-stone-950 rounded-[1.25rem] shadow-inner"
        variants={fadeIn('left', 'tween', 0, 1)}>
        <Timeline>
          {experiences.map((experience, index) => (
            <TimelineItem key={index}>
              <TimelineConnector />
              <TimelineHeader>
                <TimelineIcon className="p-0">
                  <Avatar
                    size="sm"
                    src={experience.iconSrc}
                    alt={experience.companyName}
                    withBorder
                    className="border-gray-200 bg-white"
                  />
                </TimelineIcon>
                <div className="flex gap-4 items-center">
                  <Typography variant="h5" className="font-raleway">
                    {experience.title}
                  </Typography>
                  {index === 0 && (
                    <Badge
                      content="Recent"
                      className="text-[0.5rem] font-bold bg-gradient-to-r from-primary to-indigo-500 dark:via-purple-500 dark:to-pink-500">
                      &nbsp;
                    </Badge>
                  )}
                </div>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <Typography
                  variant="small"
                  className="text-[0.75rem] font-bold font-raleway">
                  Client: {experience.companyName}
                </Typography>
                <Typography
                  variant="small"
                  className="text-[0.75rem] font-normal font-raleway">
                  {experience.date}
                </Typography>
                <ul>
                  <li>
                    <Typography className="font-bold text-stone-600 dark:text-stone font-heavydata text-[0.875rem]">
                      {experience.description}
                    </Typography>
                  </li>
                  {experience.contributions && (
                    <li>
                      <Typography className="font-medium text-stone-600 dark:text-stone font-heavydata text-[0.875rem]">
                        Contributions:
                      </Typography>
                    </li>
                  )}
                  {experience.contributions &&
                    experience.contributions.map((contribution, index) => (
                      <li key={index}>
                        <Typography className="font-medium text-stone-600 dark:text-stone font-heavydata text-[0.875rem]">
                          - {contribution}
                        </Typography>
                      </li>
                    ))}
                  <li>
                    <Typography className="font-medium text-stone-600 dark:text-stone font-heavydata text-[0.875rem]">
                      Stack: {experience.stack}
                    </Typography>
                  </li>
                </ul>
              </TimelineBody>
            </TimelineItem>
          ))}
        </Timeline>
      </motion.div>
    </>
  );
}

export default SectionWrapper(Work, 'work');
