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
    let arrOfNum = n.toString().split('')
    let numbers = arrOfNum.map((curr, index) => {
        let count = Array.from(arrOfNum);
        count.splice(index, 1);
        return parseInt(count.join(''));
    });
    return Math.max(...numbers);
}

module.exports = {
    deleteDigit
};