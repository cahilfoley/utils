/**
 *
 * Joins together several strings or numbers in a properly formatted English list. The last two items are seperated by the word
 * 'and' and the remaining items are seperated by a comma and space.
 *
 * @param items The items to be joined
 *
 * @category array
 *
 * @example const items = toProperList(['foo', 'bar', 'baz']) // => 'foo, bar and baz'
 *
 */
export function toProperList(items: (string | number)[]): string
export function toProperList(...items: (string | number)[]): string
export function toProperList(...items: any[]): string {
  const inputs: (string | number)[] = Array.isArray(items[0]) ? items[0] : items

  let output: string = ''

  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i]

    // Throw an error for inputs of the wrong type
    if (!['string', 'number'].includes(typeof input)) {
      throw TypeError(
        `Received item ${String(
          input
        )} of type ${typeof input} at index ${i} but expected a string or number`
      )
    }

    // Trim leading or trailing whitespace
    const strInput = String(input).trim()

    if (i === 0) {
      // First item, nothing before it
      output += `${strInput}`
    } else if (i === inputs.length - 1) {
      // Last item, preceeded by a space and the word 'and'
      output += ` and ${strInput}`
    } else {
      // Not the start or the end, seperated by a comma
      output += `, ${strInput}`
    }
  }

  return output
}

export default toProperList
module.exports = toProperList
module.exports.toProperList = toProperList
module.exports.default = toProperList
