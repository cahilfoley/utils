import flatten from './flatten'

describe('Flatten Array (flatten)', () => {
  it('should flatten deeply nested sub arrays by default', () => {
    expect(flatten([[1, [2, [[3]]]], 4, [5, [[[6]]]]])).toEqual([1, 2, 3, 4, 5, 6])
    expect(flatten([1, [2, 3], 4, [5, [6, [7, [8]]]]])).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
  })

  it('should flatten to the specified depth level if provided', () => {
    const arr = [1, [2, 3], 4, [5, [6, [7]]], 8]
    expect(flatten(arr, 1)).toEqual([1, 2, 3, 4, 5, [6, [7]], 8])
    expect(flatten(arr, 2)).toEqual([1, 2, 3, 4, 5, 6, [7], 8])
  })

  it('should remove empty array items', () => {
    expect(flatten([1, 2, , 3, , 4, 5, [6, , 7], 8])).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
  })
})
