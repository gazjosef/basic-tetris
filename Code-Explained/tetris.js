const cvs = document.getElementById('tetris');
const ctx = cvs.getContext('2d');

const ROW = 20;
const COL = (COLUMN = 10);
const SQ = (squareSize = 10);
const VACANT = 'WHITE'; // Color of an empty square

// Draw A Square
ctx.fillStyle = 'red';
ctx.fillRect(0, 0, 50, 50);

ctx.strokeStyle = 'BLACK';
ctx.strokeRect(0, 0, 50, 50);
