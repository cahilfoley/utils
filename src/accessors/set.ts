/**
 * Sets the value at path of object. If a portion of path doesn't exist, it's created. Arrays are created for missing
 * index properties while objects are created for all other missing properties.
 * @param object The object to modify
 * @param path The path of the property to set
 * @param value The value to set
 */
const set = (object: object, path: string[] | string, value: any): void => {
  // If the path was a string, split it by periods
  if (typeof path === 'string') {
    path = path.split('.')
  }

  // Next key to access
  const next = path.shift()

  // Still got more steps to go
  if (path.length) {
    // If the next key isn't an object - make it one
    if (!object[next] || typeof object[next] !== 'object') {
      object[next] = {}
    }

    // Call set recursively with the next section of the path
    set(object[next], path, value)
  } else {
    // Up to the last sectino of the path, set the value now
    object[next] = value
  }
}

export default set
