// Rock Paper Scissors.
// confirm("This is confirm msg")p
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random()*3)];
}

function winner(user, computer) {
    if ( user === computer) {
        return confirm("It's a Draw!")
    }

    switch (user) {
        case "rock":
           return confirm((computer === "paper") ? "You Lose!1" : "You Win!1");

        case "paper":
            return confirm((computer === "scissors") ? "You Lose!2" : "You Win!2")
    
        case "scissors":
            return confirm((computer === "rock") ? "You Lose!3" : "You Win!3")
        
        default:
            return confirm("invalid Choise")
    }
}

const userChoice = prompt("Enter rock, paper, scissors");
const computerChoice = getComputerChoice();

console.log("your Choise", userChoice);
console.log("computer's choise", computerChoice)
console.log(winner(userChoice, computerChoice))
