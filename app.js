/**
 * Generates a Twitter-style hashtag from a given string.
 *
 * @param {string} str - The input string to generate the hashtag from.
 * @return {string|boolean} The generated hashtag if the input string is valid, false otherwise.
 */

function generateHashtag (str) {
  return str.trim().length > 0 && str.split(" ").join('').length < 140 ? `#${str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')}` : false;
}

console.log(generateHashtag("code" + " ".repeat(140) + "wars"))