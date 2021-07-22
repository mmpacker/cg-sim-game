/* ===== IMPORTS ===== */
import { cowSpeed, updateCow, drawCow } from './cow.js'
import { updateGrass, drawGrass, gameScore } from './grass.js'


/* ===== CONSTANTS / VARIABLES ===== */
let lastRenderTime = 0
export let gameStatus = ''



/* ===== CACHED ELEMENT REFS ===== */
const gameField = document.getElementById('fieldGrid')
const messageEl = document.getElementById('message')
const startBtn = document.getElementById('startBtn')



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
  updateGrass()
}

/* ===== RENDER FUNCTIONS ===== */

function drawLoop() {
  gameField.innerHTML = ''
  drawCow(gameField)
  drawGrass(gameField)
}


/* ===== HELPER FUNCTIONS ===== */

//Function for START button (starts main game loop and game timer):
function start() {
  window.requestAnimationFrame(playGame)
  // gameTimer()
}

//delete later
window.requestAnimationFrame(playGame)