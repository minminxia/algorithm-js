/**
 * 切换大小写 test
 */
import { switchLetterCase1 } from './switch-letter-case';
describe('切换大小写', () => {
    it('正常情况', () => {
        const str = '188aBcDS#$%Y';
        expect(switchLetterCase1(str)).toBe('188AbCds#$%y');
    });
    it('空字符串', () => {
        const str = '';
        expect(switchLetterCase1(str)).toBe('');
    });
    it('非字母', () => {
        const str = '188你好哇#$%';
        expect(switchLetterCase1(str)).toBe('188你好哇#$%');
    });
});
