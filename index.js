//=============================================================================
// Variables
//=============================================================================

const startButton = document.getElementById("startButton");
const pauseButton = document.getElementById("pauseButton");
const resetButton = document.getElementById("resetButton");
const minusButton = document.getElementById("minus");
const plusButton = document.getElementById("plus");
const timerMin = document.getElementById("timerMin");
const timerSec = document.getElementById("timerSec");
const minTime = 1200; // 20 minutes in seconds
const maxTime = 1800; // 30 minutes in seconds

var intervalId;
var startTime = 1500;
var currentTime = parseInt(timerMin.innerText) * 60 + parseInt(timerSec.innerText);


//=============================================================================
// Event listeners
//=============================================================================

startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);
minusButton.addEventListener("click", decrementTimer);
plusButton.addEventListener("click", incrementTimer);


//=============================================================================
// Functions
//=============================================================================


function startTimer() {
  if (!intervalId) {
    intervalId = setInterval(countingDown, 1000);
  }
}


function pauseTimer() {
  clearInterval(intervalId);
  intervalId = null;
}


function resetTimer() {
  clearInterval(intervalId);
  intervalId = null;
  currentTime = startTime;
  updateDisplay();
}


function decrementTimer() {
  if (currentTime > minTime) {
    currentTime -= 60;
    startTime -=60;
    updateDisplay();
  }
}


function incrementTimer() {
  if (currentTime < maxTime) {
    currentTime += 60;
    startTime += 60;
    updateDisplay();
  }
}


function countingDown() {
  currentTime--;
  updateDisplay();
}


function updateDisplay() {
  timerMin.innerText = Math.floor(currentTime / 60).toString().padStart(2, '0');
  timerSec.innerText = Math.floor(currentTime % 60).toString().padStart(2, '0');
}