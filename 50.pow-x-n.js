/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  let res = 1
  for (let i = n; i != 0; i = parseInt(i / 2)) {
    if (i % 2 != 0) {
      res *= x
    }
    x *= x
  }
  return n < 0 ? 1 / res : res
}
// @lc code=end
