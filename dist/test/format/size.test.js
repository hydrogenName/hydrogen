"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var size_1 = require("../../src/format/size");
describe('formatSize function test', function () {
    test('参数0', function () {
        expect(size_1.formatSize(0)).toBe('0 B');
    });
    test('formatSize function', function () {
        expect(size_1.formatSize(1000)).toBe('1000 B');
        expect(size_1.formatSize(10000)).toBe('9.77 KB');
    });
});
