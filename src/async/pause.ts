/**
 *
 * Creates a promise that resolves in the provided number of milliseconds.
 *
 * This function is basically a promise version of `setTimeout`
 *
 * @param ms The number of ms to pause for
 * @return The executing promise
 *
 * @category async
 *
 */
export default function wait(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
