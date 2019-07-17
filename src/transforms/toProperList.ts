/**
 * @module transforms
 */

/**
 *
 * Joins together several strings or numbers in a properly formatted English list. The last two items are seperated by the word
 * 'and' and the remaining items are seperated by a comma and space.
 *
 * @param items Array of strings
 *
 * @example
 * const itemsString = toProperList(['apples', 'pears', 'bananas']) // => 'apples, pears and bananas'
 *
 */
export function toProperList(items: string[]): string
export function toProperList(...items: string[]): string
export function toProperList(...items: any[]): string {
  const parts: string[] = Array.isArray(items[0]) ? items[0] : items

  let output = ''
  const length = parts.length
  // If you have only one item in the array
  if (length === 1) {
    output = parts[0]
  }
  // If you have only two items in the array
  else if (length === 2) {
    output = `${parts[0]} and ${parts[1]}`
  }
  // If you have 3 or more items in the array,
  else if (length >= 3) {
    // It traverses all elements of the array adds the fixed dots according to the English language
    parts.forEach((item, index) => {
      // If it is the penultimate array item
      if (index === length - 2) {
        output += `${item} and `
      }
      // If it is the last item in the array
      else if (index === length - 1) {
        output += `${item}`
      }
      // If it is the first or some element before the penultimate one
      else {
        output += `${item}, `
      }
    })
  }

  return output
}

export default toProperList
