
const errorMessage = {
    typeMismatch: (expectedType, actualType) =>
      `Expected type ${expectedType} but found type ${actualType}`,
    arrayObjectMismatch: (expectedType, actualType) =>
      `Expected ${expectedType} but found ${actualType}`,
    arrayLengthMismatch: (expectedLength, actualLength) =>
      `Expected array length ${expectedLength} but found ${actualLength}`,
    elementMismatch: (expected, actual) =>
      `Expected "${expected}" but found "${actual}"`,
    keyMismatch: (key, expected, actual) =>
      `Expected property "${key}" with value "${expected}" but found "${actual}"`,
    contentMismatch: (expected, actual) =>
      `Expected ${JSON.stringify(expected)} but found ${JSON.stringify(actual)}`
}

module.exports = errorMessage
