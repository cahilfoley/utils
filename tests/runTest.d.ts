/**
 * Runs a test based on input(s), if an array is provided then the items are passed as arguments to the function
 * being tested, if anything else is provided then it is passed directly to the function
 */
declare const runTest: ([input, output]: any[], func: (...args: any[]) => any) => void;
export default runTest;
