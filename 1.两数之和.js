/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let obj = {}
  for (let index = 0; index < nums.length; index++) {
    num = nums[index]
    if (num in obj) {
      return [obj[num], index]
    } else {
      obj[target - num] = index
    }
  }
}
// @lc code=end
