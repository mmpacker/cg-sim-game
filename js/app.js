/* ===== IMPORTS ===== */
import { cowSpeed, updateCow, drawCow } from './cow.js'
import { updateGrass, drawGrass, gameScore } from './grass.js'
import { gameTimer, timeLeft } from './timer.js'


/* ===== CONSTANTS / VARIABLES ===== */
let lastRenderTime = 0
export let gameStatus = ''

//SoundFx
export const cowBell = new Audio('../audio/cowbell.wav')
const cowMoo = new Audio('../audio/cowmoo.mp3')
let cowWin = new Audio('../audio/cowwin.wav')
let cowLose = new Audio('../audio/cowlose.wav')


/* ===== CACHED ELEMENT REFS ===== */
const gameFieldEl = document.getElementById('fieldGrid')
const messageEl = document.getElementById('message')
const startBtnEl = document.getElementById('startBtn')
const howToEl = document.getElementById('howTo')


/* ===== EVENT LISTENERS ===== */
startBtnEl.addEventListener('click', start)
howToEl.addEventListener('click', howToAlert)


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

//Changes the game status based on conditions
function updateGameStatus() {
  if(gameScore >= 10) {
    gameStatus = 'win'
  } else if( timeLeft === -1) {
    gameStatus = 'gameOver'
  } else {
    gameStatus = null
  }
}

//Checks current game status for win/lose conditions and changes messaging/sfx/gameField based on status
function checkGameStatus() {
  if( gameStatus === 'win') {
    messageEl.innerText = 'You Win!'
    cowWin.play()
    cowWin = null
    gameFieldEl.innerHTML = ''
  } else if( gameStatus === 'gameOver') {
    messageEl.innerText = `Time's up! Better Luck Next Time.`
    cowLose.play()
    cowLose = null
    gameFieldEl.innerHTML = ''
  }
}

//Updates position of cow and grass; updates and checks game status for win/lose conditions
function updateLoop() {
  updateCow()
  updateGrass()
  updateGameStatus()
  checkGameStatus()
}

/* ===== RENDER FUNCTIONS ===== */

//Calls functions to draw cow and grass on gameField
function drawLoop() {
  gameFieldEl.innerHTML = ''
  drawCow(gameFieldEl)
  drawGrass(gameFieldEl)
}


/* ===== HELPER FUNCTIONS ===== */

//Function for START button (starts main game loop and game timer):
function start() {
  window.requestAnimationFrame(playGame)
  cowMoo.play()
  gameTimer()
}

//Triggers alert window in browser with game instructions:
function howToAlert() {
  window.alert('Use the arrow keys to move the cow and eat the delicious grass! Eat 10 patches of grass before time is up to win.')
}