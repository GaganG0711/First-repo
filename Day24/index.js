console.log("lecture/tutorial 60")
console.log("String in JavaScript")

let str = "hello this is string"

// for (const element of str) {
//     console.log(element)
// }

// console.log(str[0],str[1],str[2],str[3],str[4]);
let str2 = "abcdefghijklmnopqrstuvwxyz"
// console.log(str2.split("").join(" "))
// console.log(str.length)

// template literals  -can use double quote inside a string 
// console.log("hello this "word" is not in templete literals") error
// console.log(`hello this "word" is template literal's example`)
let my ="shubham";
let friend = "Akash";
// console.log("hello my name is "+my, "and my friend name is "+friend)
// console.log(`hello my name is ${my} and my friend name is ${friend}`)  //can assign variable using ${var-name}

//escape charactor
// console.log("hello this is \"escape charector\"")
// console.log("this is \nnew line")

//some string operations
let str3 = "Shubham Vishvkarma"
console.log(str3.at(2))
console.log(str3.charAt(0))
console.log(str3.charCodeAt(5))
console.log(str3.charCodeAt(3))
console.log(str3.indexOf("V"))
console.log(str3.replace("Sh", "Vi"))
console.log(str3.toLowerCase())
console.log(str3.toUpperCase())
console.log(str3.slice(0, 7))
console.log(str3.slice(1))
let str4 = "        age 23"
console.log(str3.concat(str4))
console.log(str4.trim())
