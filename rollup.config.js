import babel from 'rollup-plugin-babel'
import fs from 'fs-extra'
import generateModuleConfig from './internal/generateModuleConfig'
import path from 'path'
import resolve from 'rollup-plugin-node-resolve'
import updateIgnoreFiles from './internal/updateIgnoreFiles'
import { version } from './package.json'

// Need to get a list of all files to be included in the ES build, currently assumes only 1 layer of depth
const sourceDir = path.join(process.cwd(), 'src')
const sourceModules = fs
  .readdirSync(sourceDir)
  .filter(
    name =>
      !(name.endsWith('.js') || name === 'internal' || name === '.babelrc')
  )

// Add each to the .gitignore and .npmignore files plus the generated manifest
updateIgnoreFiles(sourceModules)
fs.writeJSON(path.resolve(__dirname, 'internal', '.out.json'), [
  ...sourceModules,
  'dist'
])

const esBuilds = sourceModules.map(name =>
  generateModuleConfig(name, sourceDir)
)

// Generated banner for bundle file
const header = `/* @cahilfoley/utils build version ${version} */`
const border = `/${'*'.repeat(header.length - 2)}/`
const banner = ['\n', border, header, border, '\n'].join('\n')

export default [
  // CJS build, outputs a single bundle
  {
    input: 'src/main.js',
    output: {
      banner,
      file: 'dist/utils.js',
      format: 'cjs',
      name: '@cahilfoley/utils'
    },
    plugins: [
      resolve(),
      babel({
        exclude: 'node_modules/**' // only transpile our source code
      })
    ],
    external: ['lodash']
  },
  // All ES builds generated above
  ...esBuilds
]
