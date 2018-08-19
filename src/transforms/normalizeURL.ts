/**
 * Sanitises and safely joins sections of a URL, this includes removing duplicate slashes in the path and
 * ensuring correctly formatted protocols.
 */
const noramlizeURL = (...strArray: string[]) => {
  const resultArray = []

  // Ignore empty strings at the start
  while (strArray[0].trim() === '') {
    strArray.shift()
  }

  // If the first part is a plain protocol we combine it with the next part
  if (strArray[0].match(/^[^/:]+:\/*$/) && strArray.length > 1) {
    // Strip any colon or slashes from the protocol
    const protocol = strArray.shift().replace(/:\/*/, '')
    // Join with two slashes, next section will convert to 3 for file protocol if needed
    strArray[0] = `${protocol}://` + strArray[0]
  }

  // There must be two or three slashes in the file protocol, two slashes in anything else.
  strArray[0] = strArray[0].match(/^file:\/+/)
    ? strArray[0].replace(/^([^/:]+):\/*/, '$1:///')
    : strArray[0].replace(/^([^/:]+):\/*/, '$1://')

  for (let i = 0; i < strArray.length; i++) {
    let section = strArray[i]

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
      i < strArray.length - 1
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
