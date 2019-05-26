import updateItem from './updateItem'

describe('Update Array Item (updateItem)', () => {
  const original = [
    { age: 30, name: 'Alice', employeeID: 3 },
    { age: 25, name: 'Bob', employeeID: 5 },
    { age: 28, name: 'Charlie', employeeID: 9 },
  ]

  // Set Bob's name to 'Bobby'
  const updated = updateItem(original, { employeeID: 5 }, item => ({
    ...item,
    name: 'Bobby',
  }))

  it('should updates the item specified by the query', () => {
    // Target of update should have changed
    expect(updated[1]).toEqual({
      age: 25,
      name: 'Bobby',
      employeeID: 5,
    })
  })

  test(`Doesn't update other items`, () => {
    // Other items shouldn't have changed
    expect(updated[0]).toEqual(original[0])
    expect(updated[2]).toEqual(original[2])
  })

  test('Does not modify the original array', () => {
    expect(original).toEqual([
      { age: 30, name: 'Alice', employeeID: 3 },
      { age: 25, name: 'Bob', employeeID: 5 },
      { age: 28, name: 'Charlie', employeeID: 9 },
    ])
  })

  test('If an item does not exist then the array is not modified', () => {
    const noUpdate = updateItem(original, { employeeID: 2 }, item => ({
      ...item,
      name: 'Something New',
    }))

    expect(noUpdate).toEqual(original)
  })

  test('Uses deep paths to match items', () => {
    const deepOriginal = [
      { foo: { bar: 'item 1', baz: 'baz 1' } },
      { foo: { bar: 'item 2', baz: 'baz 2' } },
      { foo: { bar: 'item 3', baz: 'baz 3' } },
    ]

    // Update item 2's foo.baz property to 'updated'
    const deepUpdated = updateItem(deepOriginal, { 'foo.bar': 'item 2' }, item => ({
      ...item,
      foo: { ...item.foo, baz: 'updated' },
    }))

    // Desired item updated
    expect(deepUpdated[1]).toEqual({ foo: { bar: 'item 2', baz: 'updated' } })

    // Other items not modified
    expect(deepUpdated[0]).toEqual(deepOriginal[0])
    expect(deepUpdated[2]).toEqual(deepOriginal[2])
  })
})
