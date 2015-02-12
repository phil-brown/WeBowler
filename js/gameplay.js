function initGame() {
// This function will reset all game functionality and variables to start a new game

}

function rollBall() {
	
// This function will roll the ball and return the number of pins knocked down

alert("You rolled the ball!");
// Get a random number between 1 and 10
var pins = Math.floor(Math.random()*11);

// Store the result in the array

// Return a message

    return pins;
}

function playGame(){
var result = rollBall();

//alert("You knocked down " + result + " pins!");

var displayDiv = document.getElementById('turnResults');
displayDiv.style.display = 'block';
displayDiv.innerHTML = "You knocked down " + result + " pins!";


}