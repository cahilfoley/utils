"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Regular expression to match URL patterns, developed using this handy tool https://regexr.com/3sju0
const urlRegex = new RegExp([
    '^(https?:\\/\\/)',
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|((d{1,3}.){3}d{1,3}))',
    '(\\:\\d+)?',
    '(\\/[-a-z\\d%_.~+]*)*',
    '(\\?[;&a-z\\d%_.~+=-]*)?',
    '(\\#[-a-z\\d_]*)?$' // Optional anchor hash
].join(''), 'i');
/**
 * Checks if a value provided is of type string and is a valid URL. If the value is not a string
 * or it is an empty string then the function returns false
 *
 * @example const valid = isValidURL('http://www.google.com') // returns true
 */
const isValidURL = (input) => typeof input === 'string' && urlRegex.test(input);
exports.default = isValidURL;
//# sourceMappingURL=isValidURL.js.map