"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const batchTest_1 = __importDefault(require("../tests/batchTest"));
const buildCaseArray_1 = __importDefault(require("../tests/buildCaseArray"));
const curryRight_1 = __importDefault(require("lodash/curryRight"));
const isValidEmail_1 = __importDefault(require("./isValidEmail"));
const batch = curryRight_1.default(batchTest_1.default)(isValidEmail_1.default);
describe('Email Validation (isValidEmail)', () => {
    test('Identifies correct emails', () => {
        batch(buildCaseArray_1.default([
            'Luke.Skywalker@theforce.com',
            'mace.windu@jedi.council',
            'Doris.Spinka@gmail.com',
            'Brad.Borer51@yahoo.com',
            'Jovany_Glover32@gmail.com'
        ], true));
    });
    test('Identifies malformatted emails', () => {
        batch(buildCaseArray_1.default([
            'luke.skywalker.theforce.com',
            'mace.windu@jedicouncil',
            'holy.moly@two.at.signs@co.uk',
            'no spaces@gmail.com',
            ' what __ !_@+# '
        ], false));
    });
    test('Identifies non-string values', () => {
        batchTest_1.default(buildCaseArray_1.default([null, undefined, { foo: 'bar' }, []], false), isValidEmail_1.default);
    });
});
//# sourceMappingURL=isValidEmail.test.js.map