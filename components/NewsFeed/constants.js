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

import amazonEksJamSingaporeImage from '/public/assets/images/newsFeed/amazon_eks_jam_singapore.png';
import lgCodeJamImage from '/public/assets/images/newsFeed/lg_code_jam.png';
import awsJamImage from '/public/assets/images/newsFeed/aws_jam.png';
import awsSapImage from '/public/assets/images/newsFeed/aws_sap.png';
import codeforcesSpecialistImage from '/public/assets/images/newsFeed/codeforces_specialist.png';
import csYonseiImage from '/public/assets/images/newsFeed/cs_yonsei.png';
import lgcnsStartImage from '/public/assets/images/newsFeed/lgcns_start.png';

export const INITIAL_NEWSFEED_COUNT = 5; // TODO: Set to 4 if displaying many items for better layout
export const LOAD_MORE_NEWSFEED_COUNT = 2;

export const ALL_NEWSFEED = [
  {
    title: 'GDC Contribution Award',
    subtitle: '20 DEC 2024',
    icon: <TrophyIcon />,
    color: 'orange',
    imageSrc: '/assets/images/newsFeed/gdc_contribution_award.jfif',
  },
  {
    title: 'Agile Wirework Training Session',
    subtitle: '25 OTC 2024',
    icon: <UserGroupIcon />,
    color: 'pink',
    imageSrc: '',
  },
  {
    title: 'Korea Business Trip',
    subtitle: '04 Aug 2024',
    icon: <FlightIcon />,
    color: 'green',
    imageSrc: '/assets/images/newsFeed/korean_business_trip.jfif',
  },
  {
    title: 'Computer Engineering B.S., HUST, Hanoi',
    subtitle: '05 SEP 2021',
    icon: <AcademicCap />,
    color: 'blue',
    imageSrc: '',
  },
  {
    title: 'Gameloft internship certificate',
    subtitle: '08 APR 2021',
    icon: <IdentificationIcon />,
    color: 'orange',
    imageSrc: '/assets/images/newsFeed/gameloft_internship_certificate.jfif',
  },
];
