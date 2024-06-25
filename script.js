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

function capitalizeFirstLetter(word) {
  firstLetter = word.charAt(0);
  remainingLetters = word.substring(1);
  const firstLetterCap = firstLetter.toUpperCase();
  return firstLetterCap + remainingLetters;
}

let humanScore = 0;
let computerScore = 0;

const humanScorePara = document.querySelector("#human");
humanScorePara.textContent = "Human - " + humanScore;
const computerScorePara = document.querySelector("#computer");
computerScorePara.textContent = "Computer - " + computerScore;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    const resultsPara = document.createElement("p");
    resultsPara.textContent = "It's a tie!";
    infoDiv.appendChild(resultsPara);
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore += 1;
    humanScorePara.textContent = "Human - " + humanScore;
    const resultsPara = document.createElement("p");
    resultsPara.textContent = "You win! Rock beats Scissors!";
    infoDiv.appendChild(resultsPara);
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore += 1;
    humanScorePara.textContent = "Human - " + humanScore;
    const resultsPara = document.createElement("p");
    resultsPara.textContent = "You win! Paper beats Rock!";
    infoDiv.appendChild(resultsPara);
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore += 1;
    humanScorePara.textContent = "Human - " + humanScore;
    const resultsPara = document.createElement("p");
    resultsPara.textContent = "You win! Scissors beats Paper!";
    infoDiv.appendChild(resultsPara);
  } else {
    computerScore += 1;
    computerScorePara.textContent = "Computer - " + computerScore;
    const resultsPara = document.createElement("p");
    resultsPara.textContent = "You lose! " + capitalizeFirstLetter(computerChoice) + " beats " + capitalizeFirstLetter(humanChoice) + "!";
    infoDiv.appendChild(resultsPara);
  }
  if (humanScore === 5 || computerScore === 5) {
    const resultsParaHuman = document.createElement("h3");
    const resultsParaComputer = document.createElement("h3");
    const winner = document.createElement("h2");
    if (humanScore > computerScore) {
      winner.textContent = "YOU WIN!!!";
    } else {
      winner.textContent = "COMPUTER IS THE WINNER!";
    };
    infoDiv.appendChild(winner)
    resultsParaHuman.textContent = "Final Player's score: " + humanScore + " point(s).";
    resultsParaComputer.textContent += "Final Computer's score: " + computerScore + " point(s).";
    infoDiv.appendChild(resultsParaHuman);
    infoDiv.appendChild(resultsParaComputer);
  }
}
const buttonsDiv = document.querySelector("#buttons");
const btnRock = document.createElement("button");
btnRock.textContent = "ROCK";
const btnPaper = document.createElement("button");
btnPaper.textContent = "PAPER";
const btnScissors = document.createElement("button");
btnScissors.textContent = "SCISSORS";
buttonsDiv.appendChild(btnRock);
buttonsDiv.appendChild(btnPaper);
buttonsDiv.appendChild(btnScissors);

const allButtons = document.querySelectorAll("button");

const allButtonsDiv = document.querySelector("#buttons");

allButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    if (humanScore === 5 || computerScore === 5) {
      btn.disabled = true;
    } else {
      let computerSelection = getComputerChoice();
      playRound(btn.textContent.toLowerCase(), computerSelection);              
    }
    
  })
});


const infoDiv = document.createElement("div");
buttonsDiv.appendChild(infoDiv);


// playGame();