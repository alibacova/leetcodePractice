/*
 * @lc app=leetcode id=57 lang=javascript
 *
 * [57] Insert Interval
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */

// var insert = function(intervals, newInterval) {
//   var result = [];
//   if (intervals.length === 0) {
//     return [newInterval];
//   }
//   for (var i = 0; i < intervals.length; i++) {
//     //DONT OVERLAP
//     // if new interval comes after the currInterval, add currInt to result
//     if (!newInterval || newInterval[0] > intervals[i][1]) {
//       result.push(intervals[i]);
//       // if new interval comes before the currInterval, add newInterval to result
//     } else if (newInterval[1] < intervals[i][0]) {
//       result.push(newInterval);
//       newInterval = null;
//       result.push(intervals[i]);
//       //OVERLAP
//       // if the intervals overlap, reassign values for newInterval
//     } else {
//     // if (Math.min(newInterval[1], intervals[i][1]) - Math.max(newInterval[0], intervals[i][0]) >= 0) {
//         newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
//         newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
//     }
//   }
//   if (newInterval) {
//     result.push(newInterval);
//   }
//   return result;
// };

var insert = function(intervals, newInterval) {
  if (!intervals.length) {
    return [newInterval];
  }
  var left = [];
  var right = [];
  for (let interval of intervals) {
    if (newInterval[1] < interval[0]) {
      right.push(interval);
    } else if (newInterval[0] > interval[1]) {
      left.push(interval);
    } else {
      newInterval[0] = Math.min(newInterval[0], interval[0]);
      newInterval[1] = Math.max(newInterval[1], interval[1]);
    }
  }
  var result = [...left, newInterval, ...right];
  return result;
};
// @lc code=end

