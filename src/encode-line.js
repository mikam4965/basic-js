const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  return str.replace(/(\S)\1*/g, (m, g1) => (m.length > 1 ? m.length : '' ) + g1 );
}

module.exports = {
  encodeLine
};
