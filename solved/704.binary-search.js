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

// initialize min variable equal to 0 to indicate the start of the search range
// initialize max variable equal to the last index of the array to indicate the end of the search range
// initialize mid variable
// while the max is not smaller than min
  // assign mid to be equal the rounded down average of the search range
  // if the element at mid is equal to the target
    // return mid
  // else if the element at mid is less than the target
    // use right half of the range -> reassign the min to be mid + 1
  // otherwise
    // use the left side of the range -> reassign the max to be mid - 1
// return -1 if target was not found

  var search = function(nums, target) {
    var min = 0;
    var max = nums.length - 1;
    while (min <= max) {
      var mid = Math.floor((min + max) / 2);
      if (nums[mid] === target) {
        return mid;
      } else if (nums[mid] > target) {
        max = mid - 1;
      } else {
        min = mid + 1;
      }
    }
    return -1;
  };
// @lc code=end

