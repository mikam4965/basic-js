const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let isEmail = email.slice(email.lastIndexOf("@") + 1).match(/[a-zA-Z]+(.*)/)
  return isEmail[0]
}

module.exports = {
  getEmailDomain
};
