import batchTest from '../tests/batchTest'
import buildCaseArray from '../tests/buildCaseArray'
import curryRight from 'lodash/curryRight'
import isValidEmail from './isValidEmail'

const batch = curryRight(batchTest)(isValidEmail)

describe('Email Validation (isValidEmail)', () => {
  test('Identifies correct emails', () => {
    batch(
      buildCaseArray(
        [
          'Luke.Skywalker@theforce.com',
          'mace.windu@jedi.council',
          'Doris.Spinka@gmail.com',
          'Brad.Borer51@yahoo.com',
          'Jovany_Glover32@gmail.com'
        ],
        true
      )
    )
  })

  test('Identifies malformatted emails', () => {
    batch(
      buildCaseArray(
        [
          'luke.skywalker.theforce.com',
          'mace.windu@jedicouncil',
          'holy.moly@two.at.signs@co.uk',
          'no spaces@gmail.com',
          ' what __ !_@+# '
        ],
        false
      )
    )
  })

  test('Identifies non-string values', () => {
    batchTest(
      buildCaseArray([null, undefined, { foo: 'bar' }, []], false),
      isValidEmail
    )
  })
})
