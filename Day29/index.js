// Exercise 10
// write a program to calculate factorial of a number using reduce and using for loop

// // For loop
// function factorial(num) {
//     let res = 1;
//     for (let a = 1 ; a<=num ; a++ ) {
//         res *= a;
//     }
//     return res;
// }
// console.log(factorial(4))

// // Reduce
// let res = 1;
// console.log(Array.from({ length: 5}, (_, i) => i+1).reduce((a,b) => a*b))





// let res = 1
// function fact(num) {
//     for (let a = 1; a <= num; num--) {
//         console.log("count"+a)
//         console.log(num) 
//         res = res*num
//         console.log(res)        
//     }
// }
// fact(5)

let res = Array.from({ length: 5 }, (_, i) => i+1).reduce((a,b) => a*b)
console.log(res)