const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeat: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    let modifiedStr = str
    let additions = []
    let mod = []
    if (options.hasOwnProperty('addition')) {
        if (options.hasOwnProperty('additionRepeatTimes')) {
            for (let i = 0; i < options.additionRepeatTimes; i++) {
                additions.push(String(options.addition))
            }
        } else {
            additions.push(String(options.addition))
        }
    }
    if (options.hasOwnProperty('additionSeparator')) {
        additions = additions.join(options.additionSeparator)
    } else {
        additions = additions.join('|')
    }
    modifiedStr += additions
    if (!options.hasOwnProperty('repeatTimes')) {
        mod.push(modifiedStr)
    } else {
        for (let i = 0; i < options.repeatTimes; i++) {
            mod.push(modifiedStr)
        }
    }

    if (options.hasOwnProperty('separator')) {
        return mod.join(options.separator)
    }
    return mod.join('+')
}



module.exports = {
    repeater
};