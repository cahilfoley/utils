/**
 * @module array
 */

const { push } = Array.prototype

/**
 *
 * Calls a function on every item in an array and concatenates the resulting arrays into a single flat array.
 *
 * @typeparam TValue The type of items in the input array
 * @typeparam TNext the type of items in the output array
 * @param array The input array to be mapped
 * @param fn The functions used to generate the new items
 * @return A flat array of the resulting values
 *
 * @example
 * ```typescript
 *
 * const items = flatMap(['foo', 'bar'], word => word.split())
 * // Returns ['f', 'o', 'o', 'b', 'a', 'r']
 * ```
 *
 */
export default function flatMap<TValue, TNext>(
  array: TValue[],
  fn: (value: TValue, index?: number) => TNext[],
): TNext[] {
  const output: TNext[] = []

  for (let i = 0; i < array.length; i++) {
    const result = fn.call(array, array[i], i)

    if (Array.isArray(result)) {
      push.apply(output, result)
    } else if (result !== null && result !== undefined) {
      throw new TypeError(
        `flatMapArray: Callback must return an array or null, received "${result}" instead`,
      )
    }
  }

  return output
}
