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
})
