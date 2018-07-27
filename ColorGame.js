// alert('Connected!!!')

var squares = document.querySelectorAll('.square');
// var colors = [
// 	'rgb(255, 0, 0)',
// 	'rgb(255, 255, 0)',
// 	'rgb(0, 255, 0)',
// 	'rgb(0, 255, 255)',
// 	'rgb(0, 0, 255)',
// 	'rgb(255, 0, 255'
// 	];
// gameLevel = 6;

// colors[3];
var colorDisplay = document.querySelector('#colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var modeButtons = document.querySelectorAll('.mode')

var numSquares = 6;
var pickedColor;// = selectedColor() 
// var colors = generateRandomColors(numSquares);
var colors = [];

init();

function init(){
	setupModeButtons();
	reset()
	setupSquares();
}


function setupModeButtons(){
	for(i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener('click',function(){
			modeButtons[0].classList.remove('selected');
			modeButtons[1].classList.remove('selected');
			this.classList.add('selected');
			console.log(this.textContent);
			this.textContent === 'Easy'? numSquares = 3: numSquares = 6;
			reset();
		})
	}
}

function setupSquares(){
	for( i = 0; i < squares.length; i++){
		squares[i].addEventListener('click', function(){
			var clickedColor = this.style.backgroundColor;
			if (clickedColor === pickedColor){
				messageDisplay.textContent = 'Correct!';
				changeColors(clickedColor);
				resetButton.textContent = 'Play Again?';
			} else {
				this.style.backgroundColor = '#232323';
				messageDisplay.textContent = 'Try Again';
			}
		});
	};
}

function reset(){
	h1.style.backgroundColor = 'steelblue';
	colors = generateRandomColors(numSquares);
	pickedColor = selectedColor();
	colorDisplay.textContent = pickedColor;
	for(i = 0; i < squares.length; i++){
		if (colors[i]) {
			squares[i].style.display = 'block';
			squares[i].style.backgroundColor = colors[i];
		}else {
			squares[i].style.display = 'none';
		}
		// squares[i].style.backgroundColor = colors[i];
	}
	messageDisplay.textContent = '';
	resetButton.textContent = 'New Colors';
}

resetButton.addEventListener('click', function(){
	reset();
})

// colorDisplay.textContent = pickedColor;

// for( i = 0; i < squares.length; i++){
// 	squares[i].style.backgroundColor = colors[i];
// 	squares[i].addEventListener('click', function(){
// 		// resetButton.textContent = 'New Game';
// 		var clickedColor = this.style.backgroundColor;
// 		if (clickedColor === pickedColor){
// 			messageDisplay.textContent = 'Correct!';
// 			changeColors(clickedColor);
// 			resetButton.textContent = 'Play Again?';
// 		} else {
// 			this.style.backgroundColor = '#232323';
// 			messageDisplay.textContent = 'Try Again';
// 		}
// 	});
// };


function changeColors(color){
	for (i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
	h1.style.backgroundColor = color;
}

function selectedColor(){
	var random = Math.floor(Math.random()* colors.length);
	return colors[random];
}


function generateRandomColors(number){
	var colors = [];
	for (i = 0; i < number; i++){
		colors.push(generateColor());
	}
	// console.log(colors)
	return colors;
}


function generateColor(){
	var color1 = Math.floor(Math.random()*256);
	var color2 = Math.floor(Math.random()*256);
	var color3 = Math.floor(Math.random()*256 );
	var color = 'rgb(' + color1 + ', ' + color2 + ', ' + color3 + ')';
	return color;
}

// console.log(generateColor());
// var correctGuess = false;

// while (!correctGuess){

// }

