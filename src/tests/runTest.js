/**
 * Runs a test based on input(s), if an array is provided then the items are passed as arguments to the function
 * being tested, if anything else is provided then it is passed directly to the function
 *
 * @param {[TestInput, any]} testCases The test inputs and outputs
 * @param {function(...any): any} func The function to test
 * @return {void}
 */
const runTest = ([input, output], func) => {
  if (!Array.isArray(input)) input = [input]
  expect(func(...input)).toBe(output)
}

export default runTest
