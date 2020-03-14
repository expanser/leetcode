/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
// var invertTree = function(root) {
//   if (root == null) {
//     return root
//   }
//   ;[root.left, root.right] = [invertTree(root.right), invertTree(root.left)]
//   return root
// }
var invertTree = function(root) {
  if (root == null) {
    return root
  }
  let stack = [root]
  while (stack.length > 0) {
    let node = stack.pop()
    ;[node.left, node.right] = [node.right, node.left]
    if (node.left != null) {
      stack.push(node.left)
    }
    if (node.right != null) {
      stack.push(node.right)
    }
  }
  return root
}
// @lc code=end
