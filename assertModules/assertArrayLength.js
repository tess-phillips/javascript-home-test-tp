const errorMessage = require("../messages"); //

/**
 * Asserts if 2 values are of equal length
 * @param {*} expected 
 * @param {*} actual 
 */
function assertArrayLength(expected, actual) {
    if (Array.isArray(expected) && Array.isArray(actual) && expected.length !== actual.length) {
      throw new Error(errorMessage.arrayLengthMismatch(expected.length, actual.length));
    }
}

module.exports = assertArrayLength