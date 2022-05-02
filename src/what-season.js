const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
    const seasonArr = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter'];

    if (arguments.length == 0) {
        return 'Unable to determine the time of year!';
    }
    if ((!(date instanceof Date)) || (Object.keys(date).length > 0)) {
        throw new Error("Invalid date!");
    }
    if (Object.prototype.toString.call(date) == '[object Date]') {
        return seasonArr[date.getMonth()];
    }

}

module.exports = {
    getSeason
};