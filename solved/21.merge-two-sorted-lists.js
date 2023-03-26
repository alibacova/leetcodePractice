/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // initialize a result head variable equal to 0
    // initialize a prev pointer equal to result head
    // while list1 && list2 are not equal to null
      // if list1 is less or equal than list2
        // prev.next = list1
        // prev = list1
        // reassing list1 to be list1.next
      // else
        // prev.next = list2
        // prev = list2
        // reassing list2 to be list2.next
    // if list1 exists
      // point prev to list1
    // if list2 exists
      //point prev to list2
    // return reshead.next
  var resHead = new ListNode();
  var prev = resHead;
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      prev.next = list1;
      prev = list1;
      list1 = list1.next;
    } else {
      prev.next = list2;
      prev = list2;
      list2 = list2.next;
    }
  }
  prev.next = list1 || list2;
  return resHead.next;
};
// @lc code=end

