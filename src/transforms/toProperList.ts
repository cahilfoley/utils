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
 * ```typescript
 *
 * const itemsString = toProperList(['apples', 'pears', 'bananas']) // => 'apples, pears and bananas'
 * ```
 *
 */
export function toProperList(items: string[]): string
export function toProperList(...items: string[]): string
export function toProperList(...items: any[]): string {
  const parts: string[] = Array.isArray(items[0]) ? items[0] : items

  // If you have 1 - 2 items in the array
  if (parts.length < 3) return parts.join(' and ')

  // There are 3 or more items in the array
  return (
    parts
      // Traverse all elements of the array adds the correct grammar according to the English language
      .map((item, index) => {
        // If it is the penultimate array item
        if (index === parts.length - 2) return `${item} and `

        // If it is the last item in the array
        if (index === parts.length - 1) return item

        // If it is the first or some element before the penultimate one
        return `${item}, `
      })
      .join('')
  )
}

export default toProperList
