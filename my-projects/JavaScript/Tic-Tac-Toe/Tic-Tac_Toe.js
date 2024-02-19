const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle';
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
const cellElements = document.querySelectorAll('[data-cell]');
const parentDiv = document.getElementById('parentDiv');
const winningMessageElement = document.getElementById('wngMsg');
const restartButton = document.getElementById('restartBtn')
const winningMessageTextElement = document.querySelector('[data-wng-msg-txt]')
let circleTurn

startGame();

restartButton.addEventListener('click', startGame)

function startGame(){
  circleTurn = false;
  cellElements.forEach(cells => {
    cells.classList.remove(X_CLASS)
    cells.classList.remove(CIRCLE_CLASS)
    cells.removeEventListener('click', handleClick)
    cells.addEventListener('click', handleClick, { once: true })
  })
  setBoardHoverClass()
  winningMessageElement.classList.remove('show')
}

function handleClick(e){
  const cell = e.target
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
  placemark(cell, currentClass)
  if(checkWin(currentClass)){
    endGame(false)
  }else if(isDraw()){
    endGame(true)
  } else{
    swapTurns()
    setBoardHoverClass()
  }
}

function endGame(draw){
  if(draw){
    winningMessageTextElement.innerText = 'Draw!'
  } else {
    winningMessageTextElement.innerText = `${circleTurn ? "O's" : "X's"} Wins!`
  }
  winningMessageElement.classList.add('show');
}

function isDraw(){
  return [...cellElements].every(cell => {
    return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
  })
}

function placemark(cell, currentClass){
  cell.classList.add(currentClass)
}

function swapTurns(){
  circleTurn = !circleTurn;
}

function setBoardHoverClass(){
  parentDiv.classList.remove(X_CLASS)
  parentDiv.classList.remove(CIRCLE_CLASS)

  if(circleTurn){
    parentDiv.classList.add(CIRCLE_CLASS)
  }else{
    parentDiv.classList.add(X_CLASS)
  }
}

function checkWin(currentClass){
  return WINNING_COMBINATIONS.some(combination => {
    return combination.every(index => {
      return cellElements[index].classList.contains(currentClass)
    })
  })
}