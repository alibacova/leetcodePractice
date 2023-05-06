/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
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
var isSymmetric = function(root) {
  if (root === null) {
    return true;
  }

  var isValid = function(leftNode, rightNode) {
      if (leftNode === null && rightNode === null) {
          return true;
      } else if (leftNode === null || rightNode === null) {
          return false;
      } else if (leftNode.val === rightNode.val) {
          return isValid(leftNode.left, rightNode.right) && isValid(leftNode.right, rightNode.left);
      } else {
          return false;
      }
  }
  return isValid(root.left, root.right);
};
// @lc code=end

