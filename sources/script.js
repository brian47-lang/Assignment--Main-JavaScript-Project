const playArray = ["rock", "paper", "scissors"];
let playerWins = 0;
let computerWins = 0;

function playerChoice() {
  let playerInput = prompt("Enter your play");

  while (!playArray.includes(playerInput) && playerInput !== null) {
    playerInput = prompt("Invalid input! Please try again.");
  }

  // If the user clicked cancel, return null
  if (playerInput === null) {
    console.log("Game cancelled");
    return null;
  }

  return playerInput;
}

function computerPlay() {
  let i = Math.floor(Math.random() * playArray.length);
  return playArray[i];
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    console.log("You win!! " + playerSelection + " beats " + computerSelection);
    playerWins += 1;
  } else if (playerSelection === computerSelection) {
    console.log("Tie!!");
  } else {
    console.log("You lose!! " + computerSelection + " beats " + playerSelection);
    computerWins += 1;
  }
}

function game() {
  for (let round = 0; round < 5; round++) {
    let playerSelection = playerChoice();
    if (playerSelection === null) {
      return;
    }
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
  }
  if (playerWins > computerWins) {
    console.log("Player wins the game!!");
  } else {
    console.log("Computer wins the game!!");
  }
}

game();
