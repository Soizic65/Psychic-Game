var computerOptions = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
]

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessChoices = [];

document.onkeydown = function(event){
    var user = event.key;
    var computer = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    var options = [
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    ]
    
   //Figure out how to set these to the getElementById
    
    
    if (options.indexOf(user) > -1) {

        if(user === computer){
            wins++;
            guessesLeft = 10;
            guessChoices = [];
        } 
        if(user != computer){
            guessesLeft--;
            guessChoices = [];
        }
        if (guessesLeft === 0){
            losses++;
            guessesLeft = 10;
            guessChoices = [];
        }
}
}
 var endresult = 
    "<h1>The Psychic Game</h1>"
    "<h3> Guess what letter I'm thinking of</h3>"
    "<h3>Wins: "+ wins + "</h3>" +
    "<h3>Losses:" + losses + "</h3>" +
    "<h3>Guesses Left:" + guessesLeft + "</h3>" +
    "<h3>Your Guesses so far:" + guessChoices + "</h3>";
    document.querySelector("#game").innerHTML = endresult;

			
		




    
