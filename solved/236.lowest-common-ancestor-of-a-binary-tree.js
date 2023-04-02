/*
 * @lc app=leetcode id=236 lang=javascript
 *
 * [236] Lowest Common Ancestor of a Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

// initialize the lowestCommonAncestor variable equal to null
// define a DFS function
  // if the current node is null
    // return false
  // traverse the tree and check if each node is equal to p or q
    // if 2 conditions out of three are met: the left node is equal to p or q, the right node is equal to p or q, the parent node is equal to p or q
      // we found the lowest common ancestor and it is the parent node, reassign the lowestCommonAncestor to the current parent node
    // return true if at least one condition is met
// call DFS with original root
// return lowestCommonAncestor

var lowestCommonAncestor = function(root, p, q) {
  var lca = null;

  var dfs = function (node) {
    if (node === null) {
      return false;
    }
    var left = dfs(node.left);
    var right = dfs(node.right);
    var mid = (node === p || node === q);
    if (right + left + mid > 1) {
      lca = node;
    }
    return left || right || mid;
  }

  dfs(root);
  return lca;
};
// @lc code=end

