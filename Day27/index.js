// Lecture/Tutorial 63 
// Loops on arrays

let arr = [1, 22, 11, 4, 28, 37]

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element)
}
arr.sort((a,b) => {
    return Number(a) - Number(b)
})
console.log(...arr)

arr.forEach((value, index, arr) => {
    console.log(value, index)
});


let object = {
    a:1,
    b:2,
    c:3
}
object.d = 33;
Object.prototype.added = 99; //this is inharited proterty/prototype / remove ! to get direct property
for (const key in object) {
    if (Object.hasOwn(object, key)) {  
    const element = object[key];
    console.log(`${key} ==>  ${element}`)
    }
}

for (const element of arr) {
    console.log(element)
}