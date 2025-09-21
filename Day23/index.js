/*  
create a faulty calculator using js 
1. takes 2 number from user 
2. perform wrong operation as follows:
+ ----> -
* ----> +
- ----> /
/ ----> **
it performs wrong operation 10% of the times */

console.log("Lecture/Tutorial 59")
console.log("Exercise 9")

let x  = Math.random()
console.log("x : "+x)

function calculator(a,b) {
    console.log("a : "+a, "b : "+b)
    if (x<0.1) {
        console.log("addition : "+ (a-b))
        console.log("multiply : "+ (a+b))
        console.log("substraction : "+ (a/b))
        console.log("divide : "+ (a**b))
    } else {
        console.log("addition : "+ (a+b))
        console.log("multiply : "+ (a*b))
        console.log("substraction : "+ (a-b))
        console.log("divide : "+ (a/b))
    }
}
calculator(10,5)