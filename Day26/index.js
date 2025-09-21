// Lecture/Tutorial 63 
// Arrays in JavaScript

let arr = ["arr",1,2,3,4,5]
const arr2 = ["arr2",11,7,8,9,10]
console.log(arr , typeof(arr))
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[4])
console.log(arr.concat(arr2).length) //doesnt print arr but its length is combined
console.log(arr)


// array are mutable unlike string
let a = "shubham"
console.log(a[0])
a[0] = "Sh"
console.log(a[0])   //string are imutable/can't change

arr[1] = 1;
console.log(arr)   //changed the array element by index

arr2[1] = 6;
console.log(arr2) 

// array methods 
console.log(arr2.toString())
console.log(arr2.join(" and "))   //this also retuns string
console.log(arr2.pop())
console.log(arr2)
console.log(arr2.push("20"))     //push method returns length of the array after push not the array element or entire array
// arr.concat(arr2.push(20))
console.log(arr)
// console.log(arr.concat(arr2.push("21")))
arr2.push(10)
console.log(arr.concat(arr2))
// push and pop are stack method based on lifo (last in first out)
console.log("and for queue mehtod we use shift, unshift mehtod")
console.log(arr)
arr.shift() //dispays first element that is poped
console.log(arr) //poped and element from start
arr.unshift("arr")
console.log(arr)
delete arr[0]   //deletes the element value but it is present as undefind or empty item.
console.log(arr,"length is same after delete->",arr.length)


let arr3 = [11,22,33]
let arr4 = ["aa","bb","cc"]
let arr5 = [ {name:"shubham", age: 23, role:"dev"}, {name:"bam", age: 32, role:"test"}, {name:"vikram", age: 43, role:"manage"},]

let newarr = arr3.concat(arr4, arr5)
console.log(newarr, newarr.length)
//ACCESS OF OBJECT VALUE
let value = arr5[0].name
let value2 = arr5[1].role
console.log(value,value2)

//sort method
let arr6 = [6,4,8,4,2,0,8,33,"d","s","b","a","S","A","44"]
arr6.sort((a, b) => {
  // Convert both to numbers if possible
  return Number(a) - Number(b);
});
// arr6.sort()
// sort asume all array element as an string so it will be difficult to order all of them in assending order
// so the only approach is seprate number and string then sort them and letter merge them 
console.log(arr6)

// Splice method
let arr7 = [1,2,3,4,5,6]
let newarr2 = arr7.splice( 0, 3)       // splice( StartIndex, number of element to cut/not EndIndex)
console.log(newarr2)    // [ 1, 2, 3 ] spliced array 
console.log(arr7, `\n`)       // [ 4, 5, 6 ] orignal array after splice


let arr8 = [1,2,3,4,5,6]
let newarr3 = arr8.splice( 2, 2, 33, 44, 55)  // at index 2 remove 2 element in index-assending order and replace this value or add them
console.log(newarr2)
console.log(arr8, `\n \n`)

// slice method
let arr9 = [1,2,3,4,5,6,7,8,9]
let newarr4 = arr9.slice(3, 7)  // Here 3 and 7 both are index num and 3's element is include but 7's element is not include only index 6th element is include
console.log(newarr4)  //[ 4, 5, 6, 7 ]

// reverse of an array
console.log(arr9.reverse())

