import filterBy from './filterBy'

describe('Array Filter By (filterBy)', () => {
  /**
   * @example
   * const alice = {
   *   name: 'Alice Citizen',
   *   role: 'developer',
   *   id: 1
   * }
   */
  const employeeOneLevel = [
    { name: 'Alice Citizen', role: 'developer', id: 1 },
    { name: 'Bob Dole', role: 'developer', id: 2 },
    { name: 'Alice Other', role: 'analyst', id: 3 },
  ]

  /**
   * @example
   * const alice = {
   *   name: {
   *     first: 'Alice',
   *     last: 'Citizen'
   *   },
   *   role: 'developer',
   *   id: 1
   * }
   */
  const employeeTwoLevel = employeeOneLevel.map(employee => ({
    ...employee,
    name: { first: employee.name.split(' ')[0], last: employee.name.split(' ')[1] },
  }))

  /**
   * @example
   * const alice = {
   *   client: {
   *     name: {
   *       first: 'Alice',
   *       last: 'Citizen'
   *     },
   *     role: 'developer',
   *     id: 1
   *   }
   * }
   */
  const employeeThreeLevel = employeeTwoLevel.map(employee => ({ client: employee }))

  it('should filter a shallow property path to a primitive value', () => {
    expect(filterBy(employeeOneLevel, 'role', 'developer')).toEqual([
      { name: 'Alice Citizen', role: 'developer', id: 1 },
      { name: 'Bob Dole', role: 'developer', id: 2 },
    ])
  })

  describe('No matches', () => {
    it('should filter all items if the path specified has no matches', () => {
      expect(filterBy(employeeOneLevel, 'name', 'developer')).toEqual([])
      expect(filterBy(employeeTwoLevel, 'name.first', 'henry')).toEqual([])
    })

    it('should return an empty array if an empty array is provided', () => {
      expect(filterBy([], 'name', 'developer')).toEqual([])
      expect(filterBy([], ['name', 'first'], 'Alice')).toEqual([])
    })

    it('should filter all items if the path is empty', () => {
      expect(filterBy([], '', 'Alice')).toEqual([])
    })

    it('should filter out objects if the path is in an incorrect order', () => {
      expect(filterBy(employeeTwoLevel, ['first', 'name'], 'Alice')).toEqual([])
      expect(filterBy(employeeThreeLevel, ['name.first.client'], 'Alice')).toEqual([])
    })
  })

  describe('Path depth', () => {
    it('should filter objects using a nested array path of any depth', () => {
      expect(filterBy(employeeTwoLevel, ['name', 'first'], 'Alice')).toEqual([
        { name: { first: 'Alice', last: 'Citizen' }, role: 'developer', id: 1 },
        { name: { first: 'Alice', last: 'Other' }, role: 'analyst', id: 3 },
      ])

      expect(filterBy(employeeThreeLevel, ['client', 'name', 'first'], 'Alice')).toEqual([
        { client: { name: { first: 'Alice', last: 'Citizen' }, role: 'developer', id: 1 } },
        { client: { name: { first: 'Alice', last: 'Other' }, role: 'analyst', id: 3 } },
      ])
    })

    it('should filter objects using a nested string path of any depth', () => {
      expect(filterBy(employeeTwoLevel, 'name.first', 'Alice')).toEqual([
        { name: { first: 'Alice', last: 'Citizen' }, role: 'developer', id: 1 },
        { name: { first: 'Alice', last: 'Other' }, role: 'analyst', id: 3 },
      ])

      expect(filterBy(employeeThreeLevel, 'client.name.first', 'Alice')).toEqual([
        { client: { name: { first: 'Alice', last: 'Citizen' }, role: 'developer', id: 1 } },
        { client: { name: { first: 'Alice', last: 'Other' }, role: 'analyst', id: 3 } },
      ])
    })
  })

  describe('Value match', () => {
    it('should use a strict comparison to filter matches', () => {
      expect(filterBy(employeeTwoLevel, 'id', '2')).toEqual([])
      expect(filterBy(employeeTwoLevel, 'id', 2)).toEqual([
        { name: { first: 'Bob', last: 'Dole' }, role: 'developer', id: 2 },
      ])
    })
  })
})
