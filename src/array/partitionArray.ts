/**
 *
 * Partitions an array using a provided predicate function. All elements satisfying the predicate are part of the first returned array,
 * and all elements that don't are in the second.
 *
 * @param array The array to partition
 * @param predicate Function to test each item. Items that return true are placed in the first array,
 * otherwise they are returned in the second array
 * @param contect The context to call the predicate function in
 * @return Two arrays, the first containing all items that satisfied the predicate, the second containing the rest
 *
 * @category array
 *
 * @example
 * partitionArray([1, 2, 3, 4], x => x % 2)
 * // Returns [[1, 3], [2, 4]]
 *
 */
export default function partitionArray<T>(
  array: Array<T>,
  predicate: (value: T, index: number, array: Array<T>) => boolean,
  context?: any
): [Array<T>, Array<T>] {
  const first = []
  const second = []
  array.forEach((element, index) => {
    if (predicate.call(context, element, index, array)) {
      first.push(element)
    } else {
      second.push(element)
    }
  })
  return [first, second]
}
