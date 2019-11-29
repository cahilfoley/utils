import { CancelablePromise, canceledError } from './CancelablePromise'

describe('CancelablePromise', () => {
  const createPromise = () =>
    new CancelablePromise(resolve => setTimeout(resolve, 0, 'hello world'))

  const createFailingPromise = () =>
    new CancelablePromise((_, reject) => setTimeout(reject, 0, 'some error'))

  const createMockFns = () => ({
    onFulfilled: jest.fn(val => val),
    onRejected: jest.fn(val => val),
    onFinally: jest.fn(),
  })

  it('resolves like a regular promise when not canceled', async () => {
    const cancelable = createPromise()
    const { onFulfilled, onRejected } = createMockFns()
    cancelable.then(onFulfilled).catch(onRejected)
    const value = await cancelable
    expect(value).toBe('hello world')
    expect(onFulfilled).toHaveBeenCalledWith('hello world')
    expect(onRejected).not.toHaveBeenCalled()
  })

  it('rejects like a regular promise when not canceled', async () => {
    const cancelable = createFailingPromise()
    const { onFulfilled, onRejected } = createMockFns()
    await cancelable.catch(onRejected)
    expect(onFulfilled).not.toHaveBeenCalled()
    expect(onRejected).toHaveBeenCalledWith('some error')
  })

  if (typeof Promise.prototype.finally === 'function') {
    it('completes like a regular promise when not canceled', async () => {
      const cancelable = createPromise()
      const { onFulfilled, onRejected, onFinally } = createMockFns()

      await cancelable.then(onFulfilled)
      await cancelable.catch(onRejected)
      await cancelable.finally(onFinally)

      expect(onFulfilled).toHaveBeenCalledWith('hello world')
      expect(onRejected).not.toHaveBeenCalled()
      expect(onFinally).toHaveBeenCalled()
    })
  }

  it('stringifies to the string [object CancelablePromise]', () => {
    const cancelable = createPromise()
    expect(`${cancelable}`).toEqual('[object CancelablePromise]')
  })

  it('rejects with the constant cancelable error when canceled', async () => {
    const cancelable = createPromise()
    const { onFulfilled, onRejected } = createMockFns()
    const check = cancelable.then(onFulfilled).catch(onRejected)
    cancelable.cancel()
    await check
    expect(onFulfilled).not.toHaveBeenCalled()
    expect(onRejected).toHaveBeenCalledWith(canceledError)
  })

  it('rejects with the constant cancelable error when canceled, even if the promise failed', async () => {
    const cancelable = createFailingPromise()
    const { onFulfilled, onRejected } = createMockFns()
    const check = cancelable.then(onFulfilled).catch(onRejected)
    cancelable.cancel()
    await check
    expect(onFulfilled).not.toHaveBeenCalled()
    expect(onRejected).toHaveBeenCalledWith(canceledError)
  })
})
