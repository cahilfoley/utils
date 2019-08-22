/**
 * @module transforms
 */

/**
 * Normalizes the number of slashes in the protocol section of a url
 * @private
 */
function normalizeProtocol(urlParts: string[]) {
  // If the first part is a plain protocol we combine it with the next part
  if (urlParts[0].match(/^[^/:]+:\/*$/) && urlParts.length > 1) {
    // Strip any colon or slashes from the protocol
    const protocol = urlParts.shift().replace(/:\/*/, '')
    // Join with two slashes, next section will convert to 3 for file protocol if needed
    urlParts[0] = `${protocol}://${urlParts[0]}`
  }

  // There must be two or three slashes in the file protocol, two slashes in anything else.
  const isFile = urlParts[0].match(/^file:\/+/)
  urlParts[0] = urlParts[0].replace(/^([^/:]+):\/*/, isFile ? '$1:///' : '$1://')

  return urlParts
}

/**
 * Normalizes the number of slashes in each section of the URL
 * @private
 */
function normalizeSectionSlashes(urlParts: string[]) {
  return urlParts.flatMap((section, i) => {
    if (typeof section !== 'string') {
      throw new TypeError(
        `URL must be a string. Received ${section} as argument index ${i} which is type ${typeof section}`,
      )
    }

    // Skip empty sections
    if (section === '') return []

    // Removing the starting slashes for each component but the first.
    if (i > 0) section = section.replace(/^[/]+/, '')

    // Removing the ending slashes for each component but the last.
    return section.replace(/[/]+$/, i < urlParts.length - 1 ? '' : '/')
  })
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
 * ```typescript
 *
 * const url = normalizeURL('https://cahilfoley.github.io/', '/utils') // => 'https://cahilfoley.github.io/utils'
 * ```
 *
 */
export default function noramlizeURL(...urlParts: string[]): string {
  // Ignore empty strings at the start
  while (urlParts[0].trim() === '') urlParts.shift()

  // Make sure the start protocol section has the correct number of slashes
  urlParts = normalizeProtocol(urlParts)

  // Normalize the number of slashes between each section of the url
  const resultArray = normalizeSectionSlashes(urlParts)

  // Each input component is now separated by a single slash except the possible first plain protocol part.
  // Remove trailing slash before parameters or hash
  const str = resultArray.join('/').replace(/\/(\?|&|#[^!])/g, '$1')

  // replace ? in parameters with &
  const parts = str.split('?')
  return parts.shift() + (parts.length > 0 ? '?' : '') + parts.join('&')
}
