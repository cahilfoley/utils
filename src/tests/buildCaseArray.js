"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Builds an array of test cases with a common output
 * @example const evenTests = [...buildCaseArray([2, 4, 6], true), ...buildCaseArray([1, 3, 5], false)]
 */
const buildCaseArray = (testCases, output) => testCases.map(testCase => [testCase, output]);
exports.default = buildCaseArray;
//# sourceMappingURL=buildCaseArray.js.map