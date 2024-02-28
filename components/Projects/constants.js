export const INITIAL_LOAD_COUNT = 3;
export const LOAD_MORE_COUNT = 2;
export const ALL_PROJECTS = [
    {
      title: 'Fast Download for TB scale files',
      companyName: 'KRX',
      iconSrc: '/assets/images/company/lg.png',
      position: 'Front End Engineer',
      date: 'Jan 2024 - Feb 2024',
      description: 'A front-end prototype app with multipart download functionality.',
      contributions: [
          'Prototyped a front-end app with Next.js & Tailwindcss',
          'Designed & implemented a multipart download module with Axios.',
          'Reduced download time of 1.2TB file by 40%.',
      ],
      stack: 'Next.js 14, Tailwindcss, Zustand, Axios, Amazon S3 API',
    },
    {
      title: 'Automated Notification System for T4K Truck Customers Feedback',
      companyName: 'GS Global',
      iconSrc: '/assets/images/company/lg.png',
      position: 'Solutions Architect',
      date: 'Dec 2023 - Dec 2023',
      description:
        'An automatic anomaly detection system for T4K truck customers feedback, which scrapes feedbacks from Kakao Talk chat room, analyzes the sentiment, and sends an email to the responsible team.',
      contributions: [
        'Overall system design',
        'Implemented Scrapper: A Python app responsible for automated export of Kakaotalk chat contents.',
        'Implemented Uploader: A Spring Boot app parses chat text, and uploads those parsed text to S3 bucket.',
      ],
      stack:
        'Amazon EC2, AWS Lambda, Amazon S3, Amazon RDS, Amazon Comprehend, Amazon SES, Python, OpenCV, Spring Boot',
    },
    {
      title: 'IP TV Web Server App Mod',
      companyName: 'LG Electronics',
      iconSrc: '/assets/images/company/lg.png',
      position: 'Back End Engineer',
      date: 'Feb 2023 - Nov 2023',
      description:
        'LGE SDP App Modernization project: next generation IP TV web servers.',
      contributions: [
        'Implemented REST APIs for IP TVs: device authentication & initialization based on device meta data.',
        'Reduced execution time of a device initialization API by 50% with executor threads.',
        'Designed & implemented a batch micro service which periodically uploads log files to S3 bucket for monitoring.',
      ],
      stack: 'Spring Boot, MyBatis, MySQL, AWS',
    },
    {
      title: 'NFT Marketplace "Naemo World"',
      companyName: 'Bithumb meta',
      iconSrc: '/assets/images/company/lg.png',
      position: 'Full Stack Engineer',
      date: 'Mar 2022 - Dec 2022',
      description: 'Non-fungible token marketplace for NFT creators and collectors',
      linkText: 'https://naemo.io',
      link: 'https://naemo.io',
      contributions: [
        'My Wallet page & related REST APIs (connext wallet, get balance, etc.)',
        'SNS OAuth (Twitter, Discord, Telegram, Instagram)',
        'SNS Event Mission page & related REST APIs',
        'REST APIs for Ethereum/Solana withdraw',
        'Admin Launchpad List page & related REST APIs. Launchpad is a collection of NFTs in promo.',
      ],
      stack:
        'Spring Boot, Spring Data JPA, QueryDSL-JPA, MySQL, React.js with mobX, AWS',
    },
    {
      title: 'UCMP: Cloud Resource Management Platform',
      companyName: 'LG U+',
      iconSrc: '/assets/images/company/lg.png',
      position: 'Full Stack Engineer',
      date: 'Jul 2021 - Feb 2022',
      description:
        'A platform we can manage standardized GCP/AWS cloud resources & projects within a few clicks.',
      contributions: [
        'Implemented 2FA via email',
        'Sign up, sign out page & related REST APIs',
        'Cloud resource creation page & related REST APIs',
        'Email notification using Amazon SES',
      ],
      stack: 'Spring Boot, MyBatis, Thymeleaf, React.js, MySQL, AWS, Github APIs',
    },
    {
      title: 'Life Insurence Point Platform "P3"',
      companyName: 'Hanwha',
      iconSrc: '/assets/images/company/lg.png',
      position: 'Full Stack Engineer',
      date: 'Feb 2021 - Jun 2021',
      description:
        'Reliable point management based on blockchain ledger.',
      contributions: [
        'Point transaction REST APIs; payment, transfer, refund, etc.',
        'Admin: point usage history page & related REST APIs',
      ],
      stack: 'Spring Boot, MyBatis, React.js, MySQL, AWS',
    },
    {
      title: '"Okimoki": Coffee Order Chatbot for LG CNSers',
      companyName: 'Okimoki',
      iconSrc: '/assets/images/company/lg.png',
      position: 'Back End Engineer',
      date: 'Jan 2020 - Dec 2020',
      description:
        'Order your coffee inside Kakao talk.',
      contributions: [
        'Designed & implemented 3 back-end microservices: store, menu, order.',
        'Coffee coupon data modeling',
        'Designed & implemented 2FA',
      ],
      stack: 'Spring Boot, Spring Data JPA, Spring Webflux, Postgre SQL, AWS',
    },
  ];

  