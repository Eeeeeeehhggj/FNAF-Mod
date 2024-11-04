let timeOfDay = "day";
let isGameOver = false;
let power = 100;

function updateGameOutput(message) {
  document.getElementById("game-output").innerText = message;
}

function startDay() {
  if (isGameOver) {
    updateGameOutput("Game Over! Reload the page to start again.");
    return;
  }
  
  timeOfDay = "day";
  updateGameOutput("Daytime: Gather resources and prepare.");
  gatherResources();
  craftItems();
}

function startNight() {
  if (isGameOver) {
    updateGameOutput("Game Over! Reload the page to start again.");
    return;
  }

  timeOfDay = "night";
  updateGameOutput("Nighttime: Survive until 6 AM.");
  surviveNight();
}

function gatherResources() {
  updateGameOutput("You gathered wood, stone, and metal.");
}

function craftItems() {
  updateGameOutput("You crafted barricades and a light source.");
}

function surviveNight() {
  power -= 10; // Example power usage
  if (power <= 0) {
    isGameOver = true;
    updateGameOutput("Power is out! Game Over.");
  } else {
    updateGameOutput("Surviving the night. Power left: " + power + "%");
  }
}

function animatronicAttack() {
  if (Math.random() < 0.5) {
    isGameOver = true;
    updateGameOutput("Animatronic attacks! Game Over.");
  } else {
    updateGameOutput("You fended off an animatronic!");
  }
}
