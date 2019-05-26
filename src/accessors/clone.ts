/**
 *
 * Options to modify the behaviour of the clone function
 *
 * @category accessors
 *
 */
export type CloneOptions = {
  /** Flag to specify that functions should be copied by reference rather than converted to empty objects */
  copyFunctions?: boolean
}

/**
 *
 * Creates a deep clone of a value
 *
 * @typeparam T The type of the original value
 * @param original The value to clone
 * @param options Config options
 * @return Returns the deep cloned value
 *
 * @category accessors
 *
 */
export function clone<T>(original: T, options?: CloneOptions): T
export function clone(original: any, options: CloneOptions = {}): any {
  let output

  // Can't clone functions, only copy if the flag is set
  if (typeof original === 'function') output = options.copyFunctions ? original : {}
  // Nulls will be caught as objects later so return them now
  else if (original === null) output = null
  // If the input is a date, create a new one with the same value
  else if (original instanceof Date) output = new Date(original.valueOf())
  // If the input is an array, clone each item
  else if (Array.isArray(original)) output = original.map(value => clone(value, options))
  // If the input is an object, clone each value onto a new object
  else if (typeof original === 'object') {
    output = {}
    for (const [key, value] of Object.entries(original)) {
      output[key] = clone(value, options)
    }
  }

  // If anything above matched the return the output
  if (output !== undefined) return output

  // Don't know how to handle this type, just return the original
  return original
}

export default clone
