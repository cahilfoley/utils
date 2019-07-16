export const canceledError = { isCanceled: true }

/** A promise that can have it's resolution cancelled */
export interface CancelablePromise<T> extends Promise<T> {
  cancel(): void
}

/**
 *
 * Allows the provided promise to be canceled after starting. This does not stop the promise from executing but will
 * cause it to reject with the value `{ isCanceled: true }` once it finishes, regardless of outcome.
 *
 * @param promise The promise that is executing
 * @return The cancelable version of the promise
 *
 * @example
 * const promise = new Promise((res, rej) => {
 *   setTimeout(() => res('I finished!'), 3000)
 * })
 *
 * // Create a cancelable version of the promise
 * const cancelablePromise = makeCancelable(promise)
 *
 * // Stop the cancelable promise from resolving
 * cancelablePromise.cancel()
 *
 * promise
 *   .then(result => console.log('Normal', result)) // This will log `'I finished!'` after 3000ms
 *   .catch(err => console.log('Normal', err)) // Will reject as per normal
 *
 * cancelablePromise
 *   .then(result => console.log('Cancelable', result)) // Never fires, the promise will not resolve after being cancelled
 *   .catch(err => console.log('Cancelable', err)) // Resolves after 3000ms with the value `{ isCanceled: true }`
 *
 * @category async
 *
 */
export default function makeCancelable<T>(promise: Promise<T>): CancelablePromise<T> {
  let hasCanceled = false

  const cancelablePromise: Partial<CancelablePromise<T>> = new Promise((resolve, reject) => {
    promise.then(
      val => (hasCanceled ? reject(canceledError) : resolve(val)),
      error => (hasCanceled ? reject(canceledError) : reject(error)),
    )
  })

  cancelablePromise.cancel = () => {
    hasCanceled = true
  }

  return cancelablePromise as CancelablePromise<T>
}
