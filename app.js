/*----- constants -----*/
const letterTarget = document.getElementById("letterTarget");
const currentScore = document.getElementById("currentScore");
const timeDisplay = document.getElementById("currentTime");
const gameMessage = document.getElementById("gameMessage");
const startButton = document.getElementById("startButton");

/*----- state variables -----*/
let score = 1;
let timeRemaining = 60;
let gameStarted = false;
let timerInterval;
let previousLetter = '';
/*----- event listeners -----*/

// Add event listener to start button
startButton.addEventListener("click", function() {
  if (!gameStarted) {
    gameStarted = true;
    score = 1;
    timeRemaining = 60;
    updateScore(false);
    updateLetterTarget();
    startButton.disabled = true;
    gameMessage.textContent = "";
    timerInterval = setInterval(updateTimer, 1000);
  }
});

// Add event listener to document for keydown events
document.addEventListener("keydown", function(event) {
  if (gameStarted) {
    const keyPressed = event.key.toLowerCase();
    const targetLetter = letterTarget.textContent.toLowerCase();
    if (keyPressed === targetLetter) {
      updateLetterTarget();
      updateScore(true);
    } else {
      updateScore(false);
    }
    if (score >= 40) {
      endGame("You Won!");
    } else {
      updateGameMessage();
    }
  }
});

/*----- functions -----*/

// Define function to generate random lowercase letter
function generateRandomLetter() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const randomIndex = Math.floor(Math.random() * alphabet.length);
  return alphabet[randomIndex];
}

// Define function to update the letter target
function updateLetterTarget() {
  let newLetter = previousLetter;
  while (newLetter === previousLetter) {
    newLetter = generateRandomLetter();
  }
  previousLetter = newLetter;
  letterTarget.textContent = newLetter;
}

// Define function to update the score
function updateScore(isCorrect) {
  if (isCorrect) {
    score++;
  } else {
    score--;
  }
  currentScore.textContent = score;
}

// Define function to update the timer
function updateTimer() {
  timeRemaining--;
  timeDisplay.textContent = timeRemaining;
  if (timeRemaining === 0) {
    endGame("you lost!");
  }
}

// Define function to end the game
function endGame(message) {
  gameStarted = false;
  startButton.disabled = false;
  letterTarget.textContent = "";
  clearInterval(timerInterval);
  gameMessage.textContent = message;
}

// Define function to update the game message
function updateGameMessage() {
  if (score < 40) {
    gameMessage.textContent = "Score 40 to win!";
  } else {
    gameMessage.textContent = "";
  }
}