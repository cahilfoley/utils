import validURL from '../internal/patterns/validURL'

/**
 * Checks if a value provided is of type string and is a valid URL. If the value is not a string
 * or it is an empty string then the function returns false
 *
 * @example const valid = isValidURL('http://www.google.com') // returns true
 */
const isValidURL = (input: string): boolean =>
  typeof input === 'string' && validURL.test(input)

export default isValidURL
