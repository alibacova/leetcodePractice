/*
 * @lc app=leetcode id=322 lang=javascript
 *
 * [322] Coin Change
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  var dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let currAmount = 1; currAmount <= amount; currAmount++) {
      for (let coin of coins) {
          if (currAmount >= coin){
              dp[currAmount] = Math.min(dp[currAmount], 1 + dp[currAmount - coin]);
          }
      }
  }
  return dp[amount] > amount ? -1 : dp[amount];
};
// @lc code=end

