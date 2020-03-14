/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */
// var preorderTraversal = function(root, arr = []) {
//   if (root == null) {
//     return arr
//   }
//   arr.push(root.val)
//   preorderTraversal(root.left, arr)
//   preorderTraversal(root.right, arr)
//   return arr
// }
var preorderTraversal = function(root) {
  if (root == null) {
    return []
  }
  let arr = []
  let stack = [root]
  while (stack.length > 0) {
    let node = stack.pop()
    if (node !== null) {
      arr.push(node.val)
      if (node.right !== null) {
        stack.push(node.right)
      }
      if (node.left !== null) {
        stack.push(node.left)
      }
    }
  }
  return arr
}
// @lc code=end
