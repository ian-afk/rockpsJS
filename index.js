const getComputerChoice = () => {
  const choices = ["Rock", "Paper", "Scissors"];

  const random = Math.floor(Math.random() * choices.length);
  console.log(random);
  return choices[random];
};

const playRound = (playerSelection, computerSelection) => {
  const player = playerSelection.toLowerCase();
  const computer = computerSelection.toLowerCase();
  if (player === "rock" && computer === "paper")
    return ["lose", `You Lose! Paper beats Rock`];
  else if (player === "paper" && computer === "scissors") {
    return ["lose", `You Lose! Scissors beats Paper`];
  } else if (player === "scissors" && computer === "rock") {
    return ["lose", `You Lose! Rock beats scissors`];
  } else if (player === computer) {
    return ["draw", `Draw! ${player} ${computer}`];
  } else {
    return ["win", `You won! ${player} beats ${computer}`];
  }
};

function playGame() {
  let round = 5;
  let playerScore = 0;
  let computerScore = 0;
  let computer = getComputerChoice();
  let player = "";
  for (let i = 1; i <= round; i++) {
    player = prompt(`Player select: `);
    let result = playRound(player, computer);
    console.log(result[1]);
    if (result[0] === "win") {
      playerScore++;
    } else if (result[0] === "lose") computerScore++;

    console.log(
      `Player score: ${playerScore} | Computer Score: ${computerScore}`
    );
  }

  if (playerScore > computerScore)
    return `You won with a Score: ${playerScore} vs ${computerScore}`;
  else return `You lose! Player: ${playerScore} vs Computer: ${computerScore}`;
}

const play = playGame();
console.log(play);
