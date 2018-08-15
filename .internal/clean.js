const fs = require('fs-extra')
const path = require('path')
const rimraf = require('rimraf')
const util = require('util')

const remove = util.promisify(rimraf)

/**
 * Remove all generated files and folders from the project
 * @return {void}
 */
const clean = async () => {
  for (let dir of ['internal', 'tests', 'transforms', 'validation']) {
    const files = await fs.readdir(path.join(process.cwd(), dir))
    for (let file of files) {
      if (file.endsWith('.js') || file.endsWith('.js.map')) {
        await remove(path.join(process.cwd(), dir, file))
      }
    }
  }
  await remove(path.join(process.cwd(), 'index.js'))
  await remove(path.join(process.cwd(), 'index.js.map'))
}

clean()
