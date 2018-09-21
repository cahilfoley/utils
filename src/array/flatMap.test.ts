import flatMap from './flatMap'

describe('Flat Map (flatMap)', () => {
  it('Flattens an array of arrays', () => {
    expect(flatMap([1, 2, 3], x => [x, x + 1])).toEqual([1, 2, 2, 3, 3, 4])
  })

  it('Ignores null and undefined', () => {
    expect(flatMap([null, undefined, [1], [2]], x => x)).toEqual([1, 2])
  })

  it('Throws for scalar return values', () => {
    ;[false, true, 'b', 2].forEach(value =>
      expect(() => (flatMap as any)([value], x => x)).toThrow(
        new TypeError(
          `flatMapArray: Callback must return an array or null, received "${value}" instead`
        )
      )
    )
  })
})
