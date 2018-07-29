import babel from 'rollup-plugin-babel'
import fs from 'fs-extra'
import path from 'path'
import resolve from 'rollup-plugin-node-resolve'
import rimraf from 'rimraf'

// ES module build defaults
const defaults = {
  output: {
    format: 'es',
    name: '@cahilfoley/utils'
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    })
  ],
  external: ['lodash'],
  experimentalCodeSplitting: true
}

/**
 * Generate rollup configuration objects for building ES modules
 *
 * @param {string} folder The name of the folder
 * @param {string} sourceDir The path to the directory containing the module directory
 * @return {{output: Object, input: string[], plugins: *[], experimentalCodeSplitting: boolean}} The new config
 */
const generateModuleConfig = (folder, sourceDir) => {
  // Remove previous build
  rimraf.sync(path.join(process.cwd(), folder))

  // Get a list of scripts to be included
  const scripts = fs
    .readdirSync(path.join(sourceDir, folder))
    .filter(
      // Filter out tests, type defs and index files
      file =>
        !(
          file.endsWith('.test.js') ||
          file.endsWith('.type.js') ||
          file === 'index.js'
        )
    )
    .map(file => `src/${folder}/${file}`)

  // Return configuration for this module
  return {
    ...defaults,
    output: {
      ...defaults.output,
      dir: folder
    },
    input: scripts
  }
}

export default generateModuleConfig
