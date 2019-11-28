/** @module async */
/** */

import { canceledError } from './makeCancelable'

export { canceledError }

/**
 *
 * Creates a promise that can be canceled after starting. Canceling the promise does not stop it from executing but will
 * cause it to reject with the value `{ isCanceled: true }` once it finishes, regardless of outcome.
 *
 * ```ts
 *
 * const promise = new CancelablePromise(res => setTimeout(res, 3000, 'I finished!'))
 *
 * // Stop the cancelable promise from resolving
 * cancelablePromise.cancel()
 *
 * cancelablePromise
 *   .then(result => console.log('Cancelable', result)) // Never fires, the promise will not resolve after being cancelled
 *   .catch(err => console.log('Cancelable', err)) // Resolves after 3000ms with the value `{ isCanceled: true }`
 * ```
 *
 */
export class CancelablePromise<T extends any> extends Promise<T> {
  private canceled = false
  protected promise: Promise<T>

  get [Symbol.toStringTag]() {
    return 'CancelablePromise'
  }

  get hasCanceled() {
    return this.canceled
  }

  constructor(executor: (resolve: (value: T) => void, reject: (err?: any) => void) => void) {
    super((resolve, reject) => {
      return new Promise(executor).then(
        (val: T) => (this.hasCanceled ? reject(canceledError) : resolve(val)),
        error => (this.hasCanceled ? reject(canceledError) : reject(error)),
      )
    })
  }

  cancel() {
    this.canceled = true
  }

  then<TResult1, TResult2>(
    onfulfilled: (value: T) => TResult1 | PromiseLike<TResult1>,
    onrejected?: (reason: any) => TResult2 | PromiseLike<TResult2>,
  ): Promise<TResult1 | TResult2> {
    return super.then(onfulfilled, onrejected)
  }

  catch<TResult>(
    onrejected: (reason: any) => TResult | PromiseLike<TResult>,
  ): Promise<T | TResult> {
    return super.catch(onrejected)
  }

  finally(onfinally: () => void): Promise<T> {
    return super.finally(onfinally)
  }
}

export default CancelablePromise
