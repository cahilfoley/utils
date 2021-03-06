import makeCancelable, { canceledError } from './makeCancelable'
import pause from './pause'

describe('Cancel promise (makeCancelable)', () => {
  it('should resolve normally if not cancelled', async () => {
    const cancelablePromise = makeCancelable(pause(20))
    const result = cancelablePromise.then(() => 'resolved')
    await expect(result).resolves.toEqual('resolved')
  })

  it('should reject with a canceled error if cancel is called', async () => {
    const cancelablePromise = makeCancelable(pause(20))
    const result = cancelablePromise.then(() => 'resolved')
    cancelablePromise.cancel()
    await expect(result).rejects.toEqual(canceledError)
  })

  it('should allow errors to bubble up to the cancelable promise', async () => {
    const error = new Error('Error in bad promise')
    const badPromise = new Promise((resolve, reject) => setTimeout(() => reject(error), 50))

    const cancelablePromise = makeCancelable(badPromise)
    const result = cancelablePromise.then(() => 'resolved')

    await expect(result).rejects.toEqual(error)
  })

  it('should reject with a canceled error if cancel is called before the error occurs', async () => {
    const error = new Error('Error in bad promise')
    // Will throw an error in 50 ms
    const badPromise = new Promise((resolve, reject) => setTimeout(() => reject(error), 50))

    const cancelablePromise = makeCancelable(badPromise)
    // Will cancel in 20 ms, before the error above throws
    setTimeout(() => cancelablePromise.cancel(), 20)
    const result = cancelablePromise.then(() => 'resolved')

    await expect(result).rejects.toEqual(canceledError)
  })
})
