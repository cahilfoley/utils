/**
 *
 * Capitalize the first letter of a string
 *
 * @param text The string to be capitalized
 *
 * @category transforms
 *
 * @example const name = capitalize('bob') // => 'Bob'
 *
 */
const capitalize = (text: string): string => {
  const [first, ...rest] = text
  return [first.toUpperCase(), ...rest].join('')
}

export default capitalize
