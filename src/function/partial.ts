/**
 * @module function
 */

/**
 *
 * Creates a function that invokes `func` with `partials` prepended to the arguments it receives.
 *
 * @param func The function to partially apply arguments to
 * @param argsBound The arguments to be partially applied
 *
 * @example
 * const addNums = (a, b, c) => a + b + c
 * const addNumsTo5 = partial(addNums, 5)
 *
 * addNumsTo5(1, 3) // => 9
 *
 */
export default function partial(
  func: (...args: any[]) => any,
  ...argsBound: any[]
): (...remainingArgs: any[]) => any {
  return function(...args) {
    return func.call(this, ...argsBound, ...args)
  }
}
