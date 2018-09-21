import partitionArray from './partitionArray'

describe('Partition Array (partitionArray)', () => {
  it('Partitions an array based on a function', () => {
    expect(partitionArray([1, 2, 3, 4, 5, 6, 7, 8, 9], x => x > 5)).toEqual([
      [6, 7, 8, 9],
      [1, 2, 3, 4, 5]
    ])
  })

  it('Maintains original array order when partitioning', () => {
    expect(partitionArray([9, 7, 3, 1, 2, 4, 8, 5, 6], x => x < 5)).toEqual([
      [3, 1, 2, 4],
      [9, 7, 8, 5, 6]
    ])
  })
})
