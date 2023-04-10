/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// initialize running sum to be equal to the element at 0
// initialize max sum to be equal to the element at 0
// initialize start to be 0
// initialize end to be 0
// iterate over array
  // if after adding the current element the running sum is larger than the max sum
    // reassign the max sum
    // set end to the current index
    // while start is less or equal to end
      // if the running sum - element at start is larger than max sum
        // reassign max sum to be max sum - element at start
        // reassign start to the start + 1
      // else
        // ressing running sum
        // reassing temp start
    // reassing running sum to max sum
var maxSubArray = function(nums) {
    var sum = nums[0];
    var maxSum = nums[0];
    var start = 0;
    var end = 0;
    for (var i = 1; i < nums.length; i++) {
      sum += nums[i];
      if (sum > maxSum) {
        maxSum = sum;
        end = i;
        while (start < end) {
          if (sum - nums[start] > maxSum) {
            maxSum -= nums[start];
          }
          sum -= nums[start];
          start++;
        }
        sum = maxSum;
      }
    }
    return maxSum;
};
// @lc code=end

