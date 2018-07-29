/**
 * Checks if a value provided is of type string and has a non-zero length. If the value is not a string
 * or it is an empty string then the function returns false
 *
 * @param {string} text The input string to test
 * @returns {boolean} If the string is not empty
 *
 * @example const valid = isNonEmptyString('hello') // returns true
 */
export const isNonEmptyString = text => {
  if (typeof text === 'string') {
    return text.trim().length > 0
  }
  return false
}

export default isNonEmptyString
