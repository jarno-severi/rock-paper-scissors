// Setting up variables for the game

const gameItems = ['rock', 'paper', 'scissors'];
// let computerSelection;
// let playerSelection;
let computerScore = 0;
let playerScore = 0;


// Assing random choice for AI

function computerPlay() {

    const random = Math.floor(Math.random() * gameItems.length);
    return gameItems[random];
    
}


// Ask for player choice

function playerPlay() {

    let playerSelection = prompt("Rock, Paper or Scissors? [Cancel to random]");

    // Checks for null or mispelled choice

    if (playerSelection === null) {
    console.log("Selecting random choice...");
        const random = Math.floor(Math.random() * gameItems.length);
        playerSelection = gameItems[random];

    } else if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
        console.log("Typographical error! Try again.")
        playerSelection = playerPlay();
    }

    return playerSelection.toLowerCase();
}


// Round of RPS comparisons between player and AI choices. Also adds up points to either one or no points to either in ties.

function playRound(playerSelection, computerSelection) {

    console.log("// P1: " + playerSelection + " vs AI: " + computerSelection);

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


// Define how many rounds of RPS to run

function game(rounds) {

    for (let i = 0; i < rounds; i++) {

        playerSelection = playerPlay();
        computerSelection = computerPlay();

        playRound(playerSelection, computerSelection);
    }
}

// Game of RPS and final score

game(3);

console.log("// Game ends");
console.log("Final score");
console.log("Player: " + playerScore);
console.log("AI: " + computerScore);