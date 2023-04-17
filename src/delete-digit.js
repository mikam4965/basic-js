const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = []
  for (let i = 0; i < n.toString().length; i++) {
    let result = parseInt(n.toString().slice(0, i) + n.toString().slice(i + 1))
    arr.push(result)
  }
  return Math.max(...arr)
}

module.exports = {
  deleteDigit
};
