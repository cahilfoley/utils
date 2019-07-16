import pause from './pause'

describe('Wait for delay (pause)', () => {
  it('should resolve after a minimum of the provided ms', async () => {
    const delay = 50
    const start = Date.now()
    await pause(delay)
    expect(Date.now() - start).toBeGreaterThanOrEqual(delay - 5) // 5 ms threshold for random CPU variance
  })
})
