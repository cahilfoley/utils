import articles from './articles'
import conjunctions from './conjunctions'
import others from './others'
import { short as shortPrepositions } from './prepositions'

/** Lists of words that shouldn't be capitalized in titles */
const except: string[] = [...articles, ...conjunctions, ...shortPrepositions, ...others]

export default except
