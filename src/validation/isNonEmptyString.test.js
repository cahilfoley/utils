"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const batchTest_1 = __importDefault(require("../tests/batchTest"));
const buildCaseArray_1 = __importDefault(require("../tests/buildCaseArray"));
const curryRight_1 = __importDefault(require("lodash/curryRight"));
const isNonEmptyString_1 = __importDefault(require("./isNonEmptyString"));
const batch = curryRight_1.default(batchTest_1.default)(isNonEmptyString_1.default);
describe('isNonEmptyString', () => {
    test('Identifies valid strings', () => {
        batch(buildCaseArray_1.default(['Something', 'Multiple words'], true));
    });
    test('Identifies empty strings', () => {
        expect('');
    });
    test('Identifies non-string values', () => {
        batch(buildCaseArray_1.default([null, undefined, { foo: 'bar' }, []], false));
    });
});
//# sourceMappingURL=isNonEmptyString.test.js.map