/**
 * @module array
 */

/**
 *
 * Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
 *
 * @typeparam T The type of the items in the array, specify this type parameter to avoid type widening on deeply nested arrays
 * @param array The array to be flattened.
 * @param depth The depth level specifying how deep a nested array structure should be flattened. Defaults to `Infinity`.
 * @return The flattened array.
 *
 * @example
 * flatten<number>([1, [2, 3], 4, [5, [6, 7] ], 8])
 * // Expected output: [1, 2, 3, 4, 5, 6, 7, 8]
 *
 */
export default function flatten<T>(array: (T[][] | T[] | T)[], depth = Infinity): T[] {
  return array.reduce<T[]>(
    (accumulator, value) =>
      Array.isArray(value) && depth-- > 0
        ? accumulator.concat(flatten(value, depth))
        : accumulator.concat(value as T | T[]),
    [],
  )
}
