/**
 * Checks if a value provided is of type string and is a valid URL. If the value is not a string
 * or it is an empty string then the function returns false
 *
 * @example const valid = isValidURL('http://www.google.com') // returns true
 */
declare const isValidURL: (input: string) => boolean;
export default isValidURL;
