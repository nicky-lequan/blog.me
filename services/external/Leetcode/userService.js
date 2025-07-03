import axios from 'axios';
import {API_ENDPOINT} from './config';
import {httpsAgent} from '../httpsAgent';

/**
 * Fetches user contest ranking info from the Leetcode GraphQL API.
 * @param {string} username - The username of the user.
 * @returns {Promise<UserContestData>} - The user contest ranking info. Returns null on error.
 */
export async function getContestRankingInfo(username) {
  return axios
    .post(
      API_ENDPOINT,
      {
        operationName: 'userContestRankingInfo',
        query: `
            query userContestRankingInfo($username: String!) {
                userContestRanking(username: $username) {
                    attendedContestsCount
                    rating
                    globalRanking
                    totalParticipants
                    topPercentage
                    badge {
                        name
                    }
                }
            }
        `,
        variables: {
          username: username,
        },
      },
      {httpsAgent}
    )
    .then((res) => {
      console.log('lettcode', res.data);
      return res.data.data.userContestRanking;
    })
    .catch((err) => {
      console.error('error fetching user contest ranking info', err);
      return null;
    });
}

/**
 * @typedef {Object} UserContestData
 * @property {number} attendedContestsCount
 * @property {number} rating
 * @property {number} globalRanking
 * @property {number} totalParticipants
 * @property {number} topPercentage
 * @property {Badge} badge
 */

/**
 * @typedef {Object} Badge
 * @property {string} name
 */
