/**
 * @module transforms
 */

import splitCamelCase from '../internal/patterns/splitCamelCase'
import titleExceptions from '../internal/wordLists/titleExceptions'
import capitalize from './capitalize'

/**
 *
 * Transforms the provided camel-case string to title case using rules from
 * [capitalizemytitle.com](https://capitalizemytitle.com/#)
 *
 * When to capitalize:
 * - Capitalize the first word in the title
 * - Capitalize the last word in the title
 *
 * When not to capitalize
 * - articles (a, an, the)
 * - coordinating conjuctions (and, but, for)
 * - short prepositions (less than 5 letters - at, by, from)
 *
 * When one of the above conditions is not met then the word is assumed to be some other important word
 * and it is capitalized
 *
 * @param input The camel-case string to be converted
 * @return Returns the transformed title case string
 *
 * @example
 * ```typescript
 *
 * camelToTitle('iLoveCamels') // => 'I Love Camels'
 * ```
 *
 */
export default function camelToTitle(input: string): string {
  // Split the string into the separate parts
  const parts: string[] = (input + ' ').match(splitCamelCase)

  // Transform each part of the string
  const newParts: string[] = parts.map((part, index) => {
    // Always capitalize the first and last words
    if (index === 0 || index === parts.length - 1) {
      return capitalize(part)
    }
    return titleExceptions.includes(part.toLowerCase()) ? part.toLowerCase() : capitalize(part)
  })

  // Return the parts separated by a space
  return newParts.join(' ')
}
