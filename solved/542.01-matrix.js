/*
 * @lc app=leetcode id=542 lang=javascript
 *
 * [542] 01 Matrix
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */

// create a result matrix
// iterate over the rows of input matrix
  // iterate over the columns of input matrix
    // if the current cell is 0
      //set the corresponding cell in the result matrix to 0
    // if either of 4 adjacent cells is 0
      // set the corresponding cell in the result matrix to 1
    // otherwise set the corresponding cell to the result of getDistance for the current cell

// helper function (getDistance)
// if the cell is 0
  // return 1
// if the cell is out of bounds
  // return 0
// add the result of calling
var updateMatrix = function(mat) {
  var queue = [];
  var directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  for (var i = 0; i < mat.length; i++) {
      for (var j = 0; j < mat[0].length; j++) {
        if (mat[i][j] === 0) {
          queue.push([i, j, 0]);
        } else {
          mat[i][j] = Infinity;
        }
      }
  }
  while (queue.length) {
    var [currX, currY, currDist] = queue.shift();
    if (currDist < mat[currX][currY]) {
      mat[currX][currY] = currDist;
    }
    for (var [x, y] of directions) {
      var [nextX, nextY, nextDist] = [currX + x, currY + y, currDist + 1];
      if (nextX < 0 || nextX > mat.length - 1 || nextY < 0 || nextY > mat[0].length - 1) {
        continue;
      }
      if (mat[nextX][nextY] === Infinity) {
        queue.push([nextX, nextY, nextDist]);
      }
    }
  }
  return mat;
};
// @lc code=end

