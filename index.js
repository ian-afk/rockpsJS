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
