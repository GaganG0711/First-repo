// Lecture/Tutorial 68
// Searching the DOM
console.log("Code is running")

// let a = document.getElementsByClassName("box")
// console.log(a)
// a[3].style.backgroundColor="red"

// document.getElementById("redbox").style.backgroundColor="red";

// document.querySelector(".box").style.backgroundColor = "green"

// document.querySelectorAll(".box").style.backgroundColor = "green"
// Not gonna work as it return html collection 

// document.querySelectorAll(".box").forEach( e => {
//     // console.log(e)
//     e.style.backgroundColor="green";
//     e.style.color="white"
// })

console.log(document.getElementsByTagName("div"))

e = document.getElementsByTagName("div")
console.log(e[4].matches(".box"))       //true
console.log(e[4].matches("#redbox"))    //false
console.log(e[2].matches("#redbox"))    //true

console.log(e[3].closest("#redbox"))    //null
console.log(e[2].closest("#redbox"))    //<div class="box" id="redbox">Shubham2</div>flex
console.log(e[3].closest(".box"))       //<div class="box">Shubham3</div>flex
console.log(e[3].closest(".container"))
console.log(e[3].closest("html"))

console.log(document.querySelector(".container").contains(e[2]))    //true
console.log(document.querySelector(".container").contains(e[0]))    //true

console.log(document.querySelector(".container").contains(document.querySelector("body")))    //false
console.log(document.querySelector("body").contains(document.querySelector(".container")))    //true 