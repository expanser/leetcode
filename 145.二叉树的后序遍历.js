/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
// var postorderTraversal = function(root, arr = []) {
//   if (root == null) {
//     return arr
//   }
//   postorderTraversal(root.left, arr)
//   postorderTraversal(root.right, arr)
//   arr.push(root.val)
//   return arr
// }
var postorderTraversal = function(root) {
  if (root == null) {
    return []
  }
  let arr = []
  let stack = []
  while (root || stack.length > 0) {
    if (root.left) {
      stack.push(root)
      root = root.left
    } else if (root.right) {
      stack.push(root)
      root = root.right
    } else {
      arr.push(root.val)
      root = stack.pop()
      if (root && root.left) root.left = null
      else if (root && root.right) root.right = null
    }
  }
  return arr
}
// @lc code=end
