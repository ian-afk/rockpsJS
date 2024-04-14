const getComputerChoice = () => {
  const choices = ["Rock", "Paper", "Scissors"];

  const random = Math.floor(Math.random() * choices.length);
  console.log(random);
  return choices[random];
};
