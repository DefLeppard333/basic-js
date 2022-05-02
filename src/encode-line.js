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
    let encodedStr = '';
    let previous = null;
    Array.from(str).forEach((value, index) => {
        if (str[index + 1] == value) {
            if (previous != null) {
                previous++;
            } else {
                previous = 2;
            }
        } else {
            encodedStr += previous != null ? previous + value : value;
            previous = null;
        }
    });
    return encodedStr;
}

module.exports = {
    encodeLine
};