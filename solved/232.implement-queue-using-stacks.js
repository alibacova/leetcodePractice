/*
 * @lc app=leetcode id=232 lang=javascript
 *
 * [232] Implement Queue using Stacks
 */

// @lc code=start

var MyQueue = function() {
  this.in = [];
  this.out = [];
};

// when elements are pushed, they are pushed to the first stack with all elements in order
// when an element needs to be popped
// we check if the second stack is empty
  // it is -> push popped elements from the first stack into the second stack (this will allow to insert them in reverse order, the first stack will become empty)
// pop off the last element in the stack
/**
* @param {number} x
* @return {void}
*/
MyQueue.prototype.push = function(x) {
  this.in.push(x);
};

/**
* @return {number}
*/
MyQueue.prototype.pop = function() {
  if (!this.out.length) {
    while (this.in.length) {
      this.out.push(this.in.pop());
    }
  }
  return this.out.pop();
};

/**
* @return {number}
*/
MyQueue.prototype.peek = function() {
  if (!this.out.length) {
    while (this.in.length) {
      this.out.push(this.in.pop());
    }
  }
  return this.out[this.out.length - 1];
};

/**
* @return {boolean}
*/
MyQueue.prototype.empty = function() {
  return (!this.in.length && !this.out.length);
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

