/**
 * @module validation
 */

import emailPattern from '../internal/patterns/emailAddress'

/**
 *
 * Tests if the input string is in the form of a valid email address
 *
 * @param text The text to
 * @return Returns true if the input is a valid email address otherwise returns false
 *
 * @example
 * isValidEmail(`no spaces@sham.co`) // => false
 *
 */
export default function isValidEmail(text: string): boolean {
  return emailPattern.test(text)
}
