"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const batchTest_1 = __importDefault(require("../tests/batchTest"));
const curryRight_1 = __importDefault(require("lodash/curryRight"));
const getAcronym_1 = __importDefault(require("./getAcronym"));
const batch = curryRight_1.default(batchTest_1.default)(getAcronym_1.default);
describe('getAcronym', () => {
    describe('For a single word use the first 3 letters', () => {
        test('Handle words than are longer than 3 letters', () => {
            batch([['hello', 'HEL'], ['Photosynthesis', 'PHO']]);
        });
        test('Handle words that are less than 3 letters', () => {
            batch([['He', 'HE'], ['a', 'A']]);
        });
    });
    describe('For 2 - 3 words use the first letter of each word', () => {
        test('Standard 2 - 3 word case', () => {
            batch([
                ['Empire Strikes Back', 'ESB'],
                ['Smooth as ice', 'SAI'],
                ['Cahil.Foley', 'CF'],
                ['Test_of_Underscores', 'TOU']
            ]);
        });
        test('Ignore additional delimiter characters', () => {
            batch([
                ['Sneaky  double  spaces', 'SDS'],
                ['What__about--multiple', 'WAM']
            ]);
        });
    });
    describe('For more than 3 words use important words', () => {
        test('Remove articles, conjunctions and prepositions', () => {
            batch([
                ['The Empire Strikes Back', 'ESB'],
                ['Sounds of Life Outside', 'SLO'],
                ['Smooth as ice, but longer', 'SIL']
            ]);
        });
        test('If there are more than 3 important words use the first 3', () => {
            batch([
                ['The Empire Strikes Back... Again', 'ESB'],
                ['Understanding What to Capitalize in a Title', 'UWC']
            ]);
        });
        test('If there is only 1 important word include all words', () => {
            batch([['The as fish or yet and', 'TAF'], ['Donkey is out', 'DIO']]);
        });
    });
    test('If no words are provided then return NA', () => {
        batch([['', 'NA']]);
    });
});
//# sourceMappingURL=getAcronym.test.js.map