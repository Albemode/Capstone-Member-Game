var image_array = ["imagecircle.svg","imagecircle.svg","imagecomstar.svg","imagecomstar.svg","imagestars.svg","imagestars.svg","imageswirl.svg","imageswirl.svg","imagetrihole.svg","imagetrihole.svg","imagetriline.svg","imagetriline.svg","imageping.svg","imageping.svg","imageoplines.svg","imageoplines.svg","imagepleteop.svg","imagepleteop.svg","imagepletd.svg","imagepletd.svg"];
var images_values = [];
var images_tile_ids = [];
var tiles_flipped = 0;

function new_cBoard() {
	tiles_flipped = 0;
  image_array = _.shuffle(image_array);

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
  // _.forEach(image_array, function(image_array_value, index) {
    // output += '<div id="tile_'+ index +'" onclick="memoryFlipTile(this,\''+ image_array_value +'\')"></div>';
  // });

	// document.getElementById('container_board').innerHTML = output;
}

function willFlipCard(tile) {
  return tile.innerHTML == "" && images_values.length < 2;
}

function isOneCardCarFlipped() {
  return images_values.length == 1
}

function areNoCardsCarFlipped() {
  return images_values.length == 0;
}

function setCarddownAsFlipped(tile, value) {
  images_values.push(value);
  images_tile_ids.push(tile.id);
}

function isThereAMatch() {
  return images_values[0] == images_values[1];
}

function matchingCards() {
  tiles_flipped += 2;
  // Clear both arrays
  images_values = [];
  images_tile_ids = [];
}

function isDuelGameOver() {
  // Check to see if the whole board is cleared
  return tiles_flipped == image_array.length;
}

function duelgameIsOver() {
  alert("Board cleared... generating new board");
  document.getElementById('contianer_board').innerHTML = "";
  new_cBoard();
}

function cardscarDoNotMatch() {
  setTimeout(flipCardBack, 700);
}

function flipCard(tile, value) {
  tile.style.background = '#FFF';
  tile.innerHTML = value;
}

function flipCardBack() {
  // Flip the 2 tiles back over
  var tile_1 = document.getElementById(images_tile_ids[0]);
  var tile_2 = document.getElementById(images_tile_ids[1]);
  tile_1.style.background = 'url(../images/redmetal.jpg)) no-repeat';
  tile_1.innerHTML = "";
  tile_2.style.background = 'url(../images/redmetal.jpg)) no-repeat';
  tile_2.innerHTML = "";

  // Clear both arrays
  images_values = [];
  images_tile_ids = [];
}

function memoryFlipTile(tile, value) {
	if (willFlipCard(tile)) {
		flipCard(tile, value);
    if (areNoCardscarFlipped()) {
			setCarddownAsFlipped(tile, value);
		} else if(isOneCardcarFlipped()) {
      setCardAsFlipped(tile, value);
      if(isThereAMatch()) {
        matchingCards();
        if (isduelGameOver()) {
          duelgameIsOver();
        }
      } else {
  			cardscarDoNotMatch();
      }
    }
  }
}

function memoryFlipTile2(tile, value) {
  if (willFlipCard(tile)) {
    console.log('e1');
    flipCard(tile, value);
    setCarddownAsFlipped(tile, value);
    if (isOneCardcarFlipped()) {
      console.log('e2');
      if (isThereAMatch()) {
        console.log('e3');
        matchingCards();
        if (isduelGameOver()) {
          console.log('e4');
          duelgameIsOver();
        }
      } else {
        cardscarDoNotMatch();
      }
    }
  }
}
