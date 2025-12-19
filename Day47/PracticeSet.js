// 1. 

// setTimeout(() => {
//     console.log("hello")
//     console.log("world")
// }, 2000);

// setTimeout(() => {
//     console.log("hello")
//     setTimeout(() => {
//         console.log("world")
//     }, 2000);
// }, 2000);


// 2. write a js program to find average of numbers in an array using spread syntax.
// let arr = [1,2,3,4,5,6,7,8,9,10]
// function average(...arr) {
//     return (arr.reduce((total, num)=> total+num, 0))/arr.length
// }
// console.log(average(...arr))
// if we do not use spread operator it will also work, reduce will expect an array and take array values one by one
// Spread is required only when the function expects many separate arguments, NOT an array.

// 3. write a javascript fun which resolves a promise after n seconds. the fun takes n as parameter. use an iife to execute the fun with different values of n.
// function wait(n) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(`fun execute after ${n} seconds`)
//         }, n*1000);
//     })
// }
// (async () => {
//     console.log(await wait(2))
//     console.log(await wait(3))
//     console.log(await wait(4))
// })();

// 4. simple intrest calci
// function intrest(p , r , t) {
//     return (p*r*t)/100;
// }
// console.log(intrest(1000, 10, 5))

