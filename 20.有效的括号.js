/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let arr = []
  for (let item of s) {
    if (item === '(' || item === '{' || item === '[') {
      arr.push(item)
    } else {
      const head = arr[arr.length - 1]
      if (
        (head === '(' && item === ')') ||
        (head === '{' && item === '}') ||
        (head === '[' && item === ']')
      ) {
        arr.pop()
      } else {
        return false
      }
    }
  }
  return !arr.length
}
// @lc code=end
