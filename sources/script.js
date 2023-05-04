const playArray = ["rock","paper", "scissors"];
let playerWins = 0;
let computerWins = 0;
let round = 0
function playerChoice() {
    let playerInput = prompt("Enter your play");

    while (playerInput !== null && !playArray.includes(playerInput)) {
        playerInput = prompt("Invalid input! Please try again.");
    }

    return playerInput;
}

function computerPlay(){
    let i = Math.floor(Math.random() * playArray.length)
    return playArray[i];
} 
function playRound(playerSelection, computerSelection){
    if (playerSelection === "rock" && computerSelection === "scirssors" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scirssors" && computerSelection === "paper"){
        console.log("You win!! " + playerSelection + " beats " + computerSelection)
        playerWins += 1; 
    }else if (playerSelection === computerSelection){
        round -=1;
        console.log("Tie!!")
    } else {
        console.log("You  lose!! " + computerSelection + " beats " + playerSelection)
        computerWins += 1;
    }
}
function game(){
    for(round = 0; round < 5; round++){
        const playerSelection = playerChoice();
        const computerSelection = computerPlay();
        playRound(playerSelection,computerSelection);
    }
    if(playerWins > computerWins){
        console.log("Player wins the game!!")
    } else {
        console.log("Computer wins the game!!")
    }
}
game();