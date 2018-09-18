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
export function capitalize(text: string): string {
  const [first, ...rest] = text
  return [first.toUpperCase(), ...rest].join('')
}

export default capitalize
module.exports = capitalize
module.exports.capitalize = capitalize
module.exports.default = capitalize
