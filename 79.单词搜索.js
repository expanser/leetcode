/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
function __exist(board, word, row, col, visited) {
  if (!word.length) {
    return true
  }

  const key = `${row}-${col}`
  if (
    row >= board.length ||
    row < 0 ||
    col >= board[0].length ||
    col < 0 ||
    visited[key] ||
    board[row][col] !== word[0]
  ) {
    return false
  }

  visited[key] = true
  word = word.slice(1)
  const success =
    __exist(board, word, row + 1, col, visited) ||
    __exist(board, word, row - 1, col, visited) ||
    __exist(board, word, row, col + 1, visited) ||
    __exist(board, word, row, col - 1, visited)
  visited[key] = success
  return success
}

var exist = function(board, word) {
  const rowNum = board.length
  const colNum = board[0].length

  for (let i = 0; i < rowNum; ++i) {
    for (let j = 0; j < colNum; ++j) {
      if (board[i][j] === word[0]) {
        const isExist = __exist(board, word, i, j, {})
        if (isExist) return true
      }
    }
  }
  return false
}
// @lc code=end
