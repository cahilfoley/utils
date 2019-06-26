/** Regular expression to match URL patterns, developed using this handy tool https://regex101.com/r/lQ1nI3/1 */
const urlRegex: RegExp = new RegExp(
  [
    '^(https?:\\/\\/)', // Protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}', // Internet routable host
    '|([a-z\\d]([a-z\\d-]*[a-z\\d])*)', // Host on same domain
    '|(\\d{1,3}\\.){3}\\d{1,3})', // IP address
    '(\\:\\d+)?', // Optional port
    '(\\/[-a-z\\d%_.~+]*)*', // Path
    '(\\?(?:[;&a-z\\d%_.~+=\\-/]+[^#])*)?', // Optional query string
    '(\\#[-a-z\\d_]*)?$', // Optional anchor hash
  ].join(''),
  'i',
)

export default urlRegex
