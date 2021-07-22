/* ===== IMPORTS ===== */
import { gameStatus } from './app.js'
import { getInputMove } from './input.js'


/* ===== CONSTANTS / VARIABLES ===== */
export const cowSpeed = 10
export const cowPosition = {x: 9, y: 9}


/* ===== FUNCTIONS ===== */
export function updateCow() {
  const inputMove = getInputMove()
  cowPosition.x += inputMove.x
  cowPosition.y += inputMove.y
  inputMove.x = 0
  inputMove.y = 0
}

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