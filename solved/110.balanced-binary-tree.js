/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

// if the node is null
  // return true
// initialize leftHeight and rightHight equal to 0
// traverse to the left
  // increment leftHeight
// traverse to the right
  //increment rightHight
// return result of comparing the absolute value of leftHeight - rightHeight to 1
var isBalanced = function(root) {
  var result = true;
  var getHeight = function(node) {
    if (!node) {
      return 0;
    }
    var leftH = getHeight(node.left);
    var rightH = getHeight(node.right);
    if (Math.abs(leftH - rightH) > 1) {
      result = false;
    }
    return Math.max(leftH, rightH) + 1;
  }
  getHeight(root);
  return result;
};
// @lc code=end

