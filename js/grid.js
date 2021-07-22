/* ===== CONSTANTS / VARIABLES ===== */

//Sets up the grid size for the play area
export const gridSizeW = 20
export const gridSizeH = 12


/* ===== FUNCTIONS ===== */

//Generates a set of random coordinates within the play area grid
export function randomGridPosition() {
  return {
    x: Math.floor(Math.random() * gridSizeW) + 1,
    y: Math.floor(Math.random() * gridSizeH) + 1
  }
}