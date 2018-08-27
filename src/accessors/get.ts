/**
 *
 * Gets the value at path of object. If the resolved value is undefined, the defaultValue is returned in its place.
 *
 * @param object The object to query
 * @param path The path of the property to get
 * @param defaultValue The value returned for undefined resolved values
 *
 * @category accessors
 *
 */
const get = (object: object, path: string[] | string, defaultValue?: any): void => {
  // If the path was a string, split it by periods
  if (typeof path === 'string') {
    path = path.split('.')
  }

  // Next key to access
  const next = path.shift()

  // Still got more steps to go
  if (path.length) {
    // If the next key isn't an object then we can't read it
    if (!object[next] || typeof object[next] !== 'object') {
      return defaultValue
    }

    // Call set recursively with the next section of the path
    return get(object[next], path, defaultValue)
  } else {
    // Up to the last section of the path, get the value now
    return object[next]
  }
}

export default get
