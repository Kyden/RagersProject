
var gridCol = 10;
var gridRow = 16;
var side = 30;
var background = "white";
var boardGrid = new Array();
var piece = {
	x:5, y:0,
	color:"red"
};

window.addEventListener('keydown', this.check, false);
var game = new Game();


function Game(){
	var canvas = document.getElementById("canvas");
	initBoard();
	initPiece(piece.x, piece.y);
	
	drawPiece();
	for (var i=0; i<gridRow;i++){
		movePiece();
	}
	
	
}

function initBoard(){
	for(var row = 0; row < gridRow; row++){
		boardGrid[row] = new Array();
		for(var col = 0; col < gridCol; col++){
			boardGrid[row][col] = 0;
		}
	}
}

function initPiece(x, y){
	boardGrid[x][y] = 1;
	boardGrid[x][y+1] = 1;
	boardGrid[x][y+2] = 1;
	boardGrid[x+1][y+2] = 1;
}

function drawPiece(){
	var ctx = canvas.getContext("2d");
	ctx.fillStyle = piece.color;
	
	ctx.fillRect(piece.x * side, piece.y * side, side, side);
	ctx.fillRect(piece.x * side, (piece.y+1) * side, side, side);
	ctx.fillRect(piece.x * side, (piece.y+2) * side, side, side);
	ctx.fillRect((piece.x+1) * side, (piece.y+2) * side, side, side);
}

function clearPiece(){
	var ctx = canvas.getContext("2d");
	ctx.fillStyle = background;
	
	ctx.fillRect(piece.x * side, piece.y * side, side, side);
	ctx.fillRect(piece.x * side, (piece.y+1) * side, side, side);
	ctx.fillRect(piece.x * side, (piece.y+2) * side, side, side);
	ctx.fillRect((piece.x+1) * side, (piece.y+2) * side, side, side);
}

function movePiece(){
	clearPiece();
	
	boardGrid[piece.x][piece.y] = 0;
	boardGrid[piece.x+1][piece.y+2] = 0;
	piece.y++;
	initPiece(piece.x, piece.y);
	drawPiece();
}

