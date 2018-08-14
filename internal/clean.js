import fs from 'fs-extra'
import path from 'path'
import rimraf from 'rimraf'
import util from 'util'

const remove = util.promisify(rimraf)

/**
 * Remove all generated files and folders from the project
 * @return {void}
 */
const clean = async () => {
  const manifestPath = path.join(process.cwd(), 'internal', '.out.json')
  if (await fs.exists(manifestPath)) {
    const generatedDirs = await fs.readJSON(manifestPath)
    const operations = generatedDirs.map(dir => {
      const itemPath = path.join(process.cwd(), dir)
      console.log('Removing generated item:', itemPath)
      return remove(itemPath)
    })
    // operations.push(remove(manifestPath))
    return await Promise.all(operations)
  }
}

clean()
