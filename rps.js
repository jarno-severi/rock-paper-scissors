// Setting up variables for the game

const gameItems = ['rock', 'paper', 'scissors'];
let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;


// Assing random choice for AI

function computerPlay() {
    const random = Math.floor(Math.random() * gameItems.length);
    computerSelection = gameItems[random];
}


// Ask for player choice

function playerPlay() {
    playerSelection = prompt("Rock, Paper or Scissors? [Cancel to random]");

    if (playerSelection === null) {
        console.log("Selecting random choice...");
        const random = Math.floor(Math.random() * gameItems.length);
        playerSelection = gameItems[random];
    }

    playerSelection = playerSelection.toLowerCase();

}


// Round of RPS comparisons between player and AI choices. Also adds up points to either one or no points to either in ties.

function playRound() {

    console.log("// P1: " + playerSelection + " vs AI: " + computerSelection);


    if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
        console.log("Typographical error! Try again.")
        playerPlay();
    }


    if (playerSelection === computerSelection) {
        console.log("It's a tie!");
    }

    else {

        if (playerSelection === "rock") {
            switch (computerSelection) {
                case "paper":
                    console.log("You lose! Paper beats Rock.")
                    computerScore++;
                    break;

                case "scissors":
                    console.log("You win! Rock beats Scissors")
                    playerScore++;
                    break;
            }
        }

        if (playerSelection === "paper") {
            switch (computerSelection) {
                case "scissors":
                    console.log("You lose! Scissors beats Paper.")
                    computerScore++;
                    break;

                case "rock":
                    console.log("You win! Paper beats Rock.")
                    playerScore++;
                    break;
            }
        }

        if (playerSelection === "scissors") {
            switch (computerSelection) {
                case "rock":
                    console.log("You lose! Rock beats Scissors.")
                    computerScore++;
                    break;

                case "paper":
                    console.log("You win! Scissors beats Paper.")
                    playerScore++;
                    break;
            }
        }
    }
}


// A round of RPS

function game() {
    computerPlay();
    playerPlay();
    playRound();
}


// 5 rounds of RPS and points overview.

for (let i = 0; i < 5; i++) { game(); } 

console.log("// Game ends"); 
console.log("Final score"); 
console.log("Player: " + playerScore);
console.log(" AI: " + computerScore);