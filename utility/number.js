/**
 * Converts a number to a string representation with commas.
 * @param {number} num - The number to convert.
 * @returns {string} The string representation of the number with commas.
 */
export const toStringWithComma = (num) => {
    if (!num) return '';
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
