function getComputerChoice() {
    let randomNumber = Math.random();
    let computerChoice;
    if (randomNumber <= 0.33) {
      computerChoice = "rock";
    } else if (randomNumber >= 0.67) {
      computerChoice = "paper";
    } else {
      computerChoice = "scissors";
    }
    return computerChoice
}

function getHumanChoice() {
  let humanChoice = prompt("What's your choice? (rock / paper / scissors)");
  return humanChoice.toLowerCase();
}

function capitalizeFirstLetter(word) {
  firstLetter = word.charAt(0);
  remainingLetters = word.substring(1);
  const firstLetterCap = firstLetter.toUpperCase();
  return firstLetterCap + remainingLetters;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let humanSelection;
  let computerSelection;
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      return console.log("It's a tie!");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      humanScore += 1;
      return console.log("You win! Rock beats Scissors!");
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore += 1;
      return console.log("You win! Paper beats Rock!");
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      humanScore += 1;
      return console.log("You win! Scissors beats Paper!");
    } else {
      computerScore += 1;
      return console.log("You lose! " + capitalizeFirstLetter(computerChoice) + " beats " + capitalizeFirstLetter(humanChoice) + "!");
    }
  }

  for (let i = 0; i < 5; i++) {
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  console.log("Final Player's score: " + humanScore + " point(s).");
  console.log("Final Computer's score: " + computerScore + " point(s).");
}

playGame();