// variable declaration
var rps = " ";
var winCounter = 0;
var lossCounter = 0;
var choice = prompt("Do you want to play Rock paper Scissors?(Y/N)");
// While loop body
while(choice == "Y" || choice == "y"){
	var urps = prompt("Rock, paper or scissors?");
	console.log(compC());
	console.log("You have chosen " + urps);
	if((urps == "rock" && rps == "scissors") || (urps == "paper" && rps == "rock") || (urps == "rock" && rps == "paper")){
		console.log("You win!");
		winCounter++;
	}
	else if(urps === rps){
		console.log("Tie");
	}
	else{
		console.log("You lost");
		lossCounter++;
	}
	choice = prompt("Do you want to go again?(Y/N)");
}
console.log("You won " + winCounter + " times.");
console.log("You won " + lossCounter + " times.");
// helper function to calculate the computers choice 
// between rock, paper, or scissors
function compC(){
	var rand = Math.floor((Math.random() * 3));
	rps = " ";
	if(rand == 0){
		rps = "rock";
	}
	if(rand == 1){
		rps = "paper";
	}
	if(rand == 2){
		rps = "scissors";
	}
	return "Computer has chosen " + rps;
}