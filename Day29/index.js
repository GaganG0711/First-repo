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

// let res = Array.from({ length: 5 }, (_, i) => i+1).reduce((a,b) => a*b)
// console.log(res)

let a = 5;

function factorial(number) {
    let arr = Array.from(Array(number+1).keys())
    arr.slice(1,)
    // console.log(arr)
    console.log(arr.slice(1,))
    let c = arr.slice(1,).reduce((a, b)=> {
        return a*b;
    })
    console.log(c)
}
factorial(a)