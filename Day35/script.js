// Inserting and Removing Elements using JavaScript

console.log(document.querySelector(".box"))
console.log(document.querySelector(".container"))

console.log(document.querySelector(".container").innerHTML)
console.log(document.querySelector(".container").outerHTML)

console.log(document.querySelector(".box").tagName)
console.log(document.querySelector(".box").nodeName)

console.log(document.querySelector(".container").textContent)

console.log(document.querySelector(".container").hidden)
// console.log(document.querySelector(".container").hidden = true)  //apply hidden attribute to the container

document.querySelector(".box").innerHTML = "This is Actually a Box block"

// Attribute 
console.log(document.querySelector(".container").hasAttribute("style"))
console.log(document.querySelector(".container").getAttribute("style"))
let cntstyle = document.querySelector(".container")
cntstyle.setAttribute("style", "display:inline")
cntstyle.setAttribute("style", "border: 2px solid black;")

// Remove an attribute
// let box = document.getElementById("box")
// console.log(box)
// box.removeAttribute("hidden")

document.querySelector("#box").removeAttribute("hidden")

console.log(document.querySelector(".box").attributes)

console.log(document.querySelector("#box").dataset)

//

let cnt3 = document.querySelector(".container2")
console.log(cnt3.classList)
cnt3.classList.add("style", "shadow", "border")
console.log(cnt3.classList)
cnt3.classList.remove("style")
console.log(cnt3.classList)
cnt3.classList.replace("shadow", "box-shadow")
console.log(cnt3.classList)
