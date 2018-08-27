/**
 *
 * Options to modify the behaviour of the clone function
 *
 * @category accessors
 *
 */
interface ICloneOptions {
  /** Flag to specify that functions should be copied by reference rather than converted to empty objects */
  copyFunctions?: boolean
}

/**
 *
 * Creates a deep clone of a value
 *
 * @param original The value to clone
 * @param options Config options
 *
 * @category accessors
 *
 */
const clone = (original: any, options: ICloneOptions = {}): any => {
  // Can't clone functions, only copy if the flag is set
  if (typeof original === 'function') {
    return options.copyFunctions ? original : {}
  }

  // Nulls will be caught as objects later so return them now
  if (original === null) {
    return null
  }

  // If the input is a date, create a new one with the same value
  if (original instanceof Date) {
    return new Date(original.valueOf())
  }

  // If the input is an array, clone each item
  if (Array.isArray(original)) {
    return original.map(value => clone(value, options))
  }

  // If the input is an object, clone each value onto a new object
  if (typeof original === 'object') {
    const output = {}
    for (const [key, value] of Object.entries(original)) {
      output[key] = clone(value, options)
    }

    return output
  }

  return original
}

export default clone
