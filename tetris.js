/**
 * Initialize the Game and starts it.
 */
var game = new Game();

function init() {
	if(game.init())
		game.start();
}

function Game(){
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	ctx.fillStyle = "red";
	ctx.fillRect(100, 100, 150, 150);
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
