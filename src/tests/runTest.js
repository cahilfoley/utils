"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Runs a test based on input(s), if an array is provided then the items are passed as arguments to the function
 * being tested, if anything else is provided then it is passed directly to the function
 */
const runTest = ([input, output], func) => {
    if (!Array.isArray(input))
        input = [input];
    expect(func(...input)).toBe(output);
};
exports.default = runTest;
//# sourceMappingURL=runTest.js.map