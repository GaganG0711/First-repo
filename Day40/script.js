console.log("Tutorial 75")
console.log("JavaScript CallBack & Promises")

// console.log("First Line")

// setTimeout(() => {
//     console.log("Second line inside setTimeout (4sec)")
// }, 4000);

// setTimeout(() => {
//     console.log("Third line inside setTimeout (2sec)")
// }, 2000);
 

const fun2 = (arg) => {
    console.log(arg)
}

const fun = (arg, fun2) => {
    console.log(arg)
    fun2("fun called fun2")
    // fun2 dont have any callback function so it doesnt need to pass that callback
}

const callback = (arg, fun) =>{
    console.log(arg)
    document.onload = fun("callback function called fun",fun2)
    // here fun function hase fun2 as a callback function so we need to pass that as well as param
}

const loadScript = (src, callback) => {
    console.log("loadScript running")
    let sc = document.createElement("script")
    sc.src = src;
    sc.onload = callback("loadScript called callback",fun);
    document.head.append(sc)

}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)
// loadScript("loadscript is running")

