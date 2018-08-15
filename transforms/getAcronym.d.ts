/**
 * Condense a provided string into a 2 or 3 letter acronym using the following rules
 * - If there is only a single word return the first 3 letters
 * - If there are more than 3 words filter out articles, conjunctions and short prepositions
 */
declare const getAcronym: (title: string) => string;
export default getAcronym;
