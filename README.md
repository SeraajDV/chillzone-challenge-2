# Chill Zone Challenge 2

The marketing team is spending way too much time typing in hashtags.  
Let's help them with our own Hashtag Generator!

## Here's the deal:
- It must start with a hashtag (#).
- All words must have their first letter capitalized.
- If the final result is longer than 140 characters, it must return `false`.
- If the input or the result is an empty string, it must return `false`.

### Example
- `" Hello there thanks for joining"  =>  "#HelloThereThanksForJoining"`
- `"    Hello     World   "           =>  "#HelloWorld"`
- `""                                 =>  false`


```javascript
/**
 * Generates a Twitter-style hashtag from a given string.
 *
 * @param {string} str - The input string to generate the hashtag from.
 * @return {string|boolean} The generated hashtag if the input string is valid, false otherwise.
 */

function generateHashtag(str) {
  return str.trim().length > 0 && str.split(" ").join('').length < 140 
    ? `#${str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')}` 
    : false;
}

console.log(generateHashtag("code" + " ".repeat(140) + "wars"))
```
