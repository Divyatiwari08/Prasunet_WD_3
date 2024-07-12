let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const boardCells = document.querySelectorAll('.cell');
const messageText = document.getElementById('message');

function checkWinner() {
  for (let condition of winningConditions) {
    let [a, b, c] = condition;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

function placeMarker(cellIndex) {
  if (!gameActive || board[cellIndex] !== '') return;

  board[cellIndex] = currentPlayer;
  boardCells[cellIndex].innerText = currentPlayer;

  let winner = checkWinner();
  if (winner) {
    messageText.innerText = `${winner} wins!`;
    gameActive = false;
    return;
  }

  if (board.every(cell => cell !== '')) {
    messageText.innerText = "It's a tie!";
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  messageText.innerText = `${currentPlayer}'s turn`;
}

function resetBoard() {
  currentPlayer = 'X';
  board = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;
  messageText.innerText = `${currentPlayer}'s turn`;
  boardCells.forEach(cell => cell.innerText = '');
}
