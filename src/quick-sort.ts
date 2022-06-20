/**
 * @description 快速排序(使用 splice(截取的位置，截取几个，返回截取的内容。改变原数组))
 * @param arr number arr
 */

 const quickSort = (arr:number[]):number[] => {
   let length = arr.length
   if(length === 0) return arr

   const midIndex = Math.floor(length/2)
   const midValue = arr.splice(midIndex, 1)[0]

   let leftArr:number[] = []
   let rightArr:number[] = []

   // 注意这里不能直接用 length,而是用arr.length.因为length已经被splice修改了
   for(let i = 0; i < arr.length; i++){
     const n = arr[i]
     if(n < midValue){
      leftArr.push(n)
     } else {
      rightArr.push(n)
     }
   }
  return quickSort(leftArr).concat([midValue], quickSort(rightArr))

}

/**
 * @description 快速排序(使用 slice(开始截取的位置，结束截取的位置，返回截取的内容，不改变原数组))
 * @param arr number arr
 */

const quickSort1 = (arr:number[]):number[] => {
  let length = arr.length
  if(length === 0) return arr

  const midIndex = Math.floor(length/2)
  const midValue = arr.slice(midIndex, midIndex+1)[0]

  let leftArr:number[] = []
  let rightArr:number[] = []

  // O(n*logn)
  for(let i = 0; i < length; i++){
    if(i !== midIndex) { 

      const n = arr[i]
      if(n < midValue){
      leftArr.push(n)
      } else {
      rightArr.push(n)
      }
    }
  }
 return quickSort1(leftArr).concat([midValue], quickSort1(rightArr))

}

 // 功能测试
 const testArr = [6,5,3,9,2,4,1]
 const res = quickSort1(testArr)
 console.log(res);

//  export {quickSort,quickSort1} 

 // 性能测试
//  const arr4 = []
//  for(let i =0; i< 10 * 10000; i++){
//    arr4.push(Math.floor(Math.random()*1000))
//  }
//  console.time('quickSort');
//  quickSort(arr4) // 89ms
//  console.timeEnd('quickSort');
 
//  const arr5 = []
//  for(let i =0; i< 10 * 10000; i++){
//    arr5.push(Math.floor(Math.random()*1000))
//  }
//  console.time('quickSort1');
//  quickSort1(arr5) // 73ms
//  console.timeEnd('quickSort1');

 // 单独比较splice 和 slice
 const arr4 = []
 for(let i =0; i< 10 * 10000; i++){
   arr4.push(Math.floor(Math.random()*1000))
 }
 console.time('splice');
 arr4.splice(5*10000, 1) // 0.014ms
 console.timeEnd('splice');
 
 const arr5 = []
 for(let i =0; i< 10 * 10000; i++){
   arr5.push(Math.floor(Math.random()*1000))
 }
 console.time('slice');
 arr5.slice(5*10000,5*10000 + 1) // 0.007ms
 console.timeEnd('slice');
 
