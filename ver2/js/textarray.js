var memory_values = [];
var memory_tile_ids = [];
var tiles = 0;
var memory_array = ['A','A','B','B','C','C','Z','Z','I','I',	'M','M','J','J','K','K','L','L','S','S'];
// var memory_array = ['https://www.iconfinder.com/icons/103184/check_checkmark_ok_yes_icon#size=128', 'imagecircle.svg', 'imagecomstar.svg', 'imagecomstar.svg','imageoplines.svg','imageoplines.svg','imageping.svg','imageping.svg','.svg','.svg','.svg','.svg','.svg','.svg','redmetal.jpg','H','I','I','J','J','K','K','L','L'];
// var memory_array = [
//     getImage("images/matchboxbg"),
//     getImage("images/imagecomstar"),
//     getImage("images/imageoplines"),
//     getImage("images/imageping"),
//     getImage("images/imagepletd"),
//     getImage("images/imagepleteop"),
//     getImage("imagesimagestars"),
//     getImage("images/imageswirl"),
//     getImage("images/imagetrihole"),
//     getImage("images/imagetriline"),
//     getImage("images/image"),
//     getImage("images/image")
// ];
Array.prototype.memory_tile_shuffle = function(){
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}
function newBoard()
{
	tiles= 0;
	var output = '';
	console.log( memory_array )
    memory_array.memory_tile_shuffle();
	for(var i = 0; i < memory_array.length; i++){
		output += '<div id="tile_'+i+'" onclick="memoryFlipTile(this,\''+memory_array[i]+'\')"></div>';
	}
	document.getElementById('memory').innerHTML = output;
	// Array.from(document.querySelectorAll("minibox"), function( e, i ) {
	// 	e.addEventListener('click',function(){
	// 		minibox(e,memory_array[i]);
	// 	});
	// }); 
}
function memoryFlipTile(tile,val){
	if(tile.innerHTML == "" && memory_values.length < 2){
		tile.style.background = '#FFF';
		tile.innerHTML = val;
		if(memory_values.length == 0){
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
		} else if(memory_values.length == 1){
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
			if(memory_values[0] == memory_values[1]){
				tiles += 2;
				// Clear both arrays
				memory_values = [];
            	memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(tiles == memory_array.length){
					alert("CONGRADULATION ! YOU WILL PLAY AGAIN.");
					document.getElementById('memory').innerHTML = "";
					newBoard();
				}
			} else {
				function flip2Back(){
				    // Flip the 2 tiles back over
				    var tile_1 = document.getElementById(memory_tile_ids[0]);
				    var tile_2 = document.getElementById(memory_tile_ids[1]);
				     tile_1.style.background = 'url(https://cdn0.iconfinder.com/data/icons/30_Free_Black_ToolBar_Icons/40/Black_Remove.png) 88px 110px ';
            	    tile_1.innerHTML = "";
				    tile_2.style.background = 'url(https://cdn0.iconfinder.com/data/icons/30_Free_Black_ToolBar_Icons/40/Black_Remove.png) 88px 110px ';
            	    tile_2.innerHTML = "";
				    // Clear both arrays
				    memory_values = [];
            	    memory_tile_ids = [];
				}
				setTimeout(flip2Back, 700);
			}
		}
	}
}