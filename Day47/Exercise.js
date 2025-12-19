// guess a number from 1 to 100

let randomNum = Math.ceil(Math.random() * 100)
console.log(randomNum)
let guess = parseInt(prompt("Guess a number between 1 to 100"))

function check(randomNum, guess) {
    switch (true) {
        case (guess < 1 || guess > 100):
            console.log("Invalid Input! Choose from 1 to 100")
            break;
        case guess > randomNum:
            console.log("Greater then actual answer")
            break;
        case guess < randomNum:
            console.log("Lower then actual answer")
            break;
        case guess === randomNum:
            console.log("Correct Guess")
            break;
    }
}
check(randomNum, guess)