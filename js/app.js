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
const cowWin = new Audio('../audio/cowwin.wav')
const cowLose = new Audio('../audio/cowlose.wav')


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

function updateLoop() {
  updateCow()
  updateGrass()
}

/* ===== RENDER FUNCTIONS ===== */

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