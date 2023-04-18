/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
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
 * @return {number[][]}
 */

var levelOrder = function(root) {
  var result = [];
  var queue = [root];
  while (queue[0]) {
      const numOfNodes = queue.length;
      const level = [];
      for (var i = 0; i < numOfNodes; i++) {
          const currNode = queue.shift();
          level.push(currNode.val);
          if (currNode.left !== null) {
              queue.push(currNode.left);
          }
          if (currNode.right !== null) {
              queue.push(currNode.right);
          }

      }
      result.push(level);
  }
  return result;
};
// @lc code=end

