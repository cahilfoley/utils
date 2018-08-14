import babel from 'rollup-plugin-babel'
import fs from 'fs-extra'
import path from 'path'
import resolve from 'rollup-plugin-node-resolve'
import generateModuleConfig from './internal/generateModuleConfig'
import updateIgnoreFiles from './internal/updateIgnoreFiles'
import { main, name as packageName, version } from './package.json'

// Need to get a list of all files to be included in the ES build, currently assumes only 1 layer of depth
const sourceDir = path.join(process.cwd(), 'src')
const sourceModules = fs
  .readdirSync(sourceDir)
  .filter(name => !(name === 'internal' || name === '.babelrc'))

// Add each to the .gitignore and .npmignore files plus the generated manifest
updateIgnoreFiles(sourceModules)
fs.writeJSON(path.resolve(__dirname, 'internal', '.out.json'), [
  ...sourceModules,
  'dist'
])

// Generate build configuration
const esBuilds = sourceModules.map(name =>
  generateModuleConfig(name, sourceDir, packageName)
)

// Generated banner for bundle file
const header = `/* ${packageName} build version ${version} */`
const border = `/${'*'.repeat(header.length - 2)}/`
const banner = ['\n', border, header, border, '\n'].join('\n')

export default [
  // CJS build, outputs a single bundle
  {
    input: 'src/index.js',
    output: {
      banner,
      file: main,
      format: 'cjs'
    },
    plugins: [
      resolve(),
      babel({
        exclude: 'node_modules/**', // only transpile our source code
        presets: [['@babel/env', { modules: false }]],
        plugins: [
          [
            'module-resolver',
            {
              root: 'src'
            }
          ],
          [
            '@babel/proposal-class-properties',
            {
              spec: true
            }
          ],
          '@babel/proposal-object-rest-spread'
        ]
      })
    ]
  },
  // All ES builds generated above
  ...esBuilds
]
