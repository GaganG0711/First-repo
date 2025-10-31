function randomColor() {
    let r = Math.floor(Math.random()*256)
    let g = Math.floor(Math.random()*256)
    let b = Math.floor(Math.random()*256)
    return `rgb(${r}, ${g}, ${b})`
}
let box = document.getElementsByClassName("box")
box[0].style.backgroundColor = `${col = randomColor()}`;
box[1].style.backgroundColor = `${col = randomColor()}`;
box[2].style.backgroundColor = `${col = randomColor()}`;
box[3].style.backgroundColor = `${col = randomColor()}`;
box[4].style.backgroundColor = `${col = randomColor()}`;
