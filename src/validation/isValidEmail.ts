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
const isValidEmail = (text: string): boolean => emailPattern.test(text)

export default isValidEmail
