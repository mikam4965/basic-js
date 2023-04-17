const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let counter = 0;
    arr.forEach((x) => {
      if (Array.isArray(x)) {
        counter += this.calculateDepth(x);
      }
    });
    return counter + (Array.isArray(arr) ? 1 : 0);
  }
}

module.exports = {
  DepthCalculator
};
