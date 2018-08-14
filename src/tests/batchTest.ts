import runTest from './runTest'

/**
 * Utility function for running batches of tests with a single call
 */
const batchTest = (cases: any[][], func: (...args: any[]) => any): void => {
  const testRunner = testCase => runTest(testCase, func)
  cases.forEach(testRunner)
}

export default batchTest
