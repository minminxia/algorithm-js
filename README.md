# algorithm-js
常用的js算法

#### 3-1 求二叉搜索树的第K小值-二叉树和三种遍历
binary-search-tree-base  
 
#### 3-2 求二叉搜索树的第K小值-解题  
二叉搜索树特点：  
left value <= root value  
left value >= root value  
二叉搜索树的价值：方便使用二分法快速查找  
思路：先中序遍历,在找k值
#### 3-3 为什么二叉树很重要，而不是三叉树四岔树
性能：  
数组：查找快O(1),增删慢O(n)  
链表：查找慢O(n),增删快O(1)  
二叉搜索树BST：查找快，增删快 --“木桶效应”  

平衡二叉树：
BST如果不平衡慢，就成了链表了  
要尽量平衡：平衡二叉搜索树BBST  
BBST增删查，时间复杂度都是O(logn),即树的高度  

扩展：  
红黑树、B树都是二叉树的变种，目的都是让整体效果最优，满足不同场景  

#### 3-4 堆有什么特点，和二叉树有什么关系
堆栈模型：js代码执行时，值类型变量，存储在栈；引用类型变量，存储在堆  
堆：逻辑上是一棵二叉树；物理上是一个数组 

#### 3-5 求斐波那契数列的第n值-递归算法会导致运行崩溃
0 1 1 2 3 5 8 13 21 34 ...  
f(0)=0  
f(1)=1  
f(n) = f(n-1) + f(n-2)    
fibonacci.ts - fibonacci2  

#### 3-6 求斐波那契数列的第n值-优化时间复杂度-part1
fibonacci.ts - fibonacci  
总结：  
动态规划：把一个大问题，拆解为多个小问题，逐级向下拆解；用递归的思路去分析问题，再改为循环来实现
算法三大思维：动态规划（这个例子）、贪心、二分

#### 3-7【连环问】青蛙跳台阶有几种方式
一只青蛙，一次可跳1级，也可跳2级  
问：青蛙跳到n级台阶，总共有多少种方式  
n=1 f(n)=1  
n=2 f(n)=2  
...  
fn = f(n-1) + f(n-2)  

#### 3-8 移动0到数组的末尾-splice会导致性能问题  
如果不限制“必须在原数组操作”：  
定义part1 part2两个数组；遍历数组，非0push到part1，0push到part2；返回part1.concat(part2)  

限制在原数组操作：  
传统思路：  
遍历数组，遇到0则push到数组末尾；用splice截取掉当前元素；时间复杂度是O(n^2)-不可用  
move-zero.ts  

#### 3-9 移动0到数组的末尾-使用双指针
优化思路：  双指针  
定义j指向第一个0，i指向j后面的第一个非0；交换i和j的值，继续向后移动；只遍历一次，所以时间复杂度是O(n)  

#### 3-10 获取字符串中连续最多的字符以及次数-使用嵌套循环
如：输入'abacdded'得到：d 3次  
看似时间复杂度是O(n^2),但实际是O(n),因为有“跳步”

#### 3-11 获取字符串中连续最多的字符以及次数-使用双指针
定义指针i和j。j不动，i继续移动；如果i和j的值一致相等，则i继续移动；直到i和j的值不相等，记录处理，让j追上i.继续第一步  

#### 3-12 获取字符串中连续最多的字符以及次数-正则表达式很慢

#### 3-13 用JS实现快速排序并说明时间复杂度-代码演示和单元测试 
固定算法，固定思路：  
找到中间位置midValue  
遍历数组，小于midValue放在left,否则放在right  
继续递归。最后concat拼接，返回  
时间复杂度：O(n*logn): 遍历O(n)+二分O(logN)  
获取midValue的两种方式：  
使用splice，会修改原数组；使用slice，不会修改原数组--更加推荐  

#### 3-14 用JS实现快速排序并说明时间复杂度-性能分析
splice和slice没有区分出来：  
算法本身的时间复杂度就够高O(n*logn)  
外加，splice是逐步二分之后执行的，二分会快速消减  
如果单独比较splice和slice，效果会非常明显  

#### 3-15 获取1-10000之前所有的对称数（回文数）-代码演示
什么是回文？  两边对称的，如： 0,1,2,11,22,101,232,1221...  
思路1:使用数组反转、比较  
数字转换为字符串，再转换为数组；数组reverse，再join为字符串；前后字符串进行对比  
思路2:字符串头尾比较  
数字转化为字符串，字符串头尾字符比较，（也可以用栈，类似括号匹配，但要注意奇偶数）  
思路3:生成翻转数    
使用%和Math.floor生成反转数，前后数字进行对比（全程操作数字，没有字符串类型）  

#### 3-16 获取1-10000之前所有的对称数（回文数）-性能分析
思路1:  看似是O(n),但数组转换、操作都需要时间，所以慢  
思路2vs思路3，操作数字更快（电脑原型就是计算器） 
思路2 要用栈，不合适，因为栈一般也用数组实现，会慢  

总结：  
尽量不要转化数据结构，尤其数组这种有序结构  
尽量不要用内置API，如reverse 不好识别复杂度  
数字操作最快，其次是字符串  

#### 3-17 如何实现高效的英文单词前缀匹配
Q: 有一个英文单词库（数组）,里面有几十万个英文单词；输入一个字符串，快速判断是不是某一个单词的前缀(不用写代码，说思路)  
常规思路：  
1、遍历单词库数组  
2、indexOf判断前缀  
3、实际时间复杂度超过了O(n),因为要考虑indexOf的计算复杂度  
注意：防抖可以减少触发算法的次数，但是没有优化算法  
思路：  
树形结构O(m):a.c.c=>O(3)
arr = ['array', 'abc', 'arrow','bbc','book']
a:{
  b:{
    c:{}
  }
  r:{
    r:{
      o:{
        w:{}
      }
    }
  }
}
b:{
  b:{
    c:{}
  }
  o:{
    o:{
      k:{}
    }
  }
}

#### 3-18 用JS实现数字千分位格式化
如输入数字12050100，输出字符串12，050，100  
常规思路：  
转换为数组，reverse，每3位拆分(转换影响性能)；使用正则表达式(性能最差)；使用字符串拆分(性能最好)  
总结：  
能用字符串不用数组，能不改变原结构则不改变(同3-16)  

#### 3-19 用JS切换字母大小写
输入'12aBc34',输出'12AbC34'  
常见思路： 正则表达式  
推荐：ASCII  

#### 3-20 为什么0.1+0.2!==0.3
计算机使用二进制存储数据的:  
整数转换二进制没有误差，如9转换成二进制是1001  
而小数可能无法使用二进制准确表达，如0.2转化为1.1001100...  
不光是js，其他编程语言也都一样  
如果项目中经常遇到这种小数计算，可以使用第三方库，如mathjs

### 单元测试 jest
npx jest dist/binary-search-tree.test.js

### src/ts->dist/js
tsc -p tsconfig.json