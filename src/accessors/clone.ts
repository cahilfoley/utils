/**
 * Creates a deep clone of a value
 * @param original The value to clone
 */
const clone = (original: any) => {
  // Can't clone functions
  if (typeof original === 'function') {
    return {}
  }

  // If the input is a date, create a new one with the same value
  if (original instanceof Date) {
    return new Date(original.valueOf())
  }

  // If the input is an array, clone each item
  if (Array.isArray(original)) {
    return original.map(clone)
  }

  // If the input is an object, clone each value onto a new object
  if (typeof original === 'object') {
    const output = {}
    for (const [key, value] of Object.entries(original)) {
      output[key] = clone(value)
    }

    return output
  }

  return original
}

export default clone
