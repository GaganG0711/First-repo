// Lecture/Tutorial 63 
// MAP FILTER REDUCE ON arrays


// MAP 
let arr = [1,2,3,4,5,6,7,8,9,10]
// without map 
// let newArr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     if (element%2==0) {
//         newArr.push(element)
//     }
//     // if(element%2 == 0){       
//     //     newArr.push(...arr.splice(index,1))
//     //     index--
//     // }
// }
// console.log(arr)
// console.log(newArr)
//With MAP   //map is not made to filter out element from existing array
let newArr = arr.map((element)=>element%2===0 ? element**2 : element )
console.log(newArr)

//Filter
// let even = (e) => {
//     if (e%2==0) {
//         return true
//     }
//     return false
// }
// let newArr2 = arr.filter(even)
let newArr2 = arr.map(e=>{return e%2==0? true: false})  // [ false, true, false, true, false, true, false, true, false, true ]
console.log(newArr2)
let newArr3 = arr.filter(e=>{return e%2==0? true: false})   // [ 2, 4, 6, 8, 10 ]
console.log(newArr3)

let arr2 = [1,2,3,4,5,6,7,8,9,10]
let newArr4 = arr2.reduce((a,b)=>{ return (a+b)})
// console.log(arr.reduce((a,b)=>{ return (a+b)}))
console.log(`\n`,newArr4)