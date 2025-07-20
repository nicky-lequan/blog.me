import {
  AcademicCap,
  BuildingOffice2Icon,
  CodeBracketIcon,
  CodeforcesIcon,
  IdentificationIcon,
  TrophyIcon,
  UserGroupIcon,
  FlightIcon,
} from '../Icons';

import gdcContributionAwardImage from '/public/assets/images/newsFeed/gdc_contribution_award.jpeg';
import koreaBusinessTripImage from '/public/assets/images/newsFeed/korea_business_trip.jpg';
import wireWorkSharingImage from '/public/assets/images/newsFeed/wire_work_sharing.jpg';
import graduationImage from '/public/assets/images/newsFeed/graduation.jpg';
import gameloftInternshipImage from '/public/assets/images/newsFeed/gameloft_internship.jpg';

export const INITIAL_NEWSFEED_COUNT = 5; // TODO: Set to 4 if displaying many items for better layout
export const LOAD_MORE_NEWSFEED_COUNT = 2;

export const ALL_NEWSFEED = [
  {
    title: 'GDC Contribution Award',
    subtitle: '20 DEC 2024',
    icon: <TrophyIcon />,
    color: 'orange',
    imageSrc: gdcContributionAwardImage,
  },
  {
    title: 'Agile Wirework Training Session',
    subtitle: '25 OTC 2024',
    icon: <UserGroupIcon />,
    color: 'pink',
    imageSrc: wireWorkSharingImage,
  },
  {
    title: 'Korea Business Trip',
    subtitle: '04 Aug 2024',
    icon: <FlightIcon />,
    color: 'green',
    imageSrc: koreaBusinessTripImage,
  },
  {
    title: 'Computer Engineering B.S., HUST, Hanoi',
    subtitle: '05 SEP 2021',
    icon: <AcademicCap />,
    color: 'blue',
    imageSrc: graduationImage,
  },
  {
    title: 'Gameloft Internship Certificate',
    subtitle: '08 APR 2021',
    icon: <IdentificationIcon />,
    color: 'orange',
    imageSrc: gameloftInternshipImage,
  },
];
