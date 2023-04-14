/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

// if string is empty, return 0
// if string length is 1, return 1
// initialize a hashmap to store character as a key and its last index as value
// initialize maxLength and currLength variables
// initialize start variable to keep track of the starting index of the substring with unique characters
// iterate over the string
  // if the current character is in the hashmap and the last index for this character is greater or equal to the start
    // set the starting index of the substring with unique characters to the current character's last index + 1
  // add the current character and it's index to the hashmap
  // set currLength to current index - starting index
  // set maxLength to largest value (currLenght or maxLength)
// return maxLength

  var lengthOfLongestSubstring = function(s) {
    if (s.length === 1) return 1;
    if (s.length === 0) return 0;
    var lastIndexes = {};
    var maxLength = 0;
    var currLength = 0;
    var start = 0;
    for (var i = 0; i < s.length; i++) {
        if (lastIndexes[s[i]] !== undefined && lastIndexes[s[i]] >= start) {
          start = lastIndexes[s[i]] + 1;
        }
      lastIndexes[s[i]] = i;
      currLength = i - start + 1;
      maxLength = Math.max(currLength, maxLength);
    }
    return maxLength;
};
// @lc code=end

