/**
 * 斐波那契数列 test
 */

 import {fibonacci} from './fibonacci';

 describe('斐波那契数列', ()=>{
  //  0 1 1 2 3 5 8 13 21 34 ...  

   it('0和1',()=>{
     expect(fibonacci(0)).toBe(0)
     expect(fibonacci(1)).toBe(1)
   })

   it('正常情况',()=>{
    expect(fibonacci(2)).toBe(1)
    expect(fibonacci(3)).toBe(2)
    expect(fibonacci(8)).toBe(21)
   })

   it('负数',()=>{
    expect(fibonacci(-1)).toBe(0)
    expect(fibonacci(-10)).toBe(0)
   })

 })