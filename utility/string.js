/**
 * Converts a string to PascalCase.
 *
 * @param {string} str - The input string.
 * @returns {string} The converted PascalCase string.
 */
export function toPascalCase(str) {
  return str
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

/**
 * Determines the appropriate English article ("a" or "an") for a given word.
 *
 * @param {string} word - The input word.
 * @returns {string} The appropriate article ("a" or "an").
 */
export function getArticle(word) {
  if (!word || typeof word !== 'string') {
    throw new Error('Input must be a valid string.');
  }

  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const firstLetter = word.trim().charAt(0).toLowerCase();

  if (vowels.includes(firstLetter)) {
    return 'an';
  }

  return 'a';
}
