import { curryRight } from 'lodash'
import batchTest from '../tests/batchTest'
import camelToTitle from './camelToTitle'

const batch = curryRight(batchTest)(camelToTitle)

describe('camelToTitle', () => {
  describe('Always capitalizes the first and last word', () => {
    test('Always capitalizes the first word', () => {
      batch([['toTitle', 'To Title'], ['hello', 'Hello'], ['InOut', 'In Out']])
    })

    test('Always capitalizes the last word', () => {
      batch([
        ['toTitle', 'To Title'],
        ['fooBar', 'Foo Bar'],
        ['InOut', 'In Out']
      ])
    })
  })

  describe(`Doesn't capitalize words in the exception list`, () => {
    test(`Doesn't capitalize articles`, () => {
      batch([
        ['testAFunction', 'Test a Function'],
        ['giveAnAnswer', 'Give an Answer'],
        ['dropTheBase', 'Drop the Base']
      ])
    })

    test(`Doesn't capitalize conjunctions`, () => {
      batch([
        ['neitherHereNorThere', 'Neither Here nor There'],
        ['shakeAndStir', 'Shake and Stir'],
        ['functionsForEverybody', 'Functions for Everybody']
      ])
    })

    test(`Doesn't capitalize short prepositions`, () => {
      batch([
        ['capitalizationForYou', 'Capitalization for You'],
        ['soundsOfLifeOutside', 'Sounds of Life Outside'],
        ['fromDuskTillDawn', 'From Dusk till Dawn']
      ])
    })

    test(`Doesn't capitalize combinations of exceptions`, () => {
      batch([
        ['saltInTheWounds', 'Salt in the Wounds'],
        ['flyOverAnOcean', 'Fly over an Ocean'],
        ['codingLikeAnAbsoluteBoss', 'Coding like an Absolute Boss']
      ])
    })
  })
})
