/**
 * 快排 test
 */
import {quickSort, quickSort1} from './quick-sort';

describe('快速排序', ()=>{
  it('正常情况', ()=>{
    const testArr = [6,5,3,9,2,4,1]
    const res = quickSort(testArr)
    expect(res).toEqual([1,2,3,4,5,6,9])
  })

  it('有负数', ()=>{
    const testArr = [-2,2,-3,1]
    const res = quickSort(testArr)
    expect(res).toEqual([-3,-2,1,2])
  })

  it('数组元素都一样', ()=>{
    const testArr = [6,6,6,6,6]
    const res = quickSort(testArr)
    expect(res).toEqual([6,6,6,6,6])
  })

  it('空数组', ()=>{
    const testArr = []
    const res = quickSort(testArr)
    expect(res).toEqual([])
  })
})