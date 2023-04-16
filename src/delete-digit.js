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
  let newArr =  n.toString().split('').map(Number)
  return newArr.splice(Math.floor(Math.random()*newArr.length),2).sort((a,b) => b-a).join('')
}

module.exports = {
  deleteDigit
};
