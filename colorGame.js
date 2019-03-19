var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
	//mode buttons event listeners
	setUpModeButtons();
	setUpSquares();
	reset();

}

function setUpModeButtons() {

	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");

			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			// if (this.textContent === "Easy") {
			// 	numSquares = 3;
			// } else {
			// 	numSquares = 6;
			// }

			reset();
			//figure out how many squares to show
			//pick a new colors
			//pick a new pickedColor
			//update page to reflect changes
		});
	}

}

function setUpSquares() {
	for (var i = 0; i < squares.length; i++) {
	// squares[i].style.backgroundColor = colors[i];
	//add event listner to clicked sqaures
		squares[i].addEventListener("click", function() {
			//grab the color of picked square
			var clickedColor = this.style.backgroundColor;
			//Compare clickedColor and pickedColor
			if (clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct";
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.backgroundColor = pickedColor;
			} else {
				this.style.backgroundColor = "#232323";
				resetButton.textContent = "New Colors";
				messageDisplay.textContent = "Try Again";
			}
		});
	}

}

function reset(){
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colors of squares
	for (var i =0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
	//for removing correct message after winning the game.	
}

// easyBtn.addEventListener("click", function() {
//  easyBtn.classList.add("selected");
//  hardBtn.classList.remove("selected");
//  numSquares = 3;
//  colors = generateRandomColors(numSquares);
//  pickedColor = pickColor();
//  colorDisplay.textContent = pickedColor;
//  for (var i = 0; i < squares.length; i++) {
//  	if (colors[i]) {
//  		squares[i].style.backgroundColor = colors[i]	
//  	} else {
//  		squares[i].style.display = "none";
//  	}
//  }
// });

// hardBtn.addEventListener("click", function() {
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
//  	pickedColor = pickColor();
//  	colorDisplay.textContent = pickedColor;
//  	for (var i = 0; i < squares.length; i++) {
// 		squares[i].style.backgroundColor = colors[i]	
//  		squares[i].style.display = "block";
//  }
// });

resetButton.addEventListener("click", function() {
	
	reset();

	// //generate all new colors
	// colors = generateRandomColors(numSquares);
	// //pick a new random color from array
	// pickedColor = pickColor();
	// //change colorDisplay to match picked color
	// colorDisplay.textContent = pickedColor;
	// this.textContent = "New Colors";
	// //change colors of squares
	// for (var i =0; i < squares.length; i++) {
	// 	squares[i].style.backgroundColor = colors[i];
	// }
	// h1.style.backgroundColor = "steelblue";
	// //for removing correct message after winning the game.
	// messageDisplay.textContent = "";
 });

	// colorDisplay.textContent = pickedColor;

//square[i].style.background is not working in firefox. So I have used backgroundColor.

function changeColors(color) {
	//loop through all squares
	for (var i = 0; i < squares.length; i++) {
		//change each color to match color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make an array
	var arr = [];
	//repeate num times
	for (var i = 0; i < num; i++) {
		//get random colors
		arr.push(randomColor());
	}
	//return that array
	return arr;

	function randomColor() {
		//pick a "Red" from 0 to 255;
		var r = Math.floor(Math.random() * 256);
		//pick a "Green" from 0 to 255;
		var g = Math.floor(Math.random() * 256);
		//pick a "Blue" from 0 to 255;
		var b = Math.floor(Math.random() * 256);
		
		return "rgb(" + r  + ", " + g + ", " + b + ")";
	}
 
}