var intro = new Audio('assets/sounds/Intro.wav');

$(document).ready(function() {
	intro.play();

function initialScreen() {
	startScreen = "<p class='text-center main-button-container'><a class='btn btn-warning btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
	$(".mainArea").html(startScreen);
}

initialScreen();

//Create a function, generateHTML(), that is triggered by the start button

$("body").on("click", ".start-button", function(event){
	event.preventDefault(); 
	ned.play();
	generateHTML();

	timerWrapper();

}); 
//answer
$("body").on("click", ".answer", function(event){
	//answeredQuestion = true;
	selectedAnswer = $(this).text();
	if(selectedAnswer === correctAnswers[questionCounter]) {
		

		clearInterval(theClock);
		generateWin();
	}
	else {
		
		clearInterval(theClock);
		generateLoss();
	}
}); // Close .answer click

$("body").on("click", ".reset-button", function(event){
	intro.play();
	resetGame();
}); // Closes reset-button click

});  //  Closes jQuery wrapper

function generateLossDueToTimeOut() {
	unansweredTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Check the clock much?  The correct answer was: " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='assets/images/nelson.png'>";
	$(".mainArea").html(gameHTML);
	nelson.play();
	setTimeout(wait, 4000);  //  change to 4000 or other amount
}

function generateWin() {
	correctTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Oh Yeah! The right answer was: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
	$(".mainArea").html(gameHTML);
	woohoo.play();
	setTimeout(wait, 4000);  //  4 second wait
}

function generateLoss() {
	incorrectTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! You should have picked: "+ correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='assets/images/nelson.png'>";
	$(".mainArea").html(gameHTML);
	nelson.play();
	setTimeout(wait, 4000); //  4 second wait
}

function generateHTML() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
	$(".mainArea").html(gameHTML);
}

function wait() {
	if (questionCounter < 9) {
	questionCounter++;
	generateHTML();
	counter = 30;
	timerWrapper();
	}
	else {
		finalScreen();
	}
}

function timerWrapper() {
	theClock = setInterval(thirtySeconds, 1000);
	function thirtySeconds() {
		if (counter === 0) {
			clearInterval(theClock);
			generateLossDueToTimeOut();
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer").html(counter);
	}
}

function finalScreen() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
	$(".mainArea").html(gameHTML);
	end.play();
}

function resetGame() {
	questionCounter = 0;
	correctTally = 0;
	incorrectTally = 0;
	unansweredTally = 0;
	counter = 30;
	generateHTML();
	timerWrapper();
}

var startScreen;
var gameHTML;
var counter = 30;
var questionArray = ["What language did Groundskeeper Willie briefly teach?", "What is Comic Book Guy's real name?", "What's Bart's elephant named?", "What is Radioactive Man's catchphrase?", "Who told Ralph Wiggum to burn things?", "Which is NOT a movie starring Troy McClure?", "Who was Lisa's jazz influence?", "What does the 'J' stand for in Homer J. Simpson?", "With which Beatle is Marge infatuated?", "Who voiced Maggie's 1st word?"];
var answerArray = [["French", "German", "Italian", "Japanese"], ["Max Power","Miguel Sanchez","Thad Supersperm","Jeffrey Albertson"], ["Mr. Teensy", "Stampy", "Santa's Little Helper", "Pinchy"], ["Ice to see you!","All in favor, say die!","Up and Atom!","Hi Everybody!"], ["The Leprechaun", "Poochy", "James Woods", "His Cat"], ["David versus Super Goliath","Leper in the Backfield","The Erotic Adventures of Hercules","Hail to the Chimp"], ["Bleeding Gums Murphy", "Miles Davis", "Tito Puentes", "John Coaltrane"], ["Steven","Jay","Jerome","Julius"],["John", "George", "Ringo", "Paul"], ["Elizabeth Taylor", "Queen Latifa", "Audrey Hepburn", "Liza Minelli"]];
var imageArray = ["<img class='center-block img-right' src='assets/images/willie.png'>", "<img class='center-block img-right' src='assets/images/comic.png'>", "<img class='center-block img-right' src='assets/images/stampy.png'>", "<img class='center-block img-right' src='assets/images/radioactive.png'>", "<img class='center-block img-right' src='assets/images/leprechaun.png'>", "<img class='center-block img-right' src='assets/images/troy.png'>", "<img class='center-block img-right' src='assets/images/bleeding.png'>", "<img class='center-block img-right' src='assets/images/homer.png'>", "<img class='center-block img-right' src='assets/images/beatles.jpg'>", "<img class='center-block img-right' src='assets/images/maggie.png'>"];
var correctAnswers = ["A. French", "D. Jeffrey Albertson", "B. Stampy", "C. Up and Atom!", "A. The Leprechaun", "D. Hail to the Chimp", "A. Bleeding Gums Murphy", "B. Jay", "C. Ringo", "A. Elizabeth Taylor" ];
var questionCounter = 0;
var selecterAnswer;
var theClock;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;
var ned = new Audio ('assets/sounds/Ned.wav');
var nelson = new Audio ('assets/sounds/Nelson.wav');
var woohoo = new Audio ('assets/sounds/Woohoo.wav');
var end = new Audio ('assets/sounds/End.wav')