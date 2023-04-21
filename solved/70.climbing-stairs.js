/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var last = 1;
    var secondToLast = 0;
    var temp;
    while (n > 0) {
      temp = last;
      last += secondToLast;
      secondToLast = temp;
      n--;
    }
    return last;
};
// @lc code=end

