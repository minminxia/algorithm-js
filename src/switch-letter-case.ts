/**
 * 切换大小写 正则
 */
const switchLetterCase = (str:string):string=>{
  let res = ''

  const length = str.length
  if(length === 0) return res

  const reg1 = /[a-z]/
  const reg2 = /[A-Z]/

  for(let i = 0; i < length; i++){
    const c = str[i]
    if(reg1.test(c)){
     res += c.toUpperCase()
    } else if(reg2.test(str[i])){
      res += c.toLowerCase()
    } else {
      res += c
    }
  }

  return res

}

/**
 * 切换大小写 ASCII码
 */
const switchLetterCase1 = (str:string):string =>{
  let res = ''

  const length = str.length
  if(length === 0) return res

  for(let i = 0; i < length; i++){
    const c = str[i]
    const code = c.charCodeAt(0)

    if(code >= 65 && code <= 90){
      res += c.toLowerCase()
    } else if(code >= 97 && code <= 122){
      res += c.toUpperCase()
    } else {
      res += c
    }
  }

  return res

}

// 功能测试
const str = '188aBcDS#$%Y'
console.log(switchLetterCase(str));
console.log(switchLetterCase1(str));

// export {switchLetterCase, switchLetterCase1}

// 性能测试
const testStr = 'aBcHJkhhH*jdf8909$jJJHhfdsgHhjoeiHIIUYUH998hhgdsHee'
console.time('switchLetterCase');
for(let i=0; i<10*10000; i++){
  switchLetterCase(testStr) // 291ms
}
console.timeEnd('switchLetterCase'); 

console.time('switchLetterCase1');
for(let i=0; i<10*10000; i++){
  switchLetterCase1(testStr) // 127ms
}
console.timeEnd('switchLetterCase1');

