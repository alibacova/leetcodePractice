/*
 * @lc app=leetcode id=150 lang=javascript
 *
 * [150] Evaluate Reverse Polish Notation
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  var intermediateRes = [];
  var operand1, operand2;
  for (var i = 0; i < tokens.length; i++) {
      if (tokens[i] === '+') {
          operand2 = Number(intermediateRes.pop());
          operand1 = Number(intermediateRes.pop());
          intermediateRes.push(operand1 + operand2);
      } else if (tokens[i] === '-') {
          operand2 = Number(intermediateRes.pop());
          operand1 = Number(intermediateRes.pop());
          intermediateRes.push(operand1 - operand2);
      } else if (tokens[i] === '*') {
          operand2 = Number(intermediateRes.pop());
          operand1 = Number(intermediateRes.pop());
          intermediateRes.push(operand1 * operand2);
      } else if (tokens[i] === '/') {
          operand2 = Number(intermediateRes.pop());
          operand1 = Number(intermediateRes.pop());
          if (operand2 === 0) {
              intermediateRes.push(NaN);
          }
          intermediateRes.push(Math.trunc(operand1 / operand2));
      } else {
          intermediateRes.push(tokens[i]);
      }
  }
  return intermediateRes[0];
};
// @lc code=end

