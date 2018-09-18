import validURL from '../internal/patterns/validURL'

/**
 *
 * Checks if a value provided is of type string and is a valid URL. If the value is not a string
 * or it is an empty string then the function returns false
 *
 * @param text The text to validate
 * @return Returns true if the input is a valid URL otherwise returns false
 *
 * @category validation
 *
 * @example const valid = isValidURL('http://www.google.com') // returns true
 *
 */
export function isValidURL(text: string): boolean {
  return typeof text === 'string' && validURL.test(text)
}

export default isValidURL
module.exports = isValidURL
module.exports.isValidURL = isValidURL
module.exports.default = isValidURL
