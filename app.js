// Get the buttons and result div
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const resultDiv = document.querySelector('#result');

// Initialize scores
let playerScore = 0;
let computerScore = 0;

// Play a single round of Rock Paper Scissors
function playRound(playerSelection) {
  const options = ['Rock', 'Paper', 'Scissors'];
  const computerSelection = options[Math.floor(Math.random() * options.length)];
  let result;

  if (playerSelection === computerSelection) {
    result = "It's a tie!";
  } else if (
    (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
    (playerSelection === 'Paper' && computerSelection === 'Rock') ||
    (playerSelection === 'Scissors' && computerSelection === 'Paper')
  ) {
    playerScore++;
    result = `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore++;
    result = `You lose! ${computerSelection} beats ${playerSelection}`;
  }

  resultDiv.textContent = result;
  document.querySelector('#player-score').textContent = playerScore;
  document.querySelector('#computer-score').textContent = computerScore;

  if (playerScore === 5) {
    resultDiv.textContent = "Congratulations! You won the game!";
    disableButtons();
  } else if (computerScore === 5) {
    resultDiv.textContent = "Sorry, you lost the game!";
    disableButtons();
  }
  
}

// Disable the buttons once one player wins
function disableButtons() {
  rockButton.disabled = true;
  paperButton.disabled = true;
  scissorsButton.disabled = true;
}

// event listeners to the buttons
rockButton.addEventListener('click', () => playRound('Rock'));
paperButton.addEventListener('click', () => playRound('Paper'));
scissorsButton.addEventListener('click', () => playRound('Scissors'));
