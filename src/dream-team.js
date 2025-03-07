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
    if (Array.isArray(members)) {
        let arrOfStr = members.filter(elem => typeof elem === 'string');
        let str = arrOfStr.toString();
        let modStr = str.replace(/ /g, '').toUpperCase();
        let backToArr = modStr.split(',');
        let firstLetters = [];
        backToArr.map(elem => { firstLetters.push(elem.charAt(0)) });
        let team = firstLetters.sort().join('');
        return team;
    } else {
        return false;
    }
}

module.exports = {
    createDreamTeam
};