let playOptions = ["rock", "paper", "scissors"];
let userScore = 0;
let computerScore = 0;

function computerPlay() {
  const random = Math.floor(Math.random() * playOptions.length);
  return playOptions[random];
}

function playRound(playerSelection, computerChoice) {
  playerSelection = prompt("rock paper scissors ");
  playerSelection = playerSelection.toLowerCase();
  computerChoice = computerPlay();
  if (playerSelection == computerChoice) {
    alert("Tie round!");
  } else if (
    (computerChoice == "scissors" && playerSelection == "paper") ||
    (computerChoice == "paper" && playerSelection == "rock") ||
    (computerChoice == "rock" && playerSelection == "scissors")
  ) {
    alert("Computer wins the round");
    computerScore = ++computerScore;
  } else if (
    (computerChoice == "paper" && playerSelection == "scissors") ||
    (computerChoice == "rock" && playerSelection == "paper") ||
    (computerChoice == "scissors" && playerSelection == "rock")
  ) {
    alert("You win the round");
    userScore = ++userScore;
  } else alert("what the hell man, its either rock paper or scissors");
}

function game() {
  playRound();
  playRound();
  playRound();
  playRound();
  playRound();
  if (
    (userScore == 3 && computerScore == 0) ||
    (userScore == 3 && computerScore == 1) ||
    (userScore == 3 && computerScore == 2) ||
    (userScore == 4 && computerScore == 1) ||
    (userScore == 5 && computerScore == 0)
  ) {
    alert("You won the game");
  } else if (
    (computerScore == 3 && userScore == 0) ||
    (computerScore == 3 && userScore == 1) ||
    (computerScore == 3 && userScore == 2) ||
    (computerScore == 4 && userScore == 1) ||
    (computerScore == 5 && userScore == 0)
  ) {
    alert("Computer won the game");
  } else {
    alert("Tie Game!");
  }

  console.log("Your score :" + userScore);
  console.log("Computer score :" + computerScore);
}
game();
