/* ===== IMPORTS ===== */
import { cowPosition } from './cow.js'
import { gridSizeH, gridSizeW } from './grid.js'


/* ===== CONSTANTS / VARIABLES ===== */
let inputMove = {x: 0, y: 0}


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