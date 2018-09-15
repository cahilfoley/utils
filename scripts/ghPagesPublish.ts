import { IPackageJSON } from '../typings/package-json'
import { cd, exec, echo, touch } from 'shelljs'
import url from 'url'
import path from 'path'
import get from '../src/accessors/get'

const packageInfo: IPackageJSON = require(path.join(process.cwd(), 'package.json'))

const repoURL: string = get(
  packageInfo,
  `repository${typeof packageInfo.repository === 'object' ? '.url' : ''}`
)

if (!repoURL) {
  throw new Error('URL does not exist in repository section')
}

const parsedURL = url.parse(repoURL)
const repository = (parsedURL.host || '') + (parsedURL.path || '')
const githubToken = process.env.GH_TOKEN

echo('Deploying documentation')
cd('docs')
touch('.nojekyll')
exec('git init')
exec('git add .')
exec('git config user.name "Cahil Foley"')
exec('git config user.email "cahilfoley2@gmail.com"')
exec(`git commit -m "docs(docs): update gh-pages for version ${packageInfo.version}"`)
exec(`git push --force --quiet "https://${githubToken}@${repository}" master:gh-pages`)
echo('Documentation successfully deployed')
