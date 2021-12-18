let playOptions = ["rock", "paper", "scissors"];
const playerSelection = prompt("Rock, Paper, or Scissors");
function computerPlay () {
    const random = Math.floor(Math.random() * playOptions.length);
    console.log (playOptions[random]);
}
computerPlay();

function playRound (playerSelection, computerPlay) { 
    playerSelection = toLowerCase(playerSelection)
    if (playerSelection === computerPlay) {
        alert("Tie game!");
    }
    else if (
    (computerPlay == "scissors" && playerSelection == "paper") || 
    (computerPlay == "paper" && playerSelection == "rock") ||
    (computerPlay == "rock" && playerSelection == "scissors")
    )
    {alert("You lose")}

        else {alert("You win")}
        
}
playRound();
