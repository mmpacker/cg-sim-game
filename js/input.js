/* ===== IMPORTS ===== */
import { cowPosition } from './cow.js'
import { gridSizeH, gridSizeW } from './grid.js'


/* ===== CONSTANTS / VARIABLES ===== */
let inputMove = {x: 0, y: 0}

//To add hard-coded instructions on where to move the cow, add single character strings to the instructions array: 'u' = ArrowUp; 'd' = ArrowDown; 'l' = ArrowLeft; 'r' = ArrowRight:
export let instructions = ['u', 'l', 'u', 'r', 'd', 'd', 'r', 'r']

/* ===== EVENT LISTENERS ===== */

//Moves cow when arrow keys are pressed; limits movement to coordinates within grid boundries.
window.addEventListener('keydown', e => {
  switch (e.key) {
    case 'ArrowUp':
      if(cowPosition.y <= 1) break 
      inputMove = {x: 0, y: -1}
      break
    case 'ArrowDown':
      if(cowPosition.y >= gridSizeH) break 
      inputMove = {x: 0, y: 1}
      break
    case 'ArrowLeft':
      if(cowPosition.x <= 1) break
      inputMove = {x: -1, y: 0}
      break
    case 'ArrowRight':
      if(cowPosition.x >= gridSizeW) break
      inputMove = {x: 1, y: 0}
      break
  }
})


/* ===== FUNCTIONS ===== */

//Gets the value of the latest user input to move the cow
export function getInputMove() {
  return inputMove
}

//If hard-coded instructions exist in the instructions array, the instructionMove function will use recursion to repeatedly call itself and move the cow until no values are left in the instructions array - - setTimeout is used to make the movement of the cow easier to track visually by moving it once per second:
export function instructionMove() {
  switch(instructions[0]) {
    case 'u':
      if(cowPosition.y <= 1) break 
      inputMove = {x: 0, y: -1}
      break
    case 'd':
      if(cowPosition.y >= gridSizeH) break 
      inputMove = {x: 0, y: 1}
      break
    case 'l':
      if(cowPosition.x <= 1) break
      inputMove = {x: -1, y: 0}
      break
    case 'r':
      if(cowPosition.x >= gridSizeW) break
      inputMove = {x: 1, y: 0}
      break
  }
  instructions.shift()
  if(instructions.length) {
    setTimeout(instructionMove, 1000)
  }
}