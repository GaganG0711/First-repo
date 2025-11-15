// Promise Api = 6 static mehtods of Promise Class

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a<0.5) {
        reject("Random number is too short 1")
    }
    else {
        setTimeout(() => {
            console.log("the work is done 1")
            resolve("Completed! 1")
        }, 3000);
    }
})
let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a<0.5) {
        reject("Random number is too short 2")
    }
    else {
        setTimeout(() => {
            console.log("the work is done 2")
            resolve("Completed! 2")
        }, 2000);
    }
})
let prom3 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a<0.5) {
        reject("Random number is too short 2")
    }
    else {
        setTimeout(() => {
            console.log("the work is done 3")
            resolve("Completed! 3")
        }, 1000);
    }
})

// 1. Promise.all       
// let p4 = Promise.all([prom1, prom2, prom3]);
// p4.then(a => {
//     console.log(a)̥
// }).catch( err => {
//     console.log(err)
// })

// 2. Promise.allSettled   //waits for all promises to settle and returns their result as an array of objects with status and value
// let p4 = Promise.allSettled([prom1 , prom2])
// p4.then( a => {
//     console.log(a)
// }).catch( err => {
//     console.log(err)
// })

// 3. Promise.race     // waits for the first promise to settle and its result/error become the outcome.
// let p4 = Promise.race([prom1, prom2, prom3])
// p4.then( a => {
//     console.log(a)
// }).catch( err => {
//     console.log(err)
// })

// 4. Promise.any   // waits for the first promise to fullfill (& not rejected), and its result becomes the outcome, throws AggregateError if all the promises are rejected.
// let p4 = Promise.any([prom1, prom2, prom3])
// p4.then( a => {
//     console.log(a)
// }).catch( err => {
//     console.log(err)
// })

// 5. Proomise.resolve(value)   //makes a resolved promise with the given value
// let p4 = Promise.resolve("Completed! successfully")
// p4.then( a => {
//     console.log(a)
// })

// 6. Promise.reject(value)     // makes a rejected promise with the error massage
let p4 = Promise.reject("somthing went wrong!")
p4.catch( err => {
    console.log(err)
})
