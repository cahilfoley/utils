import babel from 'rollup-plugin-babel'
import fs from 'fs-extra'
import path from 'path'
import resolve from 'rollup-plugin-node-resolve'

// ES module build defaults
const defaults = {
  output: {
    format: 'es'
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
  ],
  experimentalCodeSplitting: true
}

/**
 * Generate rollup configuration objects for building ES modules
 *
 * @param {string} item The name of the item
 * @param {string} sourceDir The path to the directory containing the module directory
 * @param {string} name The name to assign to the ES module
 * @return {{output: Object, input: string[], plugins: *[], experimentalCodeSplitting: boolean}} The new config
 */
const generateModuleConfig = (item, sourceDir, name) => {
  // Get some info about the source file
  const itemPath = path.join(sourceDir, item)
  const stats = fs.statSync(itemPath)
  let dir = '.'
  let input

  // If it's a directory, read all of the files inside of it
  if (stats.isDirectory()) {
    dir = `./${item}`
    input = fs
      .readdirSync(path.join(sourceDir, item))
      .filter(
        // Filter out tests and type defs
        file =>
          !(
            file.endsWith('.test.js') ||
            file.endsWith('.type.js') ||
            file === 'babel.config.js'
          )
      )
      .map(file => `src/${item}/${file}`)
  } else {
    // Not a directory, just use the item
    input = `src/${item}`
  }

  // Return configuration for this module
  return {
    ...defaults,
    output: {
      ...defaults.output,
      dir,
      name
    },
    input
  }
}

export default generateModuleConfig
