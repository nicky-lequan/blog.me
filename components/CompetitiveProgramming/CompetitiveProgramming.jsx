import SectionWrapper from '../hoc/SectionWrapper';
import CPCard from './CPCard';
import {
  CP_CARD_FALLBACK_DATA,
  CP_LEETCODE_DATA_IDX,
  CP_CODEFORCES_DATA_IDX,
} from './constants';
import * as LeetcodeUserService from '@/services/external/Leetcode/userService';
import {USERNAME as CP_LEETCODE_USERNAME} from '@/services/external/Leetcode/config';
import * as CodeforcesUserService from '@/services/external/Codeforces/userService';
import {USERNAME as CP_CODEFORCES_USERNAME} from '@/services/external/Leetcode/config';

async function CompetitiveProgramming() {
  const cpCardData = [...CP_CARD_FALLBACK_DATA];

  // Fetch leetcode data and update
  const leetcodeData = await LeetcodeUserService.getContestRankingInfo(
    CP_LEETCODE_USERNAME
  );
  if (leetcodeData) {
    cpCardData[CP_LEETCODE_DATA_IDX] = {
      ...cpCardData[CP_LEETCODE_DATA_IDX],
      level: leetcodeData.badge.name,
      top: leetcodeData.topPercentage,
      currentRating: leetcodeData.rating,
      rank: leetcodeData.globalRanking,
      attended: leetcodeData.attendedContestsCount,
    };
  }

  // Fetch codeforces data and update
  const codeforcesData = await CodeforcesUserService.getContestRankingInfo(
    CP_CODEFORCES_USERNAME
  );
  if (codeforcesData) {
    cpCardData[CP_CODEFORCES_DATA_IDX] = {
      ...cpCardData[CP_CODEFORCES_DATA_IDX],
      level: codeforcesData.level,
      currentRating: codeforcesData.rating,
      attended: codeforcesData.attended,
    };
  }

  return (
    <>
      <p className="md:text-[1rem] text-[0.75rem] text-gray-700 dark:text-gray-500 uppercase tracking-wider">
        Love problem solving
      </p>
      <h1 className="text-text font-black md:text-[3.125rem] sm:text-[2.625rem] text-[1.875rem]">
        Competitive Programming
      </h1>

      <div className="mt-8 py-4 flex flex-col space-y-4 xl:flex-row xl:space-x-4 xl:space-y-0">
        {cpCardData.map((cardData, index) => (
          <CPCard key={index} cardData={cardData} />
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(
  CompetitiveProgramming,
  'competitive-programming'
);
