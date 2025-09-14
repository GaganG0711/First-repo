console.log("Lecture/Tutorial 58")
console.log("Function in javascript")

// function add(a, b) {
//     // value = a + b;
//     // console.log(value)
//     // console.log(a+b)
//     return a + b;
// }

// // let result = add(10, 15);
// // console.log(result)
// console.log(add(10,20))


// function min(a, b, c=10) {
//     value = a+b-c;
//     console.log(value)
//     console.log(a,b,c)
// }
// min(5,3)
// min(1,11)

// function str(para) {
//     for (const element of para) {
//         console.log(element)
//     }
// }

// str("hello")

//arrow function

let func = (a) =>{
    console.log("an arrow function "+a)
}
func("hello")
func(22)
func(true)

let func2 = () =>{
    console.log("this is also an arrow function ")
}
func2()