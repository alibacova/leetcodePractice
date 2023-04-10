/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (!head) {
      return false;
    }
    // create a pos variable to keep track of the current index
    // until node points to null or current index is more than the index in the hash map
      // increment index
      // add the node value and index to the hashmap
      // move the head to the next node
    // create a hash map and store the values of the nodes in the linked list with their corresponding indexes
    var pos = 0;
    var hashMap = {};
    while (head) {
      if (hashMap[pos]) {
        return true;
      }
      hashMap[pos] = head.val;
      pos++;
      head = head.next;
    }
    return false;
};
// @lc code=end

