/**
 * Runs a test based on input(s), if an array is provided then the items are passed as arguments to the function
 * being tested, if anything else is provided then it is passed directly to the function
 */
const runTest = (
  [inputs, output]: any[],
  func: (...args: any[]) => any,
  testVerb: string = 'toBe'
): void => {
  // If inputs is not an array, wrap it in an array so we can use the spread operator to pass args to test
  if (!Array.isArray(inputs)) {
    inputs = [inputs]
  }

  // If testing for errors, wrap the function in an anonymous function
  if (
    [
      'toThrow',
      'toThrowError',
      'toThrowErrorMatchingSnapshot',
      'toThrowErrorMatchingInlineSnapshot'
    ].includes(testVerb)
  ) {
    const testFunc = func
    func = (...args) => () => {
      testFunc(...args)
    }
  }

  expect(func(...inputs))[testVerb](output)
}

export default runTest
