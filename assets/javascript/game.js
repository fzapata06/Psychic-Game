	var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

	var wins = 0;
	var losses = 0;
	var guessesleft = 9;
	var lettersUsed = [];

 	document.onkeyup = function(event){
	var usersGuess = event.key;
	var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

   	if (usersGuess === computerGuess){
    wins++;
    alert('You Win!');
 }
 	if (guessesleft == 1){
   	guessesleft = 9;
    lettersUsed = [];
    losses++;
   	alert('You Lose!');
 }

 {
    if (guessesleft !== 0){
    guessesleft--;
    lettersUsed.push(usersGuess);
     }

     else {
       losses++;
       guessesleft = 9;
       lettersUsed = [];
     }
 }
   
	var html = "<p>Wins: " + wins + "</p>" +
         	   "<p>Losses: " + losses + "</p>" +
         	   "<p>Guesses Left: " + guessesleft + "</p>" +
         	   "<p>Your Guesses so far:" + lettersUsed + "</p>";

    document.querySelector("#game").innerHTML = html;
 }
     
