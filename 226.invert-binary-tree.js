/*
 * @lc app=leetcode id=226 lang=javascript
 *
 * [226] Invert Binary Tree
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    // if root is empty
      // return root
    // if root has right or left child
      // swap left and right places
      // call the function for the left and right child
  var temp;
  if (root === null) {
    return root;
  } else if (root.left || root.right) {
    temp = root.left;
    root.left = root.right;
    root.right = temp;
    root.left = invertTree(root.left);
    root.right = invertTree(root.right);
  }
  return root;
};
// @lc code=end

