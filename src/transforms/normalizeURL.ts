/**
 *
 * Sanitises and safely joins sections of a URL, this includes removing duplicate slashes in the path and
 * ensuring correctly formatted protocols.
 *
 * @param urlParts The URL parts to be joined and normalized
 * @return Returns the joined and normalized URL parts as a string
 *
 * @category transforms
 *
 * @example const url = normalizeURL('https://cahilfoley.github.io/', '/utils') // => 'https://cahilfoley.github.io/utils'
 *
 */
export function noramlizeURL(...urlParts: string[]): string {
  const resultArray = []

  // Ignore empty strings at the start
  while (urlParts[0].trim() === '') {
    urlParts.shift()
  }

  // If the first part is a plain protocol we combine it with the next part
  if (urlParts[0].match(/^[^/:]+:\/*$/) && urlParts.length > 1) {
    // Strip any colon or slashes from the protocol
    const protocol = urlParts.shift().replace(/:\/*/, '')
    // Join with two slashes, next section will convert to 3 for file protocol if needed
    urlParts[0] = `${protocol}://` + urlParts[0]
  }

  // There must be two or three slashes in the file protocol, two slashes in anything else.
  urlParts[0] = urlParts[0].match(/^file:\/+/)
    ? urlParts[0].replace(/^([^/:]+):\/*/, '$1:///')
    : urlParts[0].replace(/^([^/:]+):\/*/, '$1://')

  for (let i = 0; i < urlParts.length; i++) {
    let section = urlParts[i]

    if (typeof section !== 'string') {
      throw new TypeError(
        `URL must be a string. Received ${section} as argument index ${i} which is type ${typeof section}`
      )
    }

    if (section === '') {
      continue
    }

    if (i > 0) {
      // Removing the starting slashes for each component but the first.
      section = section.replace(/^[/]+/, '')
    }

    // Removing the ending slashes for each component but the last.
    section =
      i < urlParts.length - 1
        ? section.replace(/[/]+$/, '')
        : // For the last component we will combine multiple slashes to a single one.
          section.replace(/[/]+$/, '/')

    resultArray.push(section)
  }

  let str = resultArray.join('/')
  // Each input component is now separated by a single slash except the possible first plain protocol part.

  // Remove trailing slash before parameters or hash
  str = str.replace(/\/(\?|&|#[^!])/g, '$1')

  // replace ? in parameters with &
  const parts = str.split('?')
  str = parts.shift() + (parts.length > 0 ? '?' : '') + parts.join('&')

  return str
}

export default noramlizeURL
module.exports = noramlizeURL
module.exports.noramlizeURL = noramlizeURL
module.exports.default = noramlizeURL
