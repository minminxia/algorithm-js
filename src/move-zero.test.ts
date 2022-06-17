/**
 * 移动 0 到数组末尾 test
 */

 import {moveZero,moveZero1} from './move-zero';

 describe('移动 0 到数组末尾', ()=>{
   it('正常情况', ()=>{
     const arr = [1,0,3,4,0,0,0,11,0]
    //  moveZero1(arr)
     moveZero(arr)
     expect(arr).toEqual([1,3,4,11,0,0,0,0,0])
   })

   it('没有 0', ()=>{
     const arr = [1,2,3,45,6]
    //  moveZero1(arr)
     moveZero(arr)
     expect(arr).toEqual([1,2,3,45,6])
   })

   it('全是 0', ()=>{
    const arr = [0,0,0,0,0]
    // moveZero1(arr)
    moveZero(arr)
    expect(arr).toEqual([0,0,0,0,0])
  })

 })