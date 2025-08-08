const userScoreElem = document.querySelector("#user-score");
const computerScoreElem = document.querySelector("#computer-score");
const buttons = document.querySelectorAll(".game__button");
const resultText = document.querySelector("#resultText");
const computerVarient = document.querySelector("#computerVarient");

const choices = ["rock", "scissors", "paper"];
let scores = { user: 0, computer: 0 };

document.querySelectorAll(".game__button").forEach((button, index) => {
  button.addEventListener("click", () => playRound(choices[index]));
});

function playRound(userChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "Нічия!";

  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "rock")
  ) {
    result = "Ви виграли раунд!";
    scores.user ++;
    resultText.style.color = "green"
  } else if (userChoice !== computerChoice) {
    result = "Комп'ютер виграв раунд!";
    scores.computer ++;
    resultText.style.color = "red"
  }

  computerVarient.textContent = `Комп'ютер вибрав: ${computerChoice}`;
  resultText.textContent = result;
  computerScoreElem.textContent =  `Комп'ютер - ${scores.computer}`;
  userScoreElem.textContent =  `Ви - ${scores.user}`;

}
