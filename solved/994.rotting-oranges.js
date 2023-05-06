/*
 * @lc app=leetcode id=994 lang=javascript
 *
 * [994] Rotting Oranges
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  let queue = [];
  let freshOs = 0;
  let minCount = 0;
  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
          if (grid[i][j] === 2) {
              queue.push([i,j]);
          } else if (grid[i][j] === 1) {
              freshOs++;
          }
      }
  }
  let directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];
  while (queue.length && freshOs) {
      let size = queue.length
      for (let l = 0; l < size; l++) {
          let currO = queue.shift();
          for (let k = 0; k < directions.length; k++) {
              let row = currO[0] + directions[k][0];
              let col = currO[1] + directions[k][1];
              if (row > -1 && row < grid.length && col > -1 && col < grid[0].length && grid[row][col] === 1) {
                  grid[row][col] = 2;
                  freshOs--;
                  queue.push([row, col]);
              }
          }
      }
      minCount++;
  }
  return freshOs === 0 ? minCount : -1;
};
// @lc code=end

