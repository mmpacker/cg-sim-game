/* ===== IMPORTS ===== */
import { cowSpeed, updateCow, drawCow } from './cow.js'


/* ===== CONSTANTS / VARIABLES ===== */
let lastRenderTime = 0
export let gameStatus = ''



/* ===== CACHED ELEMENT REFS ===== */




/* ===== EVENT LISTENERS ===== */




/* ===== FUNCTIONS ===== */

//Main game loop:
function playGame(currentTime) {
  window.requestAnimationFrame(playGame)
  
  const secSinceLastRender = (currentTime - lastRenderTime) / 1000

  if(secSinceLastRender < 1 / cowSpeed) return

  lastRenderTime = currentTime
  console.log(currentTime)

  updateLoop()
  drawLoop()
}

function updateLoop() {
  updateCow()
}

/* ===== RENDER FUNCTIONS ===== */

function drawLoop() {
  drawCow()
}


/* ===== HELPER FUNCTIONS ===== */

//Function for START button (starts main game loop and game timer):
function start() {
  window.requestAnimationFrame(playGame)
  // gameTimer()
}

//delete later
// window.requestAnimationFrame(playGame)