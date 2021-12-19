let playOptions = ["rock", "paper", "scissors"];

function computerPlay() {
  const random = Math.floor(Math.random() * playOptions.length);
  return playOptions[random];
}

function playRound(playerSelection, computerChoice) {
  playerSelection = prompt("rock paper scissors ");
  playerSelection = playerSelection.toLowerCase();
  computerChoice = computerPlay();
  console.log(playerSelection);
  console.log(computerChoice);
  if (playerSelection == computerChoice) {
    alert("Tie game!");
  } else if (
    (computerChoice == "scissors" && playerSelection == "paper") ||
    (computerChoice == "paper" && playerSelection == "rock") ||
    (computerChoice == "rock" && playerSelection == "scissors")
  ) {
    alert("You lose");
  } else {
    alert("You win");
  }
}
playRound();
