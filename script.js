// Task B
function computerPlay(){


    let randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    return "Rock";
  } else if (randomNumber === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

// Task C
function playRound(playerSelection, computerSelection) {
  // Converting both selections to lowercase to compare easily
  playerSelection = "rock";
  computerSelection = computerSelection.toLowerCase();

  // possible outcomes of the game
  const outcomes = {
    rock: { beats: "scissors", message: "You Win! Rock beats Scissors" },
    paper: { beats: "rock", message: "You Win! Paper beats Rock" },
    scissors: { beats: "paper", message: "You Win! Scissors beats Paper" },
  };

  // Check if the player's selection beats the computer's selection
  if (outcomes[playerSelection].beats === computerSelection) {
    return outcomes[playerSelection].message;
  }
  // Check if the computer's selection beats the player's selection
  else if (outcomes[computerSelection].beats === playerSelection) {
    return `You Lose! ${outcomes[computerSelection].beats} beats ${playerSelection}`;
  }
  // If neither player wins, it's a tie
  else {
    return "It's a tie!";
  }
}