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
  for (let i = 0; i < nums.length; i++) {
    let index = nums.indexOf(target - nums[i])
    if (index > -1 && index !== i) {
      return [i, index]
    }
  }
}
// @lc code=end
