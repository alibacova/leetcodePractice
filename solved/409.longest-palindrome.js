/*
 * @lc app=leetcode id=409 lang=javascript
 *
 * [409] Longest Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  const letters = {};
  let longestL = 0;
  let wasOneAdded = false;
  for (let letter of s) {
      if (letters[letter] === undefined) {
          letters[letter] = 1;
      } else {
          letters[letter]++;
      }
  }
  for (let letter in letters) {
      const currLetterOccur = letters[letter];
       if (currLetterOccur % 2 === 0) {
           longestL += currLetterOccur;
       } else if (currLetterOccur % 2 === 1 && wasOneAdded) {
           longestL += currLetterOccur - 1;
       } else if (currLetterOccur % 2 === 1 && !wasOneAdded) {
           longestL += currLetterOccur;
           wasOneAdded = true;
       }
  }
  return longestL;
};
// @lc code=end

