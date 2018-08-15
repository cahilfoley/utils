"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const batchTest_1 = __importDefault(require("../tests/batchTest"));
const curryRight_1 = __importDefault(require("lodash/curryRight"));
const camelToTitle_1 = __importDefault(require("./camelToTitle"));
const batch = curryRight_1.default(batchTest_1.default)(camelToTitle_1.default);
describe('camelToTitle', () => {
    describe('Always capitalizes the first and last word', () => {
        test('Always capitalizes the first word', () => {
            batch([['toTitle', 'To Title'], ['hello', 'Hello'], ['InOut', 'In Out']]);
        });
        test('Always capitalizes the last word', () => {
            batch([
                ['toTitle', 'To Title'],
                ['fooBar', 'Foo Bar'],
                ['InOut', 'In Out']
            ]);
        });
    });
    describe(`Doesn't capitalize words in the exception list`, () => {
        test(`Doesn't capitalize articles`, () => {
            batch([
                ['testAFunction', 'Test a Function'],
                ['giveAnAnswer', 'Give an Answer'],
                ['dropTheBase', 'Drop the Base']
            ]);
        });
        test(`Doesn't capitalize conjunctions`, () => {
            batch([
                ['neitherHereNorThere', 'Neither Here nor There'],
                ['shakeAndStir', 'Shake and Stir'],
                ['functionsForEverybody', 'Functions for Everybody']
            ]);
        });
        test(`Doesn't capitalize short prepositions`, () => {
            batch([
                ['capitalizationForYou', 'Capitalization for You'],
                ['soundsOfLifeOutside', 'Sounds of Life Outside'],
                ['fromDuskTillDawn', 'From Dusk till Dawn']
            ]);
        });
        test(`Doesn't capitalize combinations of exceptions`, () => {
            batch([
                ['saltInTheWounds', 'Salt in the Wounds'],
                ['flyOverAnOcean', 'Fly over an Ocean'],
                ['codingLikeAnAbsoluteBoss', 'Coding like an Absolute Boss']
            ]);
        });
    });
});
//# sourceMappingURL=camelToTitle.test.js.map