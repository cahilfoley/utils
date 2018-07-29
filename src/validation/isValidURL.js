// Regular expression to match URL patterns, developed using this handy tool https://regexr.com/3sju0
const urlRegex = new RegExp(
  [
    '^(https?:\\/\\/)', // Protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|((d{1,3}.){3}d{1,3}))', // Host name or IP
    '(\\:\\d+)?', // Optional port
    '(\\/[-a-z\\d%_.~+]*)*', // Path
    '(\\?[;&a-z\\d%_.~+=-]*)?', // Optional query string
    '(\\#[-a-z\\d_]*)?$' // Optional anchor hash
  ].join(''),
  'i'
)

/**
 * Checks if a value provided is of type string and is a valid URL. If the value is not a string
 * or it is an empty string then the function returns false
 *
 * @param {string} input The input string to test
 * @returns {boolean} If the string is a valid URL or not
 *
 * @example const valid = isValidURL('http://www.google.com') // returns true
 */
export default input => typeof input === 'string' && urlRegex.test(input)
