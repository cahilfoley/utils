/**
 * @module tests
 */

import runTest from './runTest'

/**
 * Options to customize the behaviour of the batchTest function
 */
export interface IBatchTestOptions {
  /** The jest `expected` verb to use when running the test */
  verb?: string
  /**
   * The function used to run the test, by default the jest library is used. This is mainly here to all the function
   * to be tested
   */
  runner?: (testCase: [any, any], func: (...args: any[]) => any, testVerb?: string) => void
}

/**
 *
 * Utility function for running batches of tests with a single call
 *
 * @param func The function to test
 * @param cases An array of test case tuples (inputs and expected outputs)
 * @param options Configuration options
 *
 * @example
 * ```typescript
 *
 * batchTest(double, [[2, 4], [5, 10]])
 * ```
 *
 */
export default function batchTest(
  func: (...args: any[]) => any,
  cases: any[][],
  { verb, runner }: IBatchTestOptions = {},
): void {
  // Use custom runner if provided
  const actualRunner = runner ? runner : runTest

  // Create a test runner with the preconfigured arguments
  const testRunner = (testCase: any) => {
    actualRunner(testCase, func, verb)
  }

  // Run each test case with the new testRunner
  cases.forEach(testRunner)
}
