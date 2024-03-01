import axios from 'axios';
import {API_ENDPOINT} from './config';

/**
 * Retrieves the contest ranking information for a given username.
 * @param {string} username - The username of the user.
 * @returns {Promise<UserContestData>} - The contest ranking information.
 * @property {string} level - The user's rank.
 * @property {number} rating - The user's rating.
 * @property {number} attended - The number of contests the user has attended.
 */
export async function getContestRankingInfo(username) {
  // Fetch user info
  const userInfo = await axios
    .get(`${API_ENDPOINT}/user.info?handles=${username}`)
    .then((res) => res.data.result[0])
    .catch((err) => {
      console.error('error fetching user info', err);
      return null;
    });

  // Fetch user contest info
  const userContestInfo = await axios
    .get(`${API_ENDPOINT}/user.rating?handle=${username}`)
    .then((res) => res.data.result)
    .catch((err) => {
      console.error('error fetching user contest info', err);
      return null;
    });

  return {
    level: userInfo.rank,
    rating: userInfo.rating,
    attended: userContestInfo.length,
  };
}

/**
 * @typedef {Object} UserContestData
 * @property {string} level
 * @property {number} rating
 * @property {number} attended
 */
