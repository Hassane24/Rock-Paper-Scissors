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
  userScore_span.textContent = userScore;
  if (userScore === 5) {
    div_result.textContent = "Player WINS";
  }
}

function lose() {
  computerScore++;
  pcScore_span.textContent = computerScore;
  if (computerScore === 5) {
    div_result.textContent = "Player LOSES";
  }
}

function draw() {
  console.log("draw");
}

btn1.addEventListener("click", rock);

btn2.addEventListener("click", paper);

btn3.addEventListener("click", scissors);

function rock() {
  playRound("rock");
  if (computerScore == 5 || userScore == 5) {
    btn1.removeEventListener("click", rock);
    btn2.removeEventListener("click", paper);
    btn3.removeEventListener("click", scissors);
  }
}

function paper() {
  playRound("paper");
  if (computerScore == 5 || userScore == 5) {
    btn1.removeEventListener("click", rock);
    btn2.removeEventListener("click", paper);
    btn3.removeEventListener("click", scissors);
  }
}

function scissors() {
  playRound("scissors");
  if (computerScore == 5 || userScore == 5) {
    btn1.removeEventListener("click", rock);
    btn2.removeEventListener("click", paper);
    btn3.removeEventListener("click", scissors);
  }
}
