// const base = require('@cahil/tools/jest.config')
const { name } = require('./package')

module.exports = {
  testURL: 'http://localhost/',
  name,
  globals: {
    'ts-jest': {
      tsConfigFile: 'tsconfig.json'
    }
  },
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest'
  },
  testMatch: ['**/src/**/*.test.(ts|js)'],
  testEnvironment: 'node'
}
