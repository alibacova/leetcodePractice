/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//create a hashmap to store array's integers and their indexes
//iterate over array
  // create a complement variable that is equal to the target - current element
  // if the complement exists in the hashMap
    //return the complement index and the current index
  // add the current element and its index to the hashmap
var twoSum = function(nums, target) {
  var hashMap = {};
  for (var i = 0; i < nums.length; i++) {
    var complement = target - nums[i];
    if (hashMap[complement] !== undefined) {
      return [hashMap[complement], i];
    }
    hashMap[nums[i]] = i;
  }
};
// @lc code=end

