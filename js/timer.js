/* ===== IMPORTS ===== */
import { gameStatus } from './app.js'


/* ===== CONSTANTS / VARIABLES ===== */

//Sets the default starting game time
export let timeLeft = 30


/* ===== EVENT LISTENERS ===== */
const timeEl = document.querySelector('#time')


/* ===== FUNCTIONS ===== */

//Creates countdown effect for the game timer
export function gameTimer() {
  setInterval(function() {
    if( timeLeft <= 0 ) {
      clearInterval(timeLeft = 0)
    }
    if( gameStatus === 'win') {
      clearInterval(timeLeft = 0)
    }
    timeEl.innerHTML = timeLeft
    timeLeft -= 1
  }, 1000)
}