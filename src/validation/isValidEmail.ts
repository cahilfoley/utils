import emailPattern from '../internal/patterns/emailAddress'

/**
 * Tests if the input string is in the form of a valid email address
 *
 * @example isValidEmail(`no spaces@sham.co`) // => false
 */
const isValidEmail = (input: string): boolean => emailPattern.test(input)

export default isValidEmail
