/** Capitalize the first letter of a string */
const capitalize = (input: string): string => {
  const [first, ...rest] = input
  return [first.toUpperCase(), ...rest].join('')
}

export default capitalize
