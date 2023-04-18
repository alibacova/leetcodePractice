/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// sort the original array
// use 3 pointers: first one is affixed and changes only when all the options for the other two pointers were exhausted;
// second pointer will be adjusted only when the sum is less than 0 meaning that there is no element in the subbarray large enough to get the sum to 0; the other case when it will be adjusted is when the sum is 0
// third pointer will be adjusted when the sum is larger than 0 meaning that there is no element in the subarray small enough to compensate for the highest pointer and get the sum to 0; it will also be adjusted when the sum is 0
// skip duplicates

var threeSum = function(nums) {
  var result = [];
  var sorted = nums.sort((a, b) => a - b);
  for (var i = 0; i < sorted.length; i++) {
      if (i > 0 && sorted[i] === sorted[i - 1]) continue;
      let low = i + 1;
      let high = sorted.length - 1;
      while (low < high) {
          var sum = sorted[low] + sorted[i] + sorted[high];
          if (sum === 0) {
              result.push([sorted[low], sorted[i], sorted[high]]);
              while (sorted[low] === sorted[low + 1]) low++;
              while (sorted[high] === sorted[high - 1]) high--;
              low++;
              high--;
          } else if (sum > 0) {
              high--;
          } else if (sum < 0) {
              low++;
          }
      }
  }
  return result;
};
// @lc code=end

