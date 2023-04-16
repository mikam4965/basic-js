const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  
  let members2 =  members.filter(e => typeof e === 'string' && e !== '' || e == []).map(e => e.trim())
  return members2.flat().sort((a,b)=> a.localeCompare(b)).map(x => x[0]).join('').toUpperCase()
}


module.exports = {
  createDreamTeam
};
