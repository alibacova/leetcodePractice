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

// if intervals is an empty array
  // push the newInterval to intervals
  // return intervals
// iterate over intervals
  // if newInterval overlaps with current interval (the end of newInterval is less than the start of the current interval and the start of the newInterval is greater than the end of the current interval)
    // update the start/end of the newInterval
  // else 
    // 

var insert = function(intervals, newInterval) {
  var res = [];
  var start = 0;
  var end = 1;
  if (!intervals.length) {
    intervals.push(newInterval);
    return intervals;
  }
  for (var i = 0; i < intervals.length; i++) {
    if (intervals[i][start] > newInterval[end]) {
      res.push(newInterval);
      // push the rest of the intervals array
    }
    if (intervals[i][end] >= newInterval[start] && newInterval[start] >= intervals[i][start]) {
      newInterval[start] = intervals[i][start];
    }
  }
};
// @lc code=end

