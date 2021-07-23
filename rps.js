// Setting up variables for the game

const gameItems = ['rock', 'paper', 'scissors'];
let computerScore = 0;
let playerScore = 0;


// Return random choice from [rock, paper, scissors] for AI

function computerPlay() {

    const random = Math.floor(Math.random() * gameItems.length);
    let computerSelection = gameItems[random];

    return computerSelection;
}


// Ask for player choice

function playerPlay() {

    let playerSelection = prompt("Rock, Paper or Scissors? [OK to random]");

    // Check for null (Cancel) or empty (OK)

    if (playerSelection === null) {
        playerSelection = "undefined";

    } else if (playerSelection === "") {

        console.log("Selecting random choice...");
        const random = Math.floor(Math.random() * gameItems.length);
        playerSelection = gameItems[random];
        
    } else { 

        playerSelection = playerSelection.toLowerCase();

        // Check for typo
        
        if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
            console.log("Typographical error! Try again.")
            playerSelection = playerPlay();
        }
    } 

    return playerSelection;
}


// Round of RPS comparisons between player and AI choices. Also adds up points to either one or no points to either in ties. Also gives a loss to player if no choice is made.

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

        if (playerSelection === "undefined") {
            console.log("You lose! Any selection beats no selection!")
            computerScore++;
        }
    }
}


// Define how many rounds of RPS to run

function game(rounds) {

    computerScore = 0;
    playerScore = 0;

    for (let i = 0; i < rounds; i++) {

        let playerSelection = playerPlay();
        let computerSelection = computerPlay();

        playRound(playerSelection, computerSelection);
    }

    let newGame = gameScore();
    let tryAgain;

    newGame ? tryAgain = confirm("Wanna try again?") : tryAgain = false;

    tryAgain ? game(3) : console.log("// GAME OVER");
}


// Final score and chance to redeem victory after tie or loss, win ends the game. Instructions after a win to play the game again @ tryAgain variable.

function gameScore() {

    if (playerScore === computerScore) {
        alert("Game was a tie!\n- - - - - - - - - - - - - -\nFinal score: " + playerScore + " - " + computerScore);
        return 1;

    } else if (playerScore > computerScore) {
        alert("You are the winner!\n- - - - - - - - - - - - - - - - -\nFinal score: " + playerScore + " - " + computerScore);

    } else {
        alert("Sorry, you lost!\n- - - - - - - - - - - - -\nFinal score: " + playerScore + " - " + computerScore);
        return 1;
    }
}


// Introduction to the game and confirm to play the game or quit

confirmPlay = confirm("# Welcome to game of Rock Paper Scissors!\n1. Game is displayed in developer console.\n2. To open developer tools press (F12)\n3. [OK] to play 3 rounds.\n4. [Cancel] to be square.\n");

confirmPlay ? game(3) : console.log("Have a square day!");


// Instructions to play the game after cancel or winning the game.

console.log("// Refresh (F5) to play again.")