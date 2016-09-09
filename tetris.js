/**
 * Initialize the Game and starts it.
 */
var side = 30;
var background = "white";
var Anim, piece, structure;
window.addEventListener('keydown', this.check, false);
var sound1 = new Audio('explode.mp3');
var game = new Game();

/*function init() {
	if(game.init())
		game.start();
}*/

function Game(){
	var canvas = document.getElementById("canvas");
	Anim = window.setInterval(Animate, 300);
	//var ctx = canvas.getContext("2d");
	//ctx.fillStyle = "red";
	//ctx.fillRect(100, 100, 150, 150);
	
	var array = [[1], [1], [1,1]];
	piece = CreatePiece("blue", array);	

   /* array = [[1, 1], [1,1]];
	var piece2 = CreatePiece("red", array);
	
	var bottom2 = false;
	while(!bottom2){
		window.setInterval(function(){bottom2 = Animate(piece2);}, 100);
	}*/

	
}


function check(e) {
	var key = e.keyCode;
	switch(key) {
		case 37:
			goLeft();
			break;
		case 39:
			goRight();
			break;
		case 40:
			goDown();
			break;
		default:
			break;
	}
}

function goLeft() {
	ClearPiece(piece);
	piece.x -= 30;
	Draw(piece);
}

function goRight() {
	ClearPiece(piece);
	piece.x += 30;
	Draw(piece);
}

function goDown() {
	ClearPiece(piece);
	piece.y += 30;
	Draw(piece);
}
	
function Draw(){
	var ctx = canvas.getContext("2d");
	ctx.fillStyle = piece.color;
	
	var x = piece.x;
	var y = piece.y;
	var rows = piece.positions.length;
	var columns;
	
	for (var i = 0; i<rows; i++){
		columns = piece.positions[i].length;
		for ( var j = 0; j<columns; j++){
			if (piece.positions[i][j] == 1){
				ctx.fillRect(x+(j*side), y+(i*side), 30, 30);
			}
		}
	}
}

function ClearPiece(){
	var ctx = canvas.getContext("2d");
	ctx.fillStyle = background;
	
	var x = piece.x;
	var y = piece.y;
	var rows = piece.positions.length;
	var columns;
	
	for (var i = 0; i<rows; i++){
		columns = piece.positions[i].length;
		for ( var j = 0; j<columns; j++){
			if (piece.positions[i][j] == 1){
				ctx.fillRect(x+(j*side), y+(i*side), 30, 30);
			}
		}
	}
}

function CreatePiece(color, positions){
	var piece = {
		color: color,
		positions: positions,
		x : 625,
		y : 0,
	}
	return piece;
}

//TODO:Rethink collision code, animation code (movement & constant piece drop) also, lower & side bounds
function Animate(){
	var pcHeight = side*piece.positions.length;
	if (piece.y + pcHeight == 720) {
		clearInterval(Anim);
		return;
	}
		
	
	ClearPiece();
	piece.y+=side;
	Draw();
}

function RowClear() {
	sound1.play();
}

function DetectCollision() {
	
}



/*var ctx;

function createPiece(color, positions){
	this.color = color;
	this.rows = positions.length;
	this.columns;
		
	var x = 625;
	var y = 0;
	var side = 30;
		
		
	ctx.fillStyle = color;
	for (var i = 0; i<rows; i++){
		columns = positions[i].length;
		for ( var j = 0; j<columns; j++){
			if (positions[i][j] == 1){
				ctx.fillRect(x+(j*side), y+(i*side), 30, 30);
			}
		}
	}
}


$(document).ready(function(){
	var canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	var array = [[1], [1], [1,1]];
	createPiece("red", array);
});*/
