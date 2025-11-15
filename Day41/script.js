console.log("Promise in JavaScript")

// Demo of Promise
// let prom1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("the work is done")
//         resolve("Completed!")
//     }, 2000);
// })
// prom1.then((a) => {
//     console.log(a)
// })

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a<0.5) {
        reject("Random number is too short")
    }
    else {
        setTimeout(() => {
            console.log("the work is done")
            resolve("Completed!"+a)
        }, 2000);
    }
})
// prom1.then((res) => {
//     console.log(res)
// }).then((res) => {
//     console.log(res + " this is random number") // promise is already settled so res will be undefined
// }).catch((err) =>{ 
//     console.log(err)
// })

// multiple handler in promise
// prom1.then((res) => {
//     console.log("this is handler1:", res)
// })
// prom1.then((res) => {
//     console.log("this is handler1:", res)
// })
// prom1.then((res) => {
//     console.log("this is handler1:", res)
// })

// chained handlers in promise
prom1.then((res) => {
    console.log(res)
    return res + " handler1"
}).then((res) => {
    console.log(res)
    return res + " handler2"
}).then((res) => {
    console.log(res)
    return res + " handler3"
}).then((res) => {
    console.log(res)
    return res + " handler4"
})