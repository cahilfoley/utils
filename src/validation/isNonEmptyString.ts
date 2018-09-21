/**
 *
 * Checks if a value provided is of type string and has a non-zero length. If the value is not a string
 * or it is an empty string then the function returns false
 *
 * @param text The text to validate
 * @return True if the value is an empty string, false otherwise
 *
 * @category validation
 *
 * @example const valid = isNonEmptyString('hello') // => true
 *
 */
export default function isNonEmptyString(text: string): boolean {
  if (typeof text === 'string') {
    return text.trim().length > 0
  }
  return false
}
