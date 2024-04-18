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


function startTimer(e) {
  if (!intervalId) {
    intervalId = setInterval(countingDown, 1000);
    buttonPress(e.target);
  }
}


function pauseTimer(e) {
  clearInterval(intervalId);
  intervalId = null;
  buttonPress(e.target);
}


function resetTimer(e) {
  clearInterval(intervalId);
  intervalId = null;
  currentTime = startTime;
  updateDisplay();
  buttonPress(e.target);
}


function decrementTimer() {
  if (!intervalId && currentTime > minTime) {
    currentTime -= 60;
    startTime -=60;
    updateDisplay();
  }
}


function incrementTimer() {
  if (!intervalId && currentTime < maxTime) {
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


function buttonPress(e) {
  var buttons = document.querySelectorAll(".actionButton"); 
  buttons.forEach(function(button) {
    button.style.transform = "translateY(0)";
    button.style.boxShadow = "rgba(0, 0, 0) 0px 10px 15px";
  });

  e.style.transform = "translateY(5px)";
  e.style.boxShadow = "rgba(0, 0, 0) 0px 5px 15px";
}