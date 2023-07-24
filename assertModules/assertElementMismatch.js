const errorMessage = require("../messages"); //

/**
 * Identifies which is the first index of the array that differs (if the arrays a different).
 * @param {*} expected 
 * @param {*} actual 
 */
function assertElementMismatch(expected, actual) {
  if (Array.isArray(expected) && Array.isArray(actual)) {
    const mismatchIndex = expected.findIndex((element, index) => element !== actual[index]);
    if (mismatchIndex !== -1) {
      throw new Error(errorMessage.elementMismatch(expected[mismatchIndex], actual[mismatchIndex]));
    }
  }
}

module.exports = assertElementMismatch
