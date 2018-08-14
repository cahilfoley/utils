const emailPattern: RegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

/**
 * Tests if the input string is in the form of a valid email address
 *
 * @example isValidEmail(`no spaces@sham.co`) // => false
 */
const isValidEmail = (input: string): boolean => emailPattern.test(input)

export default isValidEmail
