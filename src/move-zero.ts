/**
 * @description 移动0到数组的末尾
 * @param arr number arr
 * 总的时间复杂度O(n^2) 不能使用
 */
const moveZero1 = (arr:number[]):void=>{
  const length = arr.length
  if(length===0) return

  let zeroLength = 0
  // 新加的0不需要再循环
  for(let i = 0;i < length - zeroLength; i++){ // 时间复杂度O(n)
    if(arr[i] === 0){
      arr.push(0)
      arr.splice(i,1) // 时间复杂度O(n)
      i-- // 数组截取了一个元素，i要递减，否则连续 0 就会有错误
      zeroLength++ // 累加0的长度
    }
  }
}

/**
 * @description 移动0到数组的末尾 - 双指针
 * @param arr number arr
 * 总的时间复杂度O(n) 
 */
const moveZero = (arr:number[]):void=>{
  const length = arr.length
  if(length===0) return

  let i
  let j = -1
  for(i = 0; i < length; i++){ // 时间复杂度O(n)
    if(arr[i] === 0){
      // 第一个0
      if(j<0){
        j = i
      }
    }

    if(arr[i]!==0 && j>=0){
      const n = arr[i]
      arr[i] = arr[j]
      arr[j] = n

      j++
    }
    
  }
}

// 功能测试
const arr = [1,0,3,0,11]
const arr1 = [1,0,0,0,0,11]
moveZero(arr)
moveZero1(arr1)
console.log(arr,arr1);

// export  {moveZero, moveZero1}

// 性能测试
let arr2 = []
for(let i = 0; i < 20*10000; i++){
  if(i % 10 === 0){
    arr2.push(0)
  }else{
    arr2.push(i)
  }
}
console.time('moveZero');
moveZero(arr2)
console.timeEnd('moveZero'); // 3mS

let arr3 = []
for(let i = 0; i < 20*10000; i++){
  if(i % 10 === 0){
    arr3.push(0)
  }else{
    arr3.push(i)
  }
}
console.time('moveZero1');
moveZero1(arr3)
console.timeEnd('moveZero1'); // 234mS

