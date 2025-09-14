console.log("lecture/tutorial 56")
console.log("Operator's on JavaScript")
/*
console.log("-------Arithmatic Operator")
console.log(" + , - , / , * , % , ** , ++ , -- ")
console.log("-------Assignment operator")
console.log(" = , += , -= , *= , /= , %= , **=")
*/

/*
let x = 5;
let y = 2;

console.log(x + y)
console.log(x - y)
console.log(x / y)
console.log(x * y)
console.log(x % y)
console.log(x ** y)

// console.log( ++x )
// console.log( x )

// console.log( --y )
// console.log( y )

console.log("--------")
console.log(" x:" + x, " y:" + y)
{
    let x = y;
    console.log("(x = y) :" + (x = y))
}
{
    let x = 5;
    console.log("(x += y) :" + (x += y))
}
{
    let x = 5;
    console.log("(x -= y) :" + (x -= y))
}
{
    let x = 5;
    console.log("(x *= y) :" + (x *= y))
}
{
    let x = 5;
    console.log("(x /= y) :" + (x /= y))
}
{
    let x = 5;
    console.log("(x %= y) :" + (x %= y))
}
{
    let x = 5;
    console.log("(x **= y) :" + (x **= y))
}
*/

/*
console.log("--------Comparison Operator")
console.log(" == , != , === , !== , > , < , >= , <= , ?")
console.log("--------Logical Operator")
console.log(" || , && , !")
let a = 12;
let b = "12";

// if (a==b){
if (a===b){
    console.log("a and b are exactly same")
}
// else if ( a==b || a!==b){    // it check both condition but only need one to pass and get inside the block.
else if ( a==b && a!==b){       // here both condition should be matched to get inside the block and execute it.
    console.log("a and b's value is same but type is diff.")
}
else{
    console.log("they are not equal")
}
*/

/*
// if else are conditional operator, aside from these simple if else statment there is anothe which is called ternary operator consisting single line if else statement

// syntex for ternary
// variable name = condition ? true(if condition is true this will run) : false(else this will run)

let m = 10;
let n = 55;

let l = (m>n) ? ("m is greater") : ("n is greater");
console.log(l)
*/

// Practice set

//1
// let z = 20;
// let k = ( z >= 10 && z <= 20 ) ? true : false;
// console.log("Number lies between 10-20? --"+k)

//2
// let z = 18;
// if(z%2==0 && z%3==0){
//     console.log("Number is divisible by 2 & 3")
// }
// else{
//     console.log("not divisible")
// }

//3
// let z = 5;
// let k = ( z%2==0 || z%3==0 )? console.log("divisible") : console.log("not divisible")

//4
// let z = 17;
// let k = (z>=18)? "you can drive" : "you can not drive";
// console.log(k)

//5
let mark = 119;
// switch (mark)    you can not compare switch key and case value, add true so which value will be true it will fall under that case
switch (true) {         
    case (mark<50 && mark>0):
        console.log("you failed")
        break;
    case (mark>=50 && mark<60):
        console.log(" c grade")
        break;
    case (mark>=60 && mark<75):
        console.log("b grade")
        break;
    case (mark>=75 && mark<=100):
        console.log("a grade")
        break;
    default:
        console.log("invalid marks")
        break;
}