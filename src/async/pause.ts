/**
 * @module async
 */

/**
 *
 * Creates a promise that resolves in the provided number of milliseconds.
 *
 * This function is basically a promise version of `setTimeout`
 *
 * @param ms The number of ms to pause for
 * @return The executing promise
 *
 * @example
 * async function run() {
 *   console.log('first log')
 *   await pause(500)
 *
 *   // Will run 500 milliseconds after the first
 *   console.log('second log')
 * }
 *
 */
export default function pause(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
