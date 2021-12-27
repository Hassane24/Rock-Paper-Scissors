let playOptions = ["rock", "paper", "scissors"];
let userScore = 0;
let computerScore = 0;
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const userScore_span = document.querySelector("#user-score");
const pcScore_span = document.querySelector("#pc-score");
const div_result = document.querySelector("#result");

function computerPlay() {
  const random = Math.floor(Math.random() * playOptions.length);
  return playOptions[random];
}

function playRound(playerSelection) {
  const computerChoice = computerPlay();
  if (playerSelection == computerChoice) {
    draw();
  } else if (
    (computerChoice == "scissors" && playerSelection == "paper") ||
    (computerChoice == "paper" && playerSelection == "rock") ||
    (computerChoice == "rock" && playerSelection == "scissors")
  ) {
    lose();
  } else if (
    (computerChoice == "paper" && playerSelection == "scissors") ||
    (computerChoice == "rock" && playerSelection == "paper") ||
    (computerChoice == "scissors" && playerSelection == "rock")
  ) {
    win();
  }
  
}

function win() {
  userScore++;
  userScore_span.innerHTML = userScore;
  if (userScore === 5) {
    div_result.innerHTML = "Player WINS";
    btn1.removeEventListener("click", win);
    btn2.removeEventListener("click", win);
    btn3.removeEventListener("click", win);
  }
}

function lose() {
  computerScore++;
  pcScore_span.innerHTML = computerScore;
  if (computerScore === 5) {
    div_result.innerHTML = "Player LOSES";
    btn1.removeEventListener("click", lose);
    btn2.removeEventListener("click", lose);
    btn3.removeEventListener("click", lose);
  }
}

function draw() {
  console.log("draw");
}

btn1.addEventListener("click", function () {
  playRound("rock");
});
btn2.addEventListener("click", function () {
  playRound("paper");
});
btn3.addEventListener("click", function () {
  playRound("scissors");
});
