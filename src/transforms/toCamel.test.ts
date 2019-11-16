import batchTest from '../tests/batchTest'
import toCamel from './toCamel'

const batch = (cases: any[][]) => {
  batchTest(toCamel, cases, { verb: 'toContain' })
}

describe('String to Camel Case (toCamel)', () => {
  test('Always lower cases the first word', () => {
    batch([['To Camel', 'toCamel'], ['hello', 'hello'], ['InOut', 'inOut'], ['FOO_BAR', 'fooBar']])
  })

  test('Maintains acronyms if lower case letters are present', () => {
    batch([['User ID', 'userID'], ['Current KPI Status', 'currentKPIStatus']])
  })

  test('Does not maintain acronyms if the input contains no lower case letters', () => {
    batch([['USER ID', 'userId'], ['CURRENT KPI STATUS', 'currentKpiStatus']])
  })

  test('Does not maintain acronyms if "keepAcronyms" is false', () => {
    batch([
      [['User ID', { keepAcronyms: false }], 'userId'],
      [['Current KPI Status', { keepAcronyms: false }], 'currentKpiStatus'],
    ])
  })
})
