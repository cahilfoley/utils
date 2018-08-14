/**
 * Checks if a value provided is of type string and has a non-zero length. If the value is not a string
 * or it is an empty string then the function returns false
 *
 * @example const valid = isNonEmptyString('hello') // returns true
 */
export const isNonEmptyString = (text: string): boolean => {
  if (typeof text === 'string') {
    return text.trim().length > 0
  }
  return false
}

export default isNonEmptyString
