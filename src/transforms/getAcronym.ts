/**
 * @module transforms
 */

import titleExceptions from '../internal/wordLists/titleExceptions'

/**
 *
 * Condense a provided string into a 2 or 3 letter acronym using the following rules
 * - If there is only a single word return the first 3 letters
 * - If there are more than 3 words filter out articles, conjunctions and short prepositions
 *
 * @param title The string to convert to an acronym
 * @return Returns the acronym string
 *
 * @example
 * const acronym = getAcronym('Empire Strikes Back') // => 'ESB'
 *
 */
export default function getAcronym(title: string): string {
  // Split the words on delimiters and filter out any empties
  let words: string[] = title
    .split(/ |\.|_|,|-/g)
    .map(word => word.trim())
    .filter(word => word.length)

  // Next step depends on how many words we have
  if (words.length === 1) {
    // If there is only a single word then capitalize the first 3 letters
    return words[0].substring(0, 3).toUpperCase()
  } else if (words.length > 3) {
    // More than 3 words, try to filter out words in exception list
    const importantWords = words.filter(word => !titleExceptions.includes(word.toLowerCase()))

    // If we have more than 1 word left then use the filtered set otherwise use the full set
    if (importantWords.length > 1) {
      words = importantWords
    }
  } else if (words.length === 0) {
    words = ['N', 'A']
  }

  return words
    .map(word => word[0].toUpperCase())
    .join('')
    .substring(0, 3)
}
