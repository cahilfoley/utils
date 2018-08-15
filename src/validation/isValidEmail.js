"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
/**
 * Tests if the input string is in the form of a valid email address
 *
 * @example isValidEmail(`no spaces@sham.co`) // => false
 */
const isValidEmail = (input) => emailPattern.test(input);
exports.default = isValidEmail;
//# sourceMappingURL=isValidEmail.js.map