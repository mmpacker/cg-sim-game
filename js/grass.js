/* ===== IMPORTS ===== */
import { randomGridPosition } from './grid.js'
import { gameStatus } from './app.js'
import { onCow } from './cow.js'


/* ===== CONSTANTS / VARIABLES ===== */
export let grass = getRandomGrassPosition()

export let gameScore = 0
const scoreAmount = 1


/* ===== FUNCTIONS ===== */

//Updates the position of the grass; if the position of the grass and the cow are equal, the score is incremented by the scoreAmount, and the grass is moved to a new random positon
export function updateGrass() {
  if(onCow(grass)) {
    addScore(scoreAmount)
    grass = getRandomGrassPosition()
  }
}

//Adds the grass image to the game field
export function drawGrass(gameField) {
  const grassEl = document.createElement('img')
  if( gameStatus === 'win' || gameStatus === 'gameOver') {
    grassEl.style.display = 'none'
  }
  grassEl.style.gridRowStart = grass.y
  grassEl.style.gridColumnStart = grass.x
  grassEl.classList.add('grass')
  grassEl.id = 'grass'
  grassEl.src = 'images/grass.png'
  gameField.appendChild(grassEl)
}

//Increments score by scoreAmount
function addScore(scoreAmount) {
  const score = document.getElementById('score')
  gameScore += scoreAmount
  score.innerText = gameScore
}

//Generates a random position for the grass that does not overlap with the cow's current position
function getRandomGrassPosition() {
  let newGrassPosition
  while(newGrassPosition == null || onCow(newGrassPosition)) {
    newGrassPosition = randomGridPosition()
  }
  return newGrassPosition
}