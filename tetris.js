/**
 * Initialize the Game and starts it.
 */
var side = 30;
var background = "white";
var game = new Game();

/*function init() {
	if(game.init())
		game.start();
}*/

function Game(){
	var canvas = document.getElementById("canvas");
	//var ctx = canvas.getContext("2d");
	//ctx.fillStyle = "red";
	//ctx.fillRect(100, 100, 150, 150);
	
	var array = [[1], [1], [1,1]];
	var piece = CreatePiece("blue", array);
	
	while (piece.state === "moving"){
		window.setInterval(function(){Animate(piece);}, 100);
	}
	
	
	

   /* array = [[1, 1], [1,1]];
	var piece2 = CreatePiece("red", array);
	
	var bottom2 = false;
	while(!bottom2){
		window.setInterval(function(){bottom2 = Animate(piece2);}, 100);
	}*/

	
}
	
function Draw(piece){
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

function ClearPiece(piece){
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
		state : "moving"
	}
	return piece;
}

function Animate(piece){
	var pcHeight = side*piece.positions.length;
	if (piece.y + pcHeight == 720) {
		piece.state = "blocked";
		return;
	}
		
	
	ClearPiece(piece);
	piece.y+=side;
	Draw(piece);
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
