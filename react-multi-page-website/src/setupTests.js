// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// jsdom (the fake browser tests run in) doesn't include the Web Crypto API or TextEncoder,
// which the demo login uses, so borrow Node's versions for tests.
import { webcrypto } from "crypto";
import { TextEncoder } from "util";

Object.defineProperty(window, "crypto", { value: webcrypto });
global.TextEncoder = TextEncoder;
