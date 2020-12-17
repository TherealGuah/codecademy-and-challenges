let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
//step 3 target generation
const generateTarget = () => Math.floor(Math.random() * 10);
//step 4 compare target and guesses
const compareGuesses = (userGuess, computerGuess, targetNumber) => {
  if (Math.abs(targetNumber - userGuess) <= Math.abs(targetNumber - computerGuess)) {
    return true;
   } else {
     return false;
   }
  };
// step 5 score updater
const updateScore = (winner) => (winner === 'human') ? humanScore += 1 : computerScore += 1;
// step 6 round step update
const advanceRound = () => {
  currentRoundNumber += 1; 
}
// step 6 
const alert = (userGuess) => {
  if (userGuess < 0 || userGuess > 9) {
    return alert('Please choose a number Between 0 and 9!');
  }
};
