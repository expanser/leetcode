/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function(root) {
  var inorderTraversal = function(root, arr = []) {
    if (root == null) {
      return arr
    }
    inorderTraversal(root.left, arr)
    arr.push(root.val)
    inorderTraversal(root.right, arr)
    return arr
  }
  let arr = inorderTraversal(root)
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] <= arr[i]) return false
  }
  return true
}
// @lc code=end
