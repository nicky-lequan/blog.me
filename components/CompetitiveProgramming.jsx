'use client';

import React from 'react';
import {motion} from 'framer-motion';
import {SectionWrapper} from './hoc';
import {textVariant} from '@/utils/motion';

import {useTheme} from 'next-themes';
import {useState, useEffect} from 'react';
import CPCard from './CPCard';

const CompetitiveProgramming = () => {
  const {systemTheme, theme} = useTheme();
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    setIsRendered(true);
  }, []);

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
      top: 2.91,
      currentRating: 1993,
      level: 'Knight',
      maxRating: 1993,
      rank: 13164,
      attended: 17,
    },
    {
      name: 'Codeforces',
      iconSrc: '/img/codeforces.png',
      linkUrl: 'https://codeforces.com/profile/jooncco',
      top: 2.77,
      currentRating: 1516,
      level: 'Specialist',
      maxRating: 1516,
      rank: 16627,
      attended: 43,
    },
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="md:text-[16px] text-[12px] text-gray-700 dark:text-gray-500 uppercase tracking-wider">
          Athletes do weight training, programmers do what
        </p>
        <h1 className="text-text font-black md:text-[50px] sm:text-[42px] text-[30px]">
          Competitive Programming
        </h1>
      </motion.div>

      <div className="mt-8 py-4 flex flex-col space-y-4 xl:flex-row xl:space-x-4 xl:space-y-0">
        {isRendered &&
          cards.map((card, index) => (
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
