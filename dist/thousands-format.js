/**
 * 数字千分位格式化 （使用数组）
 * @param n number
 */
const format = (n) => {
    n = Math.floor(n); // 只考虑整数
    const s = n.toString();
    const arr = s.split('').reverse();
    return arr.reduce((prev, val, index) => {
        console.log(prev, val, index);
        if (index % 3 === 0) {
            if (prev) {
                return `${val},${prev}`;
            }
            else {
                return val;
            }
        }
        else {
            return val + prev;
        }
    }, '');
};
/**
 * 数字千分位格式化 （使用字符串）
 * @param n number
 */
const format1 = (n) => {
    const s = n.toString();
    const length = s.length;
    let res = '';
    // s = '12345' => 12,345
    // i = 4 val=5 j=5-4=1 res=5
    // i = 3 val=4 j=5-3=2 res=45
    // i = 2 val=5 j=5-2=3 res = ',' + 345
    for (let i = length - 1; i >= 0; i--) {
        const j = length - i;
        if (j % 3 === 0) {
            if (i === 0) {
                res = s[i] + res;
                return;
            }
            else {
                res = `,${s[i]}${res}`;
            }
        }
        else {
            res = s[i] + res;
        }
    }
    return res;
};
// 功能测试
const testNumber = 1234567;
console.log(format1(testNumber));
export { format, format1 };
