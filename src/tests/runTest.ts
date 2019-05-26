/**
 *
 * Runs a test based on input(s), if an array is provided then the items are passed as arguments to the function
 * being tested, if anything else is provided then it is passed directly to the function
 *
 * @param testCase A tuple of inputs and expected output
 * @param func The function to test
 * @param testVerb The jest `expect` verb to use when testing - defaults to `toBe`
 *
 * @category tests
 *
 * @example runTest([[3, 5], 8], (a, b) => a + b)
 *
 */
export default function runTest(
  testCase: [any, any],
  func: (...args: any[]) => any,
  testVerb: string = 'toBe',
): void {
  const [rawInputs, output] = testCase

  // If inputs is not an array, wrap it in an array so we can use the spread operator to pass args to test
  const inputs: any[] = !Array.isArray(rawInputs) ? [rawInputs] : rawInputs

  // If testing for errors, wrap the function in an anonymous function
  if (
    [
      'toThrow',
      'toThrowError',
      'toThrowErrorMatchingSnapshot',
      'toThrowErrorMatchingInlineSnapshot',
    ].includes(testVerb)
  ) {
    const testFunc = func
    func = (...args) => () => {
      testFunc(...args)
    }
  }

  expect(func(...inputs))[testVerb](output)
}
