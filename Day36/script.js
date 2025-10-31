let boxes = document.querySelector(".container").children
// console.log(cnt)

function randombg() {
    let val1 = Math.ceil(Math.random()*255)
    let val2 = Math.ceil(Math.random()*256)
    let val3 = Math.ceil(Math.random()*256)
    return `rgb(${val1}, ${val2}, ${val3})`
}

Array.from(boxes).forEach( e=> {
    e.style.backgroundColor = randombg()
    e.style.Color = randombg()
    e.textContent = randombg()
})