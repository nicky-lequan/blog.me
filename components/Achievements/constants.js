import {
  AcademicCap,
  BuildingOffice2Icon,
  CodeBracketIcon,
  CodeforcesIcon,
  IdentificationIcon,
  TrophyIcon,
  UserGroupIcon,
} from '../Icons';
import amazonEksJamSingaporeImage from '/public/assets/images/achievements/amazon_eks_jam_singapore.png';
import lgCodeJamImage from '/public/assets/images/achievements/lg_code_jam.png';
import awsJamImage from '/public/assets/images/achievements/aws_jam.png';
import awsSapImage from '/public/assets/images/achievements/aws_sap.png';
import codeforcesSpecialistImage from '/public/assets/images/achievements/codeforces_specialist.png';
import csYonseiImage from '/public/assets/images/achievements/cs_yonsei.png';
import lgcnsStartImage from '/public/assets/images/achievements/lgcns_start.png';

export const INITIAL_ACHIEVEMENTS_COUNT = 4;
export const LOAD_MORE_ACHIEVEMENTS_COUNT = 2;
export const ALL_ACHIEVEMENTS = [
    {
      title: 'Amazon EKS JAM Singapore Facilitator',
      subtitle: '25 OCT 2023',
      icon: <UserGroupIcon />,
      color: 'orange',
      imageSrc: amazonEksJamSingaporeImage,
    },
    {
      title: '24th Place, LG Code Jam',
      subtitle: '15 SEP 2023',
      icon: <CodeBracketIcon />,
      color: 'pink',
      imageSrc: lgCodeJamImage,
    },
    {
      title: 'AWS JAM Winner',
      subtitle: '20 JUN 2023',
      icon: <TrophyIcon />,
      color: 'orange',
      imageSrc: awsJamImage,
    },
    {
      title: 'AWS Certified Solutions Architect Professional',
      subtitle: '02 FEB 2023',
      icon: <IdentificationIcon />,
      color: 'orange',
      imageSrc: awsSapImage,
    },
    {
      title: 'Codeforces Specialist',
      subtitle: '18 OCT 2020',
      icon: <CodeforcesIcon />,
      color: 'teal',
      imageSrc: codeforcesSpecialistImage,
    },
    {
      title: 'Computer Science B.S. Yonsei, Seoul',
      subtitle: '25 FEB 2019',
      icon: <AcademicCap />,
      color: 'blue',
      imageSrc: csYonseiImage,
    },
    {
      title: 'Software Engineer, LG CNS',
      subtitle: '7 JAN 2019',
      icon: <BuildingOffice2Icon />,
      color: 'pink',
      imageSrc: lgcnsStartImage,
    },
  ];