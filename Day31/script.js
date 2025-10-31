console.log("code is running")
console.log("document.body")
console.log(document.body)

console.log("document.body.childNodes")
console.log(document.body.childNodes)

console.log("document.body.childNodes[0]") // Extra space refer as text node/Like new line, and spaces
console.log(document.body.childNodes[0])

console.log("document.body.childNodes[1]")
console.log(document.body.childNodes[1])

console.log("let cont = document.body.childNodes[1]")
let cont = document.body.childNodes[1]

console.log("cont.childNodes")
console.log(cont.childNodes)

console.log(`nodeValue: "\\n        ","the text node is this, our new line and indentation"`)
console.log("cont.firstChild")
console.log(cont.firstChild)
console.log("cont.lastChild")
console.log(cont.lastChild)

console.log("cont.firstElementChild")
console.log(cont.firstElementChild)
console.log("cont.lastElementChild")
console.log(cont.lastElementChild)

console.log("cont.children")
console.log(cont.children)
console.log("cont.children[3]")
console.log(cont.children[3])

cont.firstElementChild.style.backgroundColor="yellow";
cont.lastElementChild.style.backgroundColor = 'green';

console.log("cont.lastElementChild.parentElement")
console.log(cont.lastElementChild.parentElement)
cont.lastElementChild.parentElement.style.backgroundColor = "#f9f9f9"

console.log("cont.nextSibling")
console.log(cont.nextSibling)
console.log("cont.previousSibling")
console.log(cont.previousSibling)

console.log("cont.children[2].nextElementSibling")
console.log(cont.children[2].nextElementSibling)
console.log("cont.children[2].previousSibling")
console.log(cont.children[2].previousElementSibling)