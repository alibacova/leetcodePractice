/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  // create a hash-map to store s string characters and the number of appearances
  // iterate over string s to fill the hash-map
  // iterate over string t to check if every character can be found in the s hash-map
  // iterate over the string hash-map
    //if the appearance of any letter is more than 1
      //return false
  //return true
  var letters = {};
  for (var i = 0; i < s.length; i++) {
    if (!letters[s[i]]) {
      letters[s[i]] = 1;
    } else {
      letters[s[i]]++;
    }
  }
  for (var j = 0; j < t.length; j++) {
    if (letters[t[j]]) {
      letters[t[j]]--;
    } else {
      return false;
    }
  }
  var lettersCount = Object.values(letters);
  for (var k = 0; k < lettersCount.length; k++) {
    if (lettersCount[k] > 0) {
      return false;
    }
  }
  return true;
};
// @lc code=end

