/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  if (!N) return 0
  let arr = [1, 1]
  for (let i = 0; i < N - 2; i++) {
    let k = arr[0]
    arr[0] = arr[0] + arr[1]
    arr[1] = k
  }
  return arr[0]
}
// @lc code=end
