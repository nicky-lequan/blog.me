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
