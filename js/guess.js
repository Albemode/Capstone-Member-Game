var image_array = ["imagecircle.svg","imagecircle.svg","imagecomstar.svg","imagecomstar.svg","imagestars.svg","imagestars.svg","imageswirl.svg","imageswirl.svg","imagetrihole.svg","imagetrihole.svg","imagetriline.svg","imagetriline.svg","imageping.svg","imageping.svg","imageoplines.svg","imageoplines.svg","imagepleteop.svg","imagepleteop.svg","imagepletd.svg","imagepletd.svg"];
var image_values = [];
var images_tile_ids = [];
var tile_flip = 0;

Array.prototype.memory_tile_shuffle = function() {
	var i = this.length, j, temp;
		while(--i >0) {
			j = Math.floor(Math.random() * (i+1));
			temp = 	this[j];
					this[j] = this [i];
					this[i] = temp; 
	}
}
function new_cboard() {
	tile_flip = 0;
	var output = '';
	console.log( image_array )
		image_array.memory_tile_shuffle();
		for (var i = 0; i < image_array.length; i++) {
			 // output +='<div id="tile_'+i+' onclick="memoryFlipTile(this,\''+image_array[i]+'\')"></div>';
			 output +='<div id="tile_'+i+'" class="minibox"></div>';
	}
	console.log(output);
	document.getElementById('container_board').innerHTML = output;
	Array.from(document.querySelectorAll(".minibox"), function( e, i ) {
		e.addEventListener('click',function(){
			memoryFlipTile(e,image_array[i]);
		});
	}); 
}

function memoryFlipTile(tile,val) {
	 console.log(tile, val)
	tile.class = ""; // get rid of class
	tile.style.backgroundImage = "url(images/"+val+")";
	return;
	if(tile.innerHTML == "" && memory_values.length < 2) {
		tile.style.background = '#FFF';
		tile.innerHTML = val;
		if(image_values.length == 0) {
			image_values.push(val);
			images_tile_ids.push(tile.id);
		} else if (image_values.length == 0) {
			image_values.push(val);
			images_tile_ids.push(tile.id);
			if(image_values[0] == image_values[1]) {
				tile_flip += 2;
				image_values = [];
				images_tile_ids =[];
				if(tile_flip == image_array.length) {
					alert("board cleared... generating new board");
					document.getElementById('container_board').innerHTML = "";
					new_cboard();
				}
			} else {
				function flip2back() {
					var tile_1 = document.getElementById(images_tile_ids[0]);
					var tile_2 = document.getElementById(images_tile_ids[1]);
					tile_1.style.background = ' url(../images/redmetal.jpg)) no-repeat';
					tile_1.innerHTML = "";
					tile_2.style.background = 'url(../images/redmetal.jpg)) no-repeat';
					tile_2.innerHTML = "";
					image_valuess = [];
					images_tile_ids = [];
				}
				 setTimeout(flip2back, 300);
			}


		}
	}
};







 // var timelimit = null;
	// function countDown() {
	// 	countDown = setInterval(tick,1000);
 // 	}

 // 	function tick() {
 // 		if (typeof countDownInterval.timecount == '')
	// }
	// 	else{
	// 		countDownInterval.timecount++;
	// 		console.log(timecount)
 // }












