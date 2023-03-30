/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */

// create an object that contains bracket pairs
// create a stack that will keep track of closing brackets
// iterate over the string
  // if the current character is an opening bracket
    // add the closing bracket of the same type to the stack
  // else
    // if the stack is not empty and the last element in the stack is equal to the current character
      // remove the last element from the stack
// if the stack is empty, return true, else -> return false

var isValid = function(s) {
  var brackets = {
      '(': ')',
      '{': '}',
      '[': ']',
  };
  var stack = [];
  for (var i = 0; i < s.length; i++) {
    if (brackets[s[i]]) {
      stack.push(brackets[s[i]]);
    } else if (stack.length > 0 && stack[stack.length - 1] === s[i]) {
        stack.pop();
    } else {
      return false;
    }
  }
  return stack.length === 0;
};
// @lc code=end

