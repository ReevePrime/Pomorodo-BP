//=============================================================================
// Variables
//=============================================================================

var startButton = document.getElementById("startButton");
var pauseButton = document.getElementById("pauseButton");
var resetButton = document.getElementById("resetButton");
var intervalId;
var timerMin = document.getElementById("timerMin");
var timerSec = document.getElementById("timerSec");
var currentTime = parseInt(timerMin.innerText) * 60 + parseInt(timerSec.innerText);

//=============================================================================
// Functions
//=============================================================================


// Start the pomodoro
startButton.addEventListener("click", () => {
  if (!intervalId) {
    intervalId = setInterval(countingDown, 1000);
  }
});

// Pause the pomodoro
pauseButton.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
});

// Reset the pomodoro
  resetButton.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
<<<<<<< Updated upstream
  currentTime = 1500;
  timerMin.innerText = Math.floor(currentTime / 60).toString().padStart(2,'0');
  timerSec.innerText = Math.floor(currentTime % 60).toString().padStart(2,'0');
});
=======
  currentTime = startTime;
  updateDisplay();
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

>>>>>>> Stashed changes

// Countdown timer
function countingDown() {
  currentTime--;
  timerMin.innerText = Math.floor(currentTime / 60);
  timerSec.innerText = Math.floor(currentTime % 60);
}

