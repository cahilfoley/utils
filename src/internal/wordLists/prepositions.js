/**
 * All prepositions
 * @type {string[]}
 */
export const all = [
  'about',
  'above',
  'across',
  'after',
  'against',
  'along',
  'among',
  'around',
  'at',
  'before',
  'behind',
  'below',
  'beneath',
  'beside',
  'between',
  'beyond',
  'but',
  'by',
  'despite',
  'down',
  'during',
  'except',
  'for',
  'from',
  'in',
  'inside',
  'into',
  'like',
  'near',
  'of',
  'off',
  'on',
  'onto',
  'out',
  'outside',
  'over',
  'past',
  'per',
  'since',
  'through',
  'throughout',
  'till',
  'to',
  'toward',
  'under',
  'underneath',
  'until',
  'up',
  'upon',
  'via',
  'with',
  'within',
  'without',
  'versus'
]

/**
 * Prepositions shorter than 5 characters
 * @type {string[]}
 */
export const short = all.filter(word => word.length < 5)

export default all
