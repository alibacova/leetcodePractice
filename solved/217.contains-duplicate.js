/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let allNums = new Set(nums);
  return allNums.size !== nums.length;
  // let allNums = {};
  // for (let num of nums) {
  //     if (!allNums[num]) {
  //         allNums[num] = 1;
  //     } else {
  //         return true;
  //     }
  // }
  // return false;
};
// @lc code=end

