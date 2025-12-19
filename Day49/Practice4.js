// reverse a string and append it to orignal string.

// built in method
let str = "Ramanujan"
// console.log(str)
// let reverse = str.split("").reverse().join("")
// let reverseString = str.concat(" ",reverse)
// console.log(reverseString)

// for loop
// let reverse1 = "";
// for (let i = str.length - 1; i >= 0 ; i--) {
//     reverse1 += str[i];
// }
// console.log(reverse1)
// let reverseString1 = str.concat(reverse1)
// console.log(reverseString1)

// reduce method
// let reverse2 = " ";
let reverse2 = str.split("").reduce((accumulator, currentValue) => currentValue + accumulator, "")
console.log(reverse2)