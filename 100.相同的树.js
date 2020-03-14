/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// var isSameTree = function(p, q) {
//   if (p == null && q == null) {
//     return true
//   }
//   if (p == null || q == null) {
//     return false
//   }
//   if (p.val !== q.val) {
//     return false
//   }
//   return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
// }
var isSameTree = function(p, q) {
  if (p == null && q == null) {
    return true
  }
  if (p == null || q == null) {
    return false
  }
  let stackP = [p]
  let stackQ = [q]
  while (stackP.length > 0 || stackQ.length > 0) {
    let nodeP = stackP.pop()
    let nodeQ = stackQ.pop()
    if (nodeP == null && nodeQ == null) {
      continue
    }
    if (nodeP == null || nodeQ == null) {
      return false
    }
    if (nodeP.val !== nodeQ.val) {
      return false
    }
    stackP.push(nodeP.left)
    stackP.push(nodeP.right)
    stackQ.push(nodeQ.left)
    stackQ.push(nodeQ.right)
  }
  return true
}
// @lc code=end
