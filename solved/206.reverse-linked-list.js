/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  var prev = null;
  var curr = head;
  var next = null;
  while (curr !== null) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
  }
  return prev;
  // if (head === null || head.next === null) {
  //     return head;
  // }
  // var reversedList = reverseList(head.next);
  // head.next.next = head;
  // head.next = null;
  // return reversedList;
};
// @lc code=end

