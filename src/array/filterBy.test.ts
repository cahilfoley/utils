import filterBy from './filterBy'

describe('Array Filter By (filterBy)', () => {
  const employeeOneLevel = [
    { name: 'Alice', role: 'developer' },
    { name: 'Bob', role: 'developer' },
    { name: 'Alice', role: 'analyst' }
  ]
  const employeeTwoLevel = [
    { name: { first: 'Alice', last: 'Citizen' }, role: 'developer' },
    { name: { first: 'Bob', last: 'Dole' }, role: 'developer' },
    { name: { first: 'Alice', last: 'Other' }, role: 'analyst' },
  ]
  const employeeThreeLevel = [
    { client: { name: { first: 'Alice', last: 'Citizen' }, role: 'developer' }},
    { client: { name: { first: 'Bob', last: 'Dole' } , role: 'developer' }},
    { client: { name: { first: 'Alice', last: 'Other' }, role: 'analyst' }},
  ]


  test('Simple object with one level', () => {
    expect(filterBy(employeeOneLevel, 'role', 'developer')).toEqual([
      { name: 'Alice', role: 'developer' },
      { name: 'Bob', role: 'developer' }
    ])
  })

  test('Simple object with one level, with incorrect path', () => {
    expect(filterBy(employeeOneLevel, 'name', 'developer')).toEqual([])
  })

  test('Simple object with one level, with empty array', () => {
    expect(filterBy([], 'name', 'developer')).toEqual([])
  })

  test('Simple object with two level with empty path', () => {
    expect(filterBy([], '', 'Alice')).toEqual([])
  })
  
  test('Simple object with two level', () => {
    expect(filterBy(employeeTwoLevel, ['name', 'first'], 'Alice')).toEqual([
      { name: { first: 'Alice', last: 'Citizen' }, role: 'developer' },
      { name: { first: 'Alice', last: 'Other' }, role: 'analyst' }
    ])
  })

  test('Simple object with two level with empty array', () => {
    expect(filterBy(employeeTwoLevel, ['first', 'name'], 'Alice')).toEqual([])
  })

  test('Simple object with two level with empty array', () => {
    expect(filterBy([], ['first', 'name'], 'Alice')).toEqual([])
  })

  test('Simple object with three level', () => {
    expect(filterBy(employeeThreeLevel, ['client', 'name', 'first'], 'Alice')).toEqual([
      { client: { name: { first: 'Alice', last: 'Citizen' }, role: 'developer' }},
      { client: { name: { first: 'Alice', last: 'Other' }, role: 'analyst' }}
    ])
  })

  test('Simple object with three level, with incorrect path', () => {
    expect(filterBy(employeeThreeLevel, ['client', 'first', 'name'], 'Alice')).toEqual([])
  })
})