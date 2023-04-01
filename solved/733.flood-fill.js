/*
 * @lc app=leetcode id=733 lang=javascript
 *
 * [733] Flood Fill
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */

// if the pixel at (sr, sc) is equal to color
  // return image because it is already colored in target color
// initialize starting color and assign it to the current color of the starting pixel
// define a color function that will color the current pixel and its neighbors
// assign target color to current pixel
// if pixel is not out of bounds and is equal to the starting color
  // color the pixel and check its neighboring pixels
// return image

var floodFill = function(image, sr, sc, color) {
  if (image[sr][sc] === color) {
    return image;
  }
  var initColor = image[sr][sc];
  var colorFunc = (image, sr, sc, color) => {
    if (sr >= image.length || sr < 0 || sc >= image[0].length || sc < 0 || image[sr][sc] !== initColor) {
      return image;
    }
    image[sr][sc] = color;
    colorFunc(image, sr + 1, sc, color);
    colorFunc(image, sr - 1, sc, color);
    colorFunc(image, sr, sc + 1, color);
    colorFunc(image, sr, sc - 1, color);
  }
  colorFunc(image, sr, sc, color);
  return image;
};

// @lc code=end

