import SectionWrapper from '../hoc/SectionWrapper';
import CPCard from './CPCard';
import {CP_DATA} from './constants';

function CompetitiveProgramming() {
  return (
    <>
      <p className="md:text-[1rem] text-[0.75rem] text-gray-700 dark:text-gray-500 uppercase tracking-wider">
        Love problem solving
      </p>
      <h1 className="text-text font-black md:text-[3.125rem] sm:text-[2.625rem] text-[1.875rem]">
        Competitive Programming
      </h1>

      <div className="mt-8 py-4 flex flex-col space-y-4 xl:flex-row xl:space-x-4 xl:space-y-0">
        {CP_DATA.map((card, index) => (
          <CPCard
            key={index}
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
