/**
 * 对称数 test
 */
import { findPalindromeNumbers2 } from './palindromeNumbers';
describe('对称数', () => {
    const max = 200;
    it('正常情况', () => {
        const res = findPalindromeNumbers2(max);
        expect(res.length).toBe(28);
    });
    it('max 小于等于 0', () => {
        const res = findPalindromeNumbers2(0);
        expect(res).toEqual([]);
    });
});
