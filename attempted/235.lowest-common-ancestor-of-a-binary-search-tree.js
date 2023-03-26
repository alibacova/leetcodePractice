/*
 * @lc app=leetcode id=235 lang=javascript
 *
 * [235] Lowest Common Ancestor of a Binary Search Tree
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
var lowestCommonAncestor = function(root, p, q, lca) {
    // create a lca variable and assign it to the value of the root or passed in lca
    // traverse over the tree to find p & q
    // if p is equal to root.value
      // if q is equal to root.left or root.right
        // return p
      // else
        // return lca
    // if p is less than root value
      // call function with root.left as the root
    // else
      // call function with root.right
  var lca = root || lca;
  if (p.val === root.val) {
    if (q.val === root.left || q.val === root.right) {
      return p;
    }
  } else if (p.val < root.val) {
    return lowestCommonAncestor(root.left, p, q, lca);
  } else {
    return lowestCommonAncestor(root.right, p, q, lca);
  }
};
// @lc code=end

