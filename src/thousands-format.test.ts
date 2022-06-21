/**
 * 数字千分位格式化 test
 */
import {format,format1} from './thousands-format';

describe('数字千分位', ()=>{
  it('正常情况',()=>{
    const test = 10111234
    expect(format1(test)).toBe('10,111,234')
  })

  it('小于 1000',()=>{
    expect(format1(0)).toBe('0')
  })

})