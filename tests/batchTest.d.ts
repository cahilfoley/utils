/**
 * Utility function for running batches of tests with a single call
 */
declare const batchTest: (cases: any[][], func: (...args: any[]) => any) => void;
export default batchTest;
