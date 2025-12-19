// function that doubles each element in an array. if the array contains consecutive duplicate element only double one of them.

let arr = [1,2,3,3,4,5,6,6,7,8,9,9,10]

function double(arr) {
    let arr2 = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i+1]) {
            arr2.push(arr[i]*2)
            {
                i++;
                arr2.push(arr[i])
            }
        } else {
            arr2.push(arr[i]*2)
        }
    }
    return arr2;
}
console.log(arr)
console.log(double(arr))