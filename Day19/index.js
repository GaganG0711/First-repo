console.log("JavaScript Variable, Data types & Object")

console.log("---------assinging rules")
var m = 11;
var _m = 12;
var $m = 13;
// var 1m = 14;  not allowed
console.log("m-"+m, "_m-"+ _m,"$m-"+$m, "----1m will raise error as varibale will only starts with letter, underscore or dollar")



console.log("-------globally declared")
// var a = 10;
let b = 15;
const c = 20;
console.log("a: " + a, "b: " + b, "c: " + c) // a is not defined above this line
console.log(typeof a, typeof b, typeof c)

{
    console.log("-------declared inside a block")
    var a = "First";
    // var b = 30; not allowed to redefine let b to a var, beacause let is also avilable globally even in this block/ same with const c
    let b = 30;
    // const b = 30;
    const c = true;
    // let c = true
    console.log("a: " + a, "b: " + b, "c: " + c)
    console.log(typeof a, typeof b, typeof c)
    console.log("A is changed, B is changed, C is also changed inside a block ")
    console.log("But b and c are completly different new created varible, destroyed outside the block")
    console.log("we can create b to const variable type and c to let variable type, but can not define them to var type, cause it is globally decalerd as let and const")
    let d = true;
}

console.log("-------outside the block value")
console.log("a: " + a, "b: " + b, "c: " + c)
console.log(typeof a, typeof b, typeof c)
console.log("A is changed globally when changed inside the block, B and C remains same Globally")

// console.log(d)
console.log("d that is declared in block is not availble outside its block and will raise error")

// addition of number and string

console.log("---------------concatination of string and number")
var p = 1;
var q = "22";
console.log(typeof p, typeof q)
console.log(p+q)
console.log(p+""+q)
console.log(p+"1"+q)
console.log(typeof (p+"1"+q))
console.log(p+1+q)
console.log(q+1+p)
console.log(q+(1+p))
console.log(p+"1"+p)
console.log(q+"1"+p)
console.log(q+1+q)

console.log(p)
console.log(P)  // its defined after this line so it will say undefined/ if its never defined it will raise error
var P = 33;
console.log(P)

// primitive data type and object
console.log("-------------primitive data type and object")
console.log("there are 7 primitive data type which are----")
console.log(" 1)Null, 2)number, 3)String, 4)Undefined, 5)Boolean, 6)Symbol, 7)Bigint")

let A = null;
let B = 10;
let C = "hello";
let D = undefined;
let E = true;
let F =  Symbol("$$");
let G = 9007199254740991n;

console.log(A,B,C,D,E,F,G)
console.log( typeof A, typeof B, typeof C, typeof D, typeof E, typeof F, typeof G)
console.log("Even though typeof null returns 'object', null is still considered a primitive (this is a historical bug in JS).")

console.log("-------------object creating")
let obj = {
    key: "value",  //this is how to a pair is created in javascript
    name: "Gagan",
    "job role": "Jr.Fullstack Dev",
    age:22,
    working: true,
}
// obj.salary = 22000;
// console.log(obj)
// obj.salary = 30000;
// console.log(obj)

obj.salary = 22000;
console.log({...obj});  // shows salary: 22000

obj.salary = 30000;
console.log({...obj});  // shows salary: 30000

const ob = {
    name: "gagan",
    age: 22,
}

console.log({...ob})

ob.age = 24;
ob.name = 55
ob.work= "Full-Stack Dev"
console.log({...ob})