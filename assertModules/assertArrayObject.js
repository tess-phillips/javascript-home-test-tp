/**
 * Since we already know expected and equal are of the same type, this checks that they are both arrays. If not, one is an object but not an array.
 * @param {*} expected 
 * @param {*} actual 
 */
function assertArrayObject(expected, actual) {
  if (Array.isArray(expected) != Array.isArray(actual)){
    if (!Array.isArray(expected)) {
      throw new Error(`Expected array but found object`);
    }
    else {
      throw new Error(`Expected object but found array`);
    }
  }
}

module.exports = assertArrayObject
