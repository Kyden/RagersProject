
var gridCol = 10;
var gridRow = 16;
var side = 30;
var background = "white";
var boardGrid = new Array();
var timeInterval;
var piece = {
	x:5, y:0,
	color:"red",
	width:2,
	height:3,
};

window.addEventListener('keydown', this.check, false);
var game = new Game();


function Game(){
	var canvas = document.getElementById("canvas");
	initBoard();
	initPiece(piece.x, piece.y);
	
	timeInterval = window.setInterval(movePiece, 300);
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
	// un array cu piesele de unde se initializeaza piese
	boardGrid[x][y] = 1;
	boardGrid[x][y+1] = 1;
	boardGrid[x][y+2] = 1;
	boardGrid[x+1][y+2] = 1;
}

function drawPiece(){
	var ctx = canvas.getContext("2d");
	ctx.fillStyle = piece.color;
	
	//ctx.fillRect(piece.x * side, piece.y * side, side, side);
	//ctx.fillRect(piece.x * side, (piece.y+1) * side, side, side);
	//ctx.fillRect(piece.x * side, (piece.y+2) * side, side, side);
	//ctx.fillRect((piece.x+1) * side, (piece.y+2) * side, side, side);
	for(var i = 0; i < 1280/30; i++){
		for(var j = 0; j < 720/30; j++){
			if(boardGrid[i][j] == 1){
				ctx.fillRect(i*side, j*side, side, side);
			}
		}
	}
}

function clearPiece(){
	var ctx = canvas.getContext("2d");
	ctx.fillStyle = background;
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	
	boardGrid[piece.x][piece.y] = 0;
	boardGrid[piece.x][piece.y+1] = 0;
	boardGrid[piece.x][piece.y+2] = 0;
	boardGrid[piece.x+1][piece.y+2] = 0;
}

function movePiece(direction){
	if(typeof direction == 'undefined'){
		direction = "down";
	}
	
	if(isCollisionDetected(direction)){
		if(direction != "down")
			return;
		else{
			if(piece.y == 1){
				alert("Game Over!");
				clearInterval(timeInterval);
			}
			piece.x = 5;
			piece.y = 0;
			piece.color = "blue";
			initPiece(5, 0);
		}
	}
	
	clearPiece();
	
	switch(direction){
		case "down": 	
			piece.y++;
			break;
		case "left":
			piece.x--;
			break;
		case "right":
			piece.x++;
			break;
		default: break;
	}

	
	
	initPiece(piece.x, piece.y);
	drawPiece();
}

// direction params: down, left, right
function isCollisionDetected(direction){
	
	if(direction == "down"){
		// end of board reached
		if(piece.y + piece.height == gridRow){
			return true;
		}
		// bellow row is occupied
		for(var i = 0; i < piece.width; i++){
			if(boardGrid[piece.x + i][piece.y + piece.height] == 1){
				return true;
			}
		}
	}
	
	if(direction == "left"){
		if(piece.x == 0){
			return true;
		}
		
		for(var i = 0; i < piece.height; i++){
			if(boardGrid[piece.x - 1][piece.y + i] == 1){
				return true;
			}
		}
	}
	
	if(direction == "right"){
		if(piece.x + piece.width == gridCol){
			return true;
		}
		
		for(var i = 0; i < piece.height; i++){
			if(boardGrid[piece.x + piece.width + 1][piece.y + i] == 1){
				return true;
			}
		}
	}
	return false;
}

function check(e) {
	var key = e.keyCode;
	switch(key) {
		case 37:
			movePiece("left");
			break;
		case 39:
			movePiece("right");
			break;
		case 40:
			movePiece("down");
			break;
		default:
			break;
	}
}


// TODO : different shape pieces (I, J, L, etc..), 

