/*
 * @lc app=leetcode id=383 lang=javascript
 *
 * [383] Ransom Note
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

// if the magazine length is less than ransomNote
  // return false
// iterate over the magazine string and store every letter and it's occurence in a hash map
// iterate over the ransomNote string and decrement letter occurence in a hash map if the letter is found
  //if letter is not found
    // return false
// iterate over the hash map
  //if any occurennce is less than 0
    // return false
// return true

var canConstruct = function(ransomNote, magazine) {
    var hashMap = {};
    for (var i = 0; i < magazine.length; i++) {
      if (!hashMap[magazine[i]]) {
        hashMap[magazine[i]] = 1;
      } else {
        hashMap[magazine[i]]++;
      }
    }
    for (var i = 0; i < ransomNote.length; i++) {
      if (!hashMap[ransomNote[i]]) {
        return false;
      } else {
        hashMap[ransomNote[i]]--;
      }
    }
    return true;
};
// @lc code=end

