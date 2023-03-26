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
var floodFill = function(image, sr, sc, color) {
    // if the current color is the same as the provided color
    if (image[sr][sc] === color) {
      // return image
      return image;
    }
    // memorize the starting color
    var startingColor = image[sr][sc];
    // fill the staring pixel with the provided color
    image[sr][sc] = color;
    var m = image.length - 1;
    var n = image[0].length - 1;
    // check every direction around the starging pixel
      // if the current pixel is in bounds and has the starting color
        // call the function with the current position
    // if the sr is less then m and the pixel at sr + 1 and sc is equal to the starting color
    if (sr < m && image[sr + 1][sc] === startingColor) {
      image = floodFill(image, sr + 1, sc, color);
    }
    // if the sr is greater than 0 and the pixel at sr - 1 and sc is equal to the starting color
    if (sr > 0 && image[sr - 1][sc] === startingColor) {
      image = floodFill(image, sr - 1, sc, color);
    }
    // if the sc is less then n and the pixel at sc + 1 and sr is equal to the starting color
    if (sc < n && image[sr][sc + 1] === startingColor) {
      image = floodFill(image, sr, sc + 1, color);
    }
    // if the sc is greater than 0 and the pixel at sc - 1 and sr is equal to the starting color
    if (sc > 0 && image[sr][sc - 1] === startingColor) {
      image = floodFill(image, sr, sc - 1, color);
    }
    //return image
    return image;
};

// @lc code=end

