let playerScore = 0;
let computerScore = 0;

const playerScoreSpan = document.getElementById("playerScore");
const computerScoreSpan = document.getElementById("computerScore");
const resultDiv = document.getElementById("result");
const playerMoveSpan = document.getElementById("playerMove");
const computerMoveSpan = document.getElementById("computerMove");

function play(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  const winner = getWinner(playerChoice, computerChoice);

  if (winner === "player") {
    playerScore++;
    resultDiv.textContent = "You Win! 🎉";
  } else if (winner === "computer") {
    computerScore++;
    resultDiv.textContent = "Computer Wins! 💻";
  } else {
    resultDiv.textContent = "It's a Draw! 🤝";
  }

  playerScoreSpan.textContent = playerScore;
  computerScoreSpan.textContent = computerScore;
  playerMoveSpan.textContent = getEmoji(playerChoice);
  computerMoveSpan.textContent = getEmoji(computerChoice);
}

function getWinner(player, computer) {
  if (player === computer) return "draw";

  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "player";
  }

  return "computer";
}

function getEmoji(choice) {
  if (choice === "rock") return "✊";
  if (choice === "paper") return "🖐";
  if (choice === "scissors") return "✌️";
}
