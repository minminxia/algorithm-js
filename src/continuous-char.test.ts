/**
 * 获取字符串中连续最多的字符以及次数 test
 */
import {findContinuousChar1, findContinuousChar} from './continuous-char';

describe('获取字符串中连续最多的字符以及次数', ()=>{
  it('正常情况', ()=>{
    const str = 'aabbccddeeee11223'
    const res = findContinuousChar(str)
    expect(res).toEqual({char: 'e', length: 4})
  })

  it('空字符串', ()=>{
    const res = findContinuousChar('')
    expect(res).toEqual({char: '', length: 0})
  })

  it('无连续字符', ()=>{
    const str = 'abc'
    const res = findContinuousChar(str)
    expect(res).toEqual({char: 'a', length: 1})
  })

  it('全部都是连续字符', ()=>{
    const str = 'aaa'
    const res = findContinuousChar(str)
    expect(res).toEqual({char: 'a', length: 3})
  })
})