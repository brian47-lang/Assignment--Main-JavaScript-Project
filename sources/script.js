const playArray = ["rock", "paper", "scissors"];
let playerWins = 0;
let computerWins = 0;

function playerChoice() {
  let playerInput = prompt("Let's play ROCK, PAPER, SCISSORS");

  while (playerInput !== null) {
    playerInput = playerInput.trim().toLowerCase();
    if (playArray.includes(playerInput)) {
      return playerInput;
    }
    if (playerInput === "") {
      console.log("Please enter a valid input!");
    } else {
      console.log("Invalid input! Please try again.");
    }
    playerInput = prompt("Let's play ROCK, PAPER, SCISSORS");
  }

  // If the user clicked cancel, return null
  console.log("Game cancelled");
  return null;
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
  for (let round = 1; round <= 5; round++) {
    let playerSelection = playerChoice();
    if (playerSelection === null) {
      break;
      //Prevents counting rounds when null value is clicked mid-game//
    }
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    console.log("Rounds played: " + round + " /5")
  }
  if (playerWins > computerWins) {
    console.log("Player wins the game!!");
  } else if (playerWins < computerWins) {
    console.log("Computer wins the game!!");
  }
}

game();
