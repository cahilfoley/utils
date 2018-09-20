/**
 *
 * Capitalize the first letter of a string
 *
 * @param text The string to be capitalized
 * @return Returns the capitalized string
 *
 * @category transforms
 *
 * @example const name = capitalize('bob') // => 'Bob'
 *
 */
export default function capitalize(text: string): string {
  const [first, ...rest] = text
  return [first.toUpperCase(), ...rest].join('')
}
