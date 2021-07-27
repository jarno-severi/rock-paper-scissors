// Buttons

const buttons = document.querySelectorAll('.button');
buttons.forEach(button => button.addEventListener('click', () => {

    playerSelection = (button.title).toLowerCase();
    computerSelection = computerPlay();

    playRound(playerSelection, computerSelection);

    const pscore = document.querySelector('#pscore');
    const aiscore = document.querySelector('#aiscore');
    pscore.textContent = playerScore;
    aiscore.textContent = computerScore;

    if (playerScore === 5 || computerScore === 5) {
        const end = document.querySelector('#choices');
        const finalScore = document.querySelector('#overview');

        if (playerScore > computerScore) {
            end.textContent = "You are the winner!";
            finalScore.textContent = "Select to start a new game";

        } else {
            end.textContent = "You lost! Try again?";
            finalScore.textContent = "Select to start a new game";
        }

        playerScore = 0;
        computerScore = 0; 
    }

}));

buttons.forEach(button => button.addEventListener('mouseenter', () => {
    svg = button.firstChild;
    svg.classList.add('hovering');
}));

buttons.forEach(button => button.addEventListener('mouseleave', () => {
    svg = button.firstChild;
    svg.classList.remove('hovering');
}));


// Setting up variables for the game

const gameItems = ['rock', 'paper', 'scissors'];
let computerScore = 0;
let playerScore = 0;


// Return random choice from [rock, paper, scissors] for AI

function computerPlay() {
    const random = Math.floor(Math.random() * gameItems.length);
    return gameItems[random];
}


// Round of RPS comparisons between player and AI choices. Also adds up points to either one or no points to either in ties. Also gives a loss to player if no choice is made.

function playRound(playerSelection, computerSelection) {

    const choices = document.querySelector('#choices');
    choices.textContent = playerSelection.toUpperCase() + " vs " + computerSelection.toUpperCase();

    const para = document.querySelector('#overview');

    if (playerSelection === computerSelection) {
        para.textContent = "It's a tie!";
    }

    else {

        if (playerSelection === "rock") {
            switch (computerSelection) {
                case "paper":
                    para.textContent = "You lose! Paper beats Rock."
                    computerScore++;
                    break;

                case "scissors":
                    para.textContent = "You win! Rock beats Scissors."
                    playerScore++;
                    break;
            }
        }

        if (playerSelection === "paper") {
            switch (computerSelection) {
                case "scissors":
                    para.textContent = "You lose! Scissors beats Paper."
                    computerScore++;
                    break;

                case "rock":
                    para.textContent = "You win! Paper beats Rock."
                    playerScore++;
                    break;
            }
        }

        if (playerSelection === "scissors") {
            switch (computerSelection) {
                case "rock":
                    para.textContent = "You lose! Rock beats Scissors."
                    computerScore++;
                    break;

                case "paper":
                    para.textContent = "You win! Scissors beats Paper."
                    playerScore++;
                    break;
            }
        }

        if (playerSelection === "undefined") {
            alert("You lose! Any selection beats no selection!")
            computerScore++;
        }
    }
}