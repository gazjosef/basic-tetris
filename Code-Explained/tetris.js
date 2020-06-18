const cvs = document.getElementById('tetris');
const ctx = cvs.getContext('2d');

const ROW = 20;
const COL = (COLUMN = 10);
const SQ = (squareSize = 20);
const VACANT = 'WHITE'; // Color of an empty square

// Draw A Square
function drawSquare(x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x * SQ, y * SQ, SQ, SQ);

  ctx.strokeStyle = 'BLACK';
  ctx.strokeRect(x * SQ, y * SQ, SQ, SQ);
}

// Create The Board
let board = [];
for (r = 0; r < ROW; r++) {
  board[r] = [];
  for (c = 0; c < COL; c++) {
    board[r][c] = VACANT;
  }
}

// Draw The Board Onto Canvas
function drawBoard() {
  for (r = 0; r < ROW; r++) {
    for (c = 0; c < COL; c++) {
      drawSquare(c, r, board[r][c]);
    }
  }
}

drawBoard();

// Pieces & Their Colors
const PIECES = [
  [Z, 'red'],
  [S, 'green'],
  [T, 'Yellow'],
  [O, 'Blue'],
  [L, 'Purple'],
  [I, 'Cyan'],
  [J, 'Orange'],
];

// Initiate Piece
let p = new Piece(PIECES[0][0], PIECES[0][1]);

// The Object Piece
function Piece(tetromino, color) {
  this.tetromino = tetromino;
  this.color = color;

  this.tetrominoN = 0;
  this.activeTetromino = this.tetromino[this.tetrominoN];

  // Control Pieces
  this.x = 0;
  this.y = 0;
}

// Draw A Piece To The Board
Piece.prototype.draw = function () {
  for (r = 0; r < this.activeTetromino.length; r++) {
    for (c = 0; c < this.activeTetromino.length; c++) {
      // We draw only occupied squares
      if (this.activeTetromino[r][c]) {
        drawSquare(this.x + c, this.y + r, this.color);
      }
    }
  }
};

p.draw();
