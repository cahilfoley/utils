/**
 *
 * Builds an array of test cases with a common output
 *
 * @param testInputs An array of test inputs to build into the case array
 * @param output The single output that should be paired with every input
 *
 * @category tests
 *
 * @example const evenTests = [...buildCaseArray([2, 4, 6], true), ...buildCaseArray([1, 3, 5], false)]
 *
 */
export function buildCaseArray(testInputs: any[], output: any): any[][] {
  return testInputs.map(testCase => [testCase, output])
}

export default buildCaseArray
module.exports = buildCaseArray
module.exports.buildCaseArray = buildCaseArray
module.exports.default = buildCaseArray
