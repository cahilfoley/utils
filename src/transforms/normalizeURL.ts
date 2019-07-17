/**
 * @module transforms
 */

/**
 * Normalizes the number of slashes in the protocol section of a url
 * @private
 */
function normalizeProtocolSlashes(url: string) {
  // There must be two or three slashes in the file protocol, two slashes in anything else.
  const isFile = url.match(/^file:\/+/)
  return url.replace(/^([^/:]+):\/*/, isFile ? '$1:///' : '$1://')
}

/**
 *
 * Sanitises and safely joins sections of a URL, this includes removing duplicate slashes in the path and
 * ensuring correctly formatted protocols.
 *
 * @param urlParts The URL parts to be joined and normalized
 * @return Returns the joined and normalized URL parts as a string
 *
 * @example
 * const url = normalizeURL('https://cahilfoley.github.io/', '/utils') // => 'https://cahilfoley.github.io/utils'
 *
 */
export default function noramlizeURL(...urlParts: string[]): string {
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
    urlParts[0] = `${protocol}://${urlParts[0]}`
  }

  urlParts[0] = normalizeProtocolSlashes(urlParts[0])

  for (let i = 0; i < urlParts.length; i++) {
    let section = urlParts[i]

    if (typeof section !== 'string') {
      throw new TypeError(
        `URL must be a string. Received ${section} as argument index ${i} which is type ${typeof section}`,
      )
    }

    // Skip empty sections
    if (section === '') continue

    // Removing the starting slashes for each component but the first.
    if (i > 0) section = section.replace(/^[/]+/, '')

    // Removing the ending slashes for each component but the last.
    section = section.replace(/[/]+$/, i < urlParts.length - 1 ? '' : '/')

    resultArray.push(section)
  }

  // Each input component is now separated by a single slash except the possible first plain protocol part.
  // Remove trailing slash before parameters or hash
  const str = resultArray.join('/').replace(/\/(\?|&|#[^!])/g, '$1')

  // replace ? in parameters with &
  const parts = str.split('?')
  return parts.shift() + (parts.length > 0 ? '?' : '') + parts.join('&')
}
