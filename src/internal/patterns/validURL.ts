/** Regular expression to match URL patterns, developed using this handy tool https://regex101.com/r/lQ1nI3/1 */
const urlRegex: RegExp = /^(http[s]?:\/\/)?([^:\/\s]+)(:([^\/]*))?(\/\w+\.)*([^#?\s]+)(\?([^#]*))?(#(.*))?$/i

export default urlRegex
