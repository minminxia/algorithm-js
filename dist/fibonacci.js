/**
 * 斐波那契数列（循环）
 * @param n n
 */
const fibonacci = (n) => {
    if (n <= 0)
        return 0;
    if (n === 1)
        return 1;
    let n1 = 1; // 记录n-1的结果
    let n2 = 0; // 记录n-2的结果
    let res = 0;
    for (let i = 2; i <= n; i++) {
        res = n2 + n1;
        // 记录中间结果
        n2 = n1;
        n1 = res;
    }
    return res;
};
const res1 = fibonacci(8);
console.log(res1);
/**
 * 斐波那契数列（递归）
 * @param n n
 * 时间复杂度是O(2^n):大量的重复计算,n过百后内存会奔溃
 */
// 0 1 1 2 3 5 8 13 21 34 ...  
// f(0)=0  
// f(1)=1  
// f(n) = f(n-1) + f(n-2) 
const fibonacci2 = (n) => {
    if (n <= 0)
        return 0;
    if (n === 1)
        return 1;
    return fibonacci2(n - 1) + fibonacci2(n - 2);
};
// 功能测试
const res = fibonacci2(8); // 21
console.log(res);
export { fibonacci, fibonacci2 };
