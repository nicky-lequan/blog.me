'use client';

import {useState, useEffect} from 'react';
import {useTheme} from 'next-themes';
import SectionWrapper from './hoc/SectionWrapper';
import CPCard from './CPCard';

function CompetitiveProgramming() {
  const {systemTheme, theme} = useTheme();
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    setIsRendered(true);
  }, []);

  function isDarkTheme() {
    return theme === 'system'
      ? systemTheme === 'dark'
        ? true
        : false
      : theme === 'dark'
      ? true
      : false;
  }

  const cards = [
    {
      name: 'LeetCode',
      iconSrc: `/assets/images/leetcode_${
        isDarkTheme() ? 'dark' : 'light'
      }.png`,
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
      iconSrc: '/assets/images/codeforces.png',
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
      <p className="md:text-[1rem] text-[0.75rem] text-gray-700 dark:text-gray-500 uppercase tracking-wider">
        Love problem solving
      </p>
      <h1 className="text-text font-black md:text-[3.125rem] sm:text-[2.625rem] text-[1.875rem]">
        Competitive Programming
      </h1>

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
}

export default SectionWrapper(
  CompetitiveProgramming,
  'competitive-programming'
);
