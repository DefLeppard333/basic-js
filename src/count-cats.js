const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
    let eyes = '^^';
    let arrayOfMatrix = matrix.join(',').split(',');
    let count = 0;
    arrayOfMatrix.forEach(elem => {
        if (elem == eyes) {
            count++;
        }
    });
    return count;

}

module.exports = {
    countCats
};