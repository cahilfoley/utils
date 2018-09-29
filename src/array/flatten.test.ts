import flatten from './flatten'

describe('Flatten Array (flatten)', () => {
  it('Flattens deeply nested sub arrays by default', () => {
    expect(flatten([1, [2, 3], 4, [5, [6, [7]]], 8])).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
  })

  it('Flattens to a depth level when specified', () => {
    const arr = [1, [2, 3], 4, [5, [6, [7]]], 8]
    expect(flatten(arr, 1)).toEqual([1, 2, 3, 4, 5, [6, [7]], 8])
    expect(flatten(arr, 2)).toEqual([1, 2, 3, 4, 5, 6, [7], 8])
  })
})
