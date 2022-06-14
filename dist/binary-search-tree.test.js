/**
 * @description 二叉搜索树 test
 */
import { getKthValue } from './binary-search-tree';
describe('二叉搜索树', () => {
    const bst = {
        value: 5,
        left: {
            value: 3,
            left: {
                value: 2,
                left: null,
                right: null
            },
            right: {
                value: 4,
                left: null,
                right: null
            }
        },
        right: {
            value: 7,
            left: {
                value: 6,
                left: null,
                right: null
            },
            right: {
                value: 8,
                left: null,
                right: null
            }
        }
    };
    it('正常情况', () => {
        const res = getKthValue(bst, 3);
        expect(res).toBe(4);
    });
    it('k 不在正常范围之内', () => {
        const res = getKthValue(bst, 0);
        expect(res).toBeNull();
    });
    it('k 不在正常范围之内', () => {
        const res = getKthValue(bst, 1000);
        expect(res).toBe(null);
    });
});