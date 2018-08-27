import validURL from '../internal/patterns/validURL'

/**
 *
 * Checks if a value provided is of type string and is a valid URL. If the value is not a string
 * or it is an empty string then the function returns false
 *
 * @param text The text to validate
 *
 * @category validation
 *
 * @example const valid = isValidURL('http://www.google.com') // returns true
 *
 */
const isValidURL = (text: string): boolean => typeof text === 'string' && validURL.test(text)

export default isValidURL
