/**
 * 查询 1-max 的所有对称数（数组反转）
 * @param max 最大值
 */
const findPalindromeNumbers = (max) => {
    const res = [];
    if (max <= 0)
        return res;
    for (let i = 1; i <= max; i++) {
        // 转化为字符串，转换为数组，再反转，比较
        const s = i.toString();
        if (s === s.split('').reverse().join('')) {
            res.push(i);
        }
    }
    return res;
};
/**
 * 查询 1-max 的所有对称数（字符串头尾比较）
 * @param max 最大值
 */
const findPalindromeNumbers1 = (max) => {
    const res = [];
    if (max <= 0)
        return res;
    for (let i = 1; i <= max; i++) {
        const s = i.toString();
        const length = s.length;
        // 字符串头尾比较
        let flag = true;
        let startIndex = 0; // 字符串开始
        let endIndex = length - 1; // 字符串结尾
        while (startIndex < endIndex) {
            if (s[startIndex] !== s[endIndex]) {
                flag = false;
                break;
            }
            else {
                // 继续比较
                startIndex++;
                endIndex--;
            }
        }
        if (flag) {
            res.push(i);
        }
    }
    return res;
};
/**
 * 查询 1-max 的所有对称数（翻转数字）
 * @param max 最大值
 */
const findPalindromeNumbers2 = (max) => {
    const res = [];
    if (max <= 0)
        return res;
    for (let i = 1; i <= max; i++) {
        let n = i;
        let rev = 0; // 存储翻转数
        // i:123
        // n:123
        // 生成翻转数
        while (n > 0) {
            rev = rev * 10 + n % 10; // 123%10 = 3 =>3*10+12%10=32 => 32*10+1%10=321
            n = Math.floor(n / 10); // 123/10 = 12.3 =>12 => 1 => 1/10 =>0
        }
        // n:0
        // rev:321
        if (i === rev)
            res.push(i);
    }
    return res;
};
// 功能测试
const max = 200;
console.log(findPalindromeNumbers2(max));
// 性能测试
console.time('findPalindromeNumbers');
findPalindromeNumbers(100 * 2000); //94ms
console.timeEnd('findPalindromeNumbers');
console.time('findPalindromeNumbers1');
findPalindromeNumbers1(100 * 2000); // 15ms
console.timeEnd('findPalindromeNumbers1');
console.time('findPalindromeNumbers2');
findPalindromeNumbers2(100 * 2000); //7ms
console.timeEnd('findPalindromeNumbers2');
export { findPalindromeNumbers, findPalindromeNumbers1, findPalindromeNumbers2 };
