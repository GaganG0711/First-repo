// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events


let button = document.getElementById("btn")
let boxcontent = document.querySelector("box")

// button.addEventListener("click", ()=>{
//     alert("button is clicked...")
// })

function click() {
    document.querySelector(".box").innerHTML = "<b>Button is</b> Right Clicked..."
}
button.addEventListener("contextmenu", click)

// button.addEventListener("contextmenu", ()=>{
//     alert("button is right clicked...")
// })
// button.addEventListener("dblclick", ()=>{
//     alert("button is double clicked...")
// })
// button.removeEventListener("click", click )

button.addEventListener("mouseenter", ()=>{
    button.style.backgroundColor = "green";
})
button.addEventListener("mousedown", ()=>{
    button.style.backgroundColor = "red";
})
button.addEventListener("mouseup", () => {
  button.style.backgroundColor = "blue";
});
button.addEventListener("mouseleave", ()=>{
    button.style.backgroundColor = "yellow";
})
button.addEventListener("mousemove", ()=>{
    button.style.backgroundColor = "aqua"
})

let button2 = document.getElementById("btn2")

button2.addEventListener("keydown", e=>{
    console.log(e.key, e.keyCode)
})