var mode = 6;
var colors = generateRandomColors(mode);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	mode = 3;
	colors = generateRandomColors(mode);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0; i < squares.length; i++){
		//if there is still an existing element in colors array
		if(colors[i]){
			//set the squares' rgb to colors array
			squares[i].style.background = colors[i];
		}
		//hide the remaining elements. squares still has 3 more elements inside
		else{
			squares[i].style.display = "none";
		}
	}
});


hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	mode = 6;
	colors = generateRandomColors(mode);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0; i < squares.length; i++){
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}
});



resetButton.addEventListener("click", function(){
	//generate all new colors
	colors = generateRandomColors(mode);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	//change color of squares
	for (var i = 0; i<squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	resetButton.textContent = "New Colors"
	h1.style.background = "steelblue";
	messageDisplay.textContent = "";
})



colorDisplay.textContent = pickedColor;

for (var i = 0; i<squares.length; i++){
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if (clickedColor === pickedColor){
			changeColor(clickedColor);
			messageDisplay.textContent = "You Win!"
			h1.style.backgroundColor = pickedColor;
			resetButton.textContent = "Play Again?"
			//restart game
		}
		else{
			this.style.backgroundColor = "#232323"
			messageDisplay.textContent = "Try Again!";
		}
	});
}

function generateRandomColors(num){
	var randomArray = [];
	var rgb = 256;
	for (var i = 0; i < num; i++){
		randomArray.push(randomColor());
	}
	return randomArray;
}

function changeColor(color){
	//loop through all the squares
	for(var i = 0; i<squares.length; i++){
		//change color to match given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	//pick a random a number
	var random = Math.floor(Math.random() * colors.length);
	//use number to access color in array
	return colors[random];
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}