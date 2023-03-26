/*
 * @lc app=leetcode id=704 lang=javascript
 *
 * [704] Binary Search
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  // create a midPoint variable and assign it to the index of the middle of the array
  // while the size of the sub-array is larger than
  // if the target is less than the last element in the left sub-array
    // reassign the midPoint to be middle of the left sub-array
  // if the target is larger than the first element in the right sub-array
    // reassign the midPoint to be middle of the right sub-array
  // if the element at the midpoint is equal to target
    // return midPoint
  if (nums.length === 1 && nums[0] === target) {
    return 0;
  }
  var left = 0;
  var right = nums.length - 1;
  while (left < right) {
    var mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    }
  }
  return -1;
};
// @lc code=end

