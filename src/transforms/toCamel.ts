/**
 * @module transforms
 */

import splitCamelCase from '../internal/patterns/splitCamelCase'

/**
 * A really basic pascal case implementation, only works for single words.
 * @ignore
 */
function pascalCase(input: string): string {
  const [firstLetter, ...rest] = input.split('')
  return [firstLetter.toUpperCase(), ...rest.map(letter => letter.toLowerCase())].join('')
}

export interface ToCamelOptions {
  keepAcronyms?: boolean
}

/**
 *
 * Transforms the provided string into camel-case.
 *
 * If the string contains a combination of upper and lower-case letters then the method
 * will retain the capitalization of acronyms. This behaviour can be explicitly toggled
 * on or off with the `keepAcronyms` option.
 *
 * @param input The string to be converted
 * @return Returns the camel-case string
 *
 * @example
 * ```typescript
 *
 * toCamel('ILoveCamels') // => 'iLoveCamels'
 * toCamel('User ID') // => 'userID'
 * ```
 *
 */
export default function toCamel(input: string): string
export default function toCamel(input: string, options: ToCamelOptions): string
export default function toCamel(input: string, { keepAcronyms }: ToCamelOptions = {}): string {
  // Split the string into the separate parts
  const parts: string[] = (input + ' ').match(splitCamelCase)

  // If `keepAcronyms` is not specified then default to true if there are any lower case characters
  const shouldKeepAcronyms = keepAcronyms !== undefined ? keepAcronyms : /[a-z]/.test(input)

  // Transform each part of the string
  const newParts: string[] = parts.map((part, index) => {
    // Always lower-case the first words
    if (index === 0) {
      return part.toLowerCase()
    }

    // If we are keeping acronyms and the part only contains capital letters, leave it as is
    if (shouldKeepAcronyms && /^[A-Z]+$/.test(part)) {
      return part
    }

    // Otherwise, all other parts are changed to pascal case
    return pascalCase(part)
  })

  // Return the parts concatenated together
  return newParts.join('')
}
