const errorMessage = require("../messages"); //

/**
 * Asserts if the parameters are of the same type.
 * @param {*} expected 
 * @param {*} actual 
 */
function assertType(expected, actual) {
    if (typeof expected !== typeof actual) {
      throw new Error(errorMessage.typeMismatch(typeof expected, typeof actual));
    }
}

module.exports = assertType
