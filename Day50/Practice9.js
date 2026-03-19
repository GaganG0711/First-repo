// async array mapping: async funtion that takes an array of numbers and returns new array of promises where each number is multiplied by 2 after a delay of 500 miliseconds

let arr = [1,2,3,4,5]
// const delay = ms => new Promise(r => setTimeout(r, ms));

// const result = arr.map(async num => {
//     await delay(2000);
//     return document.write(num * 2);
// });

// console.log(result)


function sequentialDouble(arr) {
    let chain = Promise.resolve();

    return arr.map(num => {
        chain = chain.then(
            () =>
                new Promise(resolve => {
                    setTimeout(() => {
                        resolve(num * 2);
                    }, 500);
                })
        );
        return chain;
    });
}
console.log(sequentialDouble(arr))