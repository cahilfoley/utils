/**
 *
 * Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
 *
 * @typeparam T The type of the items in the array.
 * @param array The array to be flattened.
 * @param depth The depth level specifying how deep a nested array structure should be flattened. Defaults to `Infinity`.
 * @return The flattened array.
 *
 * @category array
 *
 * @example
 * flattenDeep([1, [2, 3], 4, [5, [6, 7] ], 8])
 * // Expected output: [1, 2, 3, 4, 5, 6, 7, 8]
 *
 */
export default function flatten<T>(array: Array<T>, depth: number = Infinity): Array<T> {
  return array.reduce(
    (accumulator: Array<T>, value: T) =>
      Array.isArray(value) && depth-- > 0
        ? accumulator.concat(flatten(value, depth))
        : accumulator.concat(value),
    []
  )
}
