let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameOver = false;

function makeMove(index) {
  if (!gameOver && board[index] === '') {
    board[index] = currentPlayer;
    document.getElementsByClassName('cell')[index].textContent = currentPlayer;
    checkWin();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

function checkWin() {
  const winCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];

  for (let combination of winCombinations) {
    if (
      board[combination[0]] !== '' &&
      board[combination[0]] === board[combination[1]] &&
      board[combination[1]] === board[combination[2]]
    ) {
      gameOver = true;
      document.getElementById('result-message').textContent = currentPlayer + ' wins!';
      document.getElementById('result').classList.remove('hidden');
      break;
    }
  }

  if (!board.includes('') && !gameOver) {
    gameOver = true;
    document.getElementById('result-message').textContent = "It's a draw!";
    document.getElementById('result').classList.remove('hidden');
  }
}

function startNewGame() {
  board = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  gameOver = false;

  const cells = document.getElementsByClassName('cell');
  for (let cell of cells) {
    cell.textContent = '';
  }

  document.getElementById('result').classList.add('hidden');
}