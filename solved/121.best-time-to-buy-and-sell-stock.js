/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
// find the lowest number
// find the largest number with the index after the lowest number
// return the difference between highest and lowest numbers
  var lowestIdx = 0;
  var highestIdx = 0;
  var diff = prices[highestIdx] - prices[lowestIdx];
  for (var i = 1; i < prices.length; i++) {
    if (prices[i] - prices[lowestIdx] > diff) {
      highestIdx = i;
      diff = prices[highestIdx] - prices[lowestIdx];
    } else if (prices[i] < prices[lowestIdx]){
      lowestIdx = i;
      highestIdx = i;
    }
  }
  return diff;
};
// @lc code=end

