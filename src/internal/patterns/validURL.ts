/** Regular expression to match URL patterns, developed using this handy tool https://regexr.com/3sju0 */
const urlRegex: RegExp = new RegExp(
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

export default urlRegex
