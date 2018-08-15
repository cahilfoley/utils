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
declare const camelToTitle: (string: string) => string;
export default camelToTitle;
