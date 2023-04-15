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

// use fast and slow pointers to traverse linked linked
 // if the pointers catch up
   // the list is cyclical
// when traversing the list, use fast in a while loop and check if fast and fast.next are not null

var hasCycle = function(head) {
  var fast = head;
  var slow = head;
  while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
      if (slow === fast) {
          return true;
      }
  }
  return false;
};
// @lc code=end

