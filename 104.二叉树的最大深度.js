/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
// var maxDepth = function(root, m = 0) {
//   if (!root) return 0
//   m++
//   let m1 = 0,
//     m2 = 0
//   if (root.left) m1 = maxDepth(root.left, m)
//   if (root.right) m2 = maxDepth(root.right, m)
//   return Math.max(m, m1, m2)
// }
var maxDepth = function(root) {
  if (!root) return 0
  let stack = [root],
    n = 0
  while (stack.length) {
    let arr = []
    while (stack.length) {
      let cur = stack.pop()
      if (cur.left) arr.push(cur.left)
      if (cur.right) arr.push(cur.right)
    }
    n++
    stack = arr
  }
  return n
}

// @lc code=end
