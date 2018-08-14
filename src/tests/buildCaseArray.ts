/**
 * Builds an array of test cases with a common output
 * @example const evenTests = [...buildCaseArray([2, 4, 6], true), ...buildCaseArray([1, 3, 5], false)]
 */
const buildCaseArray = (testCases: any[], output: any): any[][] =>
  testCases.map(testCase => [testCase, output])

export default buildCaseArray
