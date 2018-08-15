"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const runTest_1 = __importDefault(require("./runTest"));
/**
 * Utility function for running batches of tests with a single call
 */
const batchTest = (cases, func) => {
    const testRunner = testCase => runTest_1.default(testCase, func);
    cases.forEach(testRunner);
};
exports.default = batchTest;
//# sourceMappingURL=batchTest.js.map