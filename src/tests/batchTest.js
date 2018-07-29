import runTest from './runTest'

/**
 * Utility function for running batches of tests with a single call
 *
 * @param {[TestInput, output][]} cases An array of test case arrays (`[inputs, output]`) to be used
 * @param {function(any): any} func The function to test
 * @return {void}
 */
const batchTest = (cases, func) => {
  const testRunner = testCase => runTest(testCase, func)
  cases.forEach(testRunner)
}

export default batchTest
