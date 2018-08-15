import batchTest from './batchTest';
import buildCaseArray from './buildCaseArray';
import runTest from './runTest';
export { batchTest, buildCaseArray, runTest };
declare const _default: {
    batchTest: (cases: any[][], func: (...args: any[]) => any) => void;
    buildCaseArray: (testCases: any[], output: any) => any[][];
    runTest: ([input, output]: any[], func: (...args: any[]) => any) => void;
};
export default _default;
