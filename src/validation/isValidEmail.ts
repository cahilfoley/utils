import emailPattern from '../internal/patterns/emailAddress'

/**
 *
 * Tests if the input string is in the form of a valid email address
 *
 * @param text The text to validate
 *
 * @category validation
 *
 * @example isValidEmail(`no spaces@sham.co`) // => false
 *
 */
export function isValidEmail(text: string): boolean {
  return emailPattern.test(text)
}

export default isValidEmail
module.exports = isValidEmail
module.exports.isValidEmail = isValidEmail
module.exports.default = isValidEmail
