/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
    return false
  }
  let fast = head.next
  while (head.next) {
    if (fast === head) return true
    head = head.next
    if (fast.next && fast.next.next) {
      fast = fast.next.next
    } else {
      return false
    }
  }
  return false
}
// @lc code=end
