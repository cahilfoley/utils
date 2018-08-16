/**
 * Sanitises and safely joins sections of a URL, this includes removing duplicate slashes in the path and
 * ensuring correctly formatted protocols.
 */
const noramlizeURL = (...strArray: string[]) => {
  // const strArray: string[] = args[0] instanceof Array ? args[0] : args
  const resultArray = []

  // If the first part is a plain protocol, we combine it with the next part.
  if (strArray[0].match(/^[^/:]+:\/*$/) && strArray.length > 1) {
    const first = strArray.shift()
    strArray[0] = first + strArray[0]
  }

  // There must be two or three slashes in the file protocol, two slashes in anything else.
  strArray[0] = strArray[0].match(/^file:\/\/\//)
    ? strArray[0].replace(/^([^/:]+):\/*/, '$1:///')
    : strArray[0].replace(/^([^/:]+):\/*/, '$1://')

  for (let i = 0; i < strArray.length; i++) {
    let component = strArray[i]

    if (typeof component !== 'string') {
      throw new TypeError('Url must be a string. Received ' + component)
    }

    if (component === '') {
      continue
    }

    if (i > 0) {
      // Removing the starting slashes for each component but the first.
      component = component.replace(/^[/]+/, '')
    }

    // Removing the ending slashes for each component but the last.
    component =
      i < strArray.length - 1
        ? component.replace(/[/]+$/, '')
        : // For the last component we will combine multiple slashes to a single one.
          component.replace(/[/]+$/, '/')

    resultArray.push(component)
  }

  let str = resultArray.join('/')
  // Each input component is now separated by a single slash except the possible first plain protocol part.

  // remove trailing slash before parameters or hash
  str = str.replace(/\/(\?|&|#[^!])/g, '$1')

  // replace ? in parameters with &
  const parts = str.split('?')
  str = parts.shift() + (parts.length > 0 ? '?' : '') + parts.join('&')

  return str
}

export default noramlizeURL
