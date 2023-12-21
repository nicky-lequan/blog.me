'use client';

import React from 'react';
import {motion} from 'framer-motion';
import {SectionWrapper} from './hoc';
import {textVariant} from '@/utils/motion';
import {styles} from '@/app/styles';
import {useTheme} from 'next-themes';
import CPCard from './CPCard';

const CompetitiveProgramming = () => {
  const {systemTheme, theme} = useTheme();

  const isDarkTheme = () => {
    return theme === 'system'
      ? systemTheme === 'dark'
        ? true
        : false
      : theme === 'dark'
      ? true
      : false;
  };

  const cards = [
    {
      name: 'LeetCode',
      iconSrc: `/img/leetcode_${isDarkTheme() ? 'dark' : 'light'}.png`,
      linkUrl: 'https://leetcode.com/jooncco',
      top: 2.9,
      currentRating: 1993,
      level: 'Knight',
      maxRating: 1993,
      rank: 12975,
      attended: 17,
    },
    {
      name: 'Codeforces',
      iconSrc: '/img/codeforces.png',
      linkUrl: 'https://codeforces.com/profile/jooncco',
      top: 15.36,
      currentRating: 1416,
      level: 'Specialist',
      maxRating: 1486,
      rank: 21872,
      attended: 42,
    },
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Athletes do weight training, programmers do what
        </p>
        <h1 className={styles.sectionHeadText}>Competitive Programming</h1>
      </motion.div>

      <div className="mt-8 py-4 flex flex-col space-y-4 xl:flex-row xl:space-x-4 xl:space-y-0">
        {cards.map((card, index) => (
          <CPCard
            key={index}
            index={index}
            name={card.name}
            iconSrc={card.iconSrc}
            linkUrl={card.linkUrl}
            top={card.top}
            currentRating={card.currentRating}
            level={card.level}
            maxRating={card.maxRating}
            rank={card.rank}
            attended={card.attended}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(
  CompetitiveProgramming,
  'competitive-programming'
);
