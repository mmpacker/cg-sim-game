/* ===== IMPORTS ===== */
import { cowBell, gameStatus } from './app.js'
import { getInputMove } from './input.js'


/* ===== CONSTANTS / VARIABLES ===== */
export const cowSpeed = 10
export const cowPosition = {x: 9, y: 9}


/* ===== FUNCTIONS ===== */

//Updates the cow's position based on user inputs
export function updateCow() {
  //added console log to show cow position as it moves using hard-coded instructions
  console.log(cowPosition)
  const inputMove = getInputMove()
  cowPosition.x += inputMove.x
  cowPosition.y += inputMove.y
  inputMove.x = 0
  inputMove.y = 0
}

//Adds the cow image to the game field
export function drawCow(gameField) {
  const cowEl = document.createElement('img')
  if(gameStatus === 'win' || gameStatus === 'gameOver') {
    cowEl.style.display = 'none'
  }
  cowEl.style.gridRowStart = cowPosition.y
  cowEl.style.gridColumnStart = cowPosition.x
  cowEl.classList.add('cow')
  cowEl.id = 'cow'
  cowEl.src = 'images/cow.png'
  
  gameField.appendChild(cowEl)
}

//Checks whether a set of coordinates overlaps with the cow's current position; used to interact with grass; used when generating a random position for a new patch of grass
export function onCow(position) {
  if(cowPosition.x === position.x && cowPosition.y === position.y) {
    return true
  } else {
    return false
  }
}