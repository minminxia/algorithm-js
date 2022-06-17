const findContinuousChar1 = (str) => {
    const res = {
        char: '',
        length: 0
    };
    const length = str.length;
    if (length === 0)
        return res;
    let tempLength = 0; // 临时记录当前连续字符串的长度
    for (let i = 0; i < length; i++) {
        tempLength = 0; // 重置
        for (let j = i; j < length; j++) {
            if (str[i] === str[j]) {
                tempLength++;
            }
            // aaabbcccdded
            if (str[i] !== str[j] || j === length - 1) {
                // 不相等，或者已经到了最后一个元素，要去判断最大值
                if (tempLength > res.length) {
                    res.char = str[i];
                    res.length = tempLength;
                }
                if (i < length - 1) {
                    i = j - 1; // 跳步
                }
                break;
            }
        }
    }
    return res;
};
/**
* @description 获取字符串中连续最多的字符以及次数 - 双指针O(n)
*/
const findContinuousChar = (str) => {
    const res = {
        char: '',
        length: 0
    };
    const length = str.length;
    if (length === 0)
        return res;
    let tempLength = 0;
    let i = 0;
    let j = 0;
    for (i; i < length; i++) {
        if (str[i] === str[j]) {
            tempLength++;
        }
        if (str[i] !== str[j] || i === length - 1) {
            // 不相等，或者 i 到了字符串的末尾
            if (tempLength > res.length) {
                res.char = str[j];
                res.length = tempLength;
            }
            tempLength = 0; //重置
            // 没有到末尾
            if (i < length - 1) {
                j = i; // 让j追上i
                i--;
            }
        }
    }
    return res;
};
// 功能测试
const testStr = 'aaabbcccdded1123';
const res1 = findContinuousChar1(testStr); // {char: 'a', length: 3}
const res = findContinuousChar(testStr); // {char: 'a', length: 3}
console.log(res1, res);
export { findContinuousChar1, findContinuousChar };
