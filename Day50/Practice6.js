// function that should sum all numbers in an array until it encounters a negative number.

let arr = [5,5,5,5,5]

function sum(arr) {
    let res = 0;
    // arr.forEach(element => {
    //     if (element >= 0) {
    //         res += element;
    //     }
    //     else if (element < 0){
    //         return console.log(res)
    //     }
    // });
    // console.log(res)
    for (const element of arr) {
        if (element < 0){
            console.log(res);
            return;
        }
        res += element;
    }
    console.log(res)
}
sum(arr)