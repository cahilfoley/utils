import runTest from './runTest'

interface IBatchTestOptions {
  verb?: string
  runner?: (
    [inputs, output]: any[],
    func: (...args: any[]) => any,
    testVerb?: string
  ) => void
}

/** Utility function for running batches of tests with a single call */
const batchTest = (
  func: (...args: any[]) => any,
  cases: any[][],
  { verb, runner }: IBatchTestOptions = {}
): void => {
  // Use custom runner if provided
  const actualRunner = runner ? runner : runTest

  // Create a test runner with the preconfigured arguments
  const testRunner = (testCase: any) => {
    actualRunner(testCase, func, verb)
  }

  // Run each test case with the new testRunner
  cases.forEach(testRunner)
}

export default batchTest
