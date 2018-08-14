import batchTest from '../tests/batchTest'
import curryRight from 'lodash/curryRight'
import getAcronym from './getAcronym'

const batch = curryRight(batchTest)(getAcronym)

describe('getAcronym', () => {
  describe('For a single word use the first 3 letters', () => {
    test('Handle words than are longer than 3 letters', () => {
      batch([['hello', 'HEL'], ['Photosynthesis', 'PHO']])
    })

    test('Handle words that are less than 3 letters', () => {
      batch([['He', 'HE'], ['a', 'A']])
    })
  })

  describe('For 2 - 3 words use the first letter of each word', () => {
    test('Standard 2 - 3 word case', () => {
      batch([
        ['Empire Strikes Back', 'ESB'],
        ['Smooth as ice', 'SAI'],
        ['Cahil.Foley', 'CF'],
        ['Test_of_Underscores', 'TOU']
      ])
    })

    test('Ignore additional delimiter characters', () => {
      batch([
        ['Sneaky  double  spaces', 'SDS'],
        ['What__about--multiple', 'WAM']
      ])
    })
  })

  describe('For more than 3 words use important words', () => {
    test('Remove articles, conjunctions and prepositions', () => {
      batch([
        ['The Empire Strikes Back', 'ESB'],
        ['Sounds of Life Outside', 'SLO'],
        ['Smooth as ice, but longer', 'SIL']
      ])
    })

    test('If there are more than 3 important words use the first 3', () => {
      batch([
        ['The Empire Strikes Back... Again', 'ESB'],
        ['Understanding What to Capitalize in a Title', 'UWC']
      ])
    })

    test('If there is only 1 important word include all words', () => {
      batch([['The as fish or yet and', 'TAF'], ['Donkey is out', 'DIO']])
    })
  })

  test('If no words are provided then return NA', () => {
    batch([['', 'NA']])
  })
})
