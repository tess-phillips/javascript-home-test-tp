const assertType = require("./assertModules/assertType")
const assertArrayObject = require("./assertModules/assertArrayObject")
const assertArrayLength = require("./assertModules/assertArrayLength")
const assertElementMismatch = require("./assertModules/assertElementMismatch")

const errorMessage = require("./messages"); //
  
function assertEquals(expected, actual) {
    assertType(expected, actual);
    assertArrayObject(expected, actual);
    assertArrayLength(expected, actual)
    assertElementMismatch(expected, actual)

    // if the values are strings of the same type, length and content etc the lines below check that the strings have the same content
    if (JSON.stringify(expected) !== JSON.stringify(actual)) {
    throw new Error(errorMessage.contentMismatch(expected, actual));
    }
}
  
module.exports = assertEquals