import {
  articles,
  conjunctions,
  others,
  shortPrepositions
} from '../internal/wordLists'

// Lists of words that shouldn't be capitalized
const except: string[] = [
  ...articles,
  ...conjunctions,
  ...shortPrepositions,
  ...others
]

// Regex pattern to split the camel case section into it's parts
const splitPattern: RegExp = /[a-z]+|[0-9]+|(?:[A-Z][a-z]+)|([A-Z]+(?=(?:[A-Z][a-z])|[^A-Za-z]|[$\d\n]|\b))/g

/** Capitalize the first letter of a string */
const capitalize = (input: string): string => {
  const [first, ...rest] = input
  return [first.toUpperCase(), ...rest].join('')
}

/**
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
 * @example camelToTitle('iLoveCamels') // => 'I Love Camels'
 */
const camelToTitle = (input: string): string => {
  // Split the string into the separate parts
  const parts: string[] = (input + ' ').match(splitPattern)

  // Transform each part of the string
  const newParts: string[] = parts.map((part, index) => {
    // Always capitalize the first and last words
    if (index === 0 || index === parts.length - 1) {
      return capitalize(part)
    }
    return except.includes(part.toLowerCase())
      ? part.toLowerCase()
      : capitalize(part)
  })

  // Return the parts separated by a space
  return newParts.join(' ')
}

export default camelToTitle
