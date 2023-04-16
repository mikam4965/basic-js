const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits( n ) {
  /*
  let newArr = n.toString().split('').map(Number)
  while(n == /[^1-9]/g){return newArr.reduce((a,b) => a+b) }
  */
  let newArr = n.toString().split('').map(Number)
  for (let i = 0; i < 10; i++) {
     let num = newArr.reduce((a,b) => a+b) 
      if(num>10){
        return num
      }
      else{
        return num.toString().split('').map(Number).reduce((a,b) => a+b)
      }
  }
}
module.exports = {
  getSumOfDigits
};
