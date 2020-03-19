/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let left = 0,
    right = x,
    mid
  while (left <= right) {
    mid = parseInt((left + right) / 2)
    if (Math.pow(mid, 2) == x) {
      return mid
    } else if (Math.pow(mid, 2) < x) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return right
}
// @lc code=end
