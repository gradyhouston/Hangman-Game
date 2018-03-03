// this array will be a list of guessable words in the game
var words = [
  // 'nebula',
  // 'star',
  // 'galaxy',
  // 'asteroid',
  // 'satellite',
  'black' + ' ' +  'hole',
  'event' + ' ' + 'horizon'
]

var wins = 0;
var losses = 0;
// var currentWord = 0;
var guessesRemaining = 0; //

// function startGame() {
//   var
// }

var word = words[Math.floor(Math.random() * words.length)]; // the variable that assigns the random word

var dashes = [];
var alreadyGuessed = [];

function printToScreen(htmlElement, newValue) {
    htmlElement.innerHTML = newValue;
    // console.log(newValue)
}

// function checkLetters(letters) {
//   var isLetterInWord = false;
// }


for (var i = 0; i < word.length; i++) {
    if (word[i] === " ") {
      dashes.push(" ");
    } else {
      dashes.push("-");
      console.log(dashes);
    }
}



var wordResult = document.getElementById("current-result");
var guessesDisplay = document.getElementById("previous-guesses");
// console.log(guessesDisplay);
wordResult.innerHTML = dashes.join(" "); // .join and also use .split "test".split



  document.onkeyup = function(event) { //
    const letter = event.key.match(/^[a-zA-Z]*$/)[0].toLowerCase();
      var key = event.key;
      printToScreen(guessesDisplay, key);
      alreadyGuessed.push(key);
      console.log(alreadyGuessed);

// things to do:
 // get guesses remaining to pull from the random word that was chosen
 // get white space to register in variable when random words are chosen
 // get the letter guesses to list out and stay instead of being overwritten
 //




  if (alreadyGuessed.indexOf(key) !== -1) {
    // console.log(alreadyGuessed)
    return;
  }

  // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
  // var html =
  //   "<p>Guesses: " + alreadyGuessed + "</p>" +
  //   "<p>guessesRemaining: " + guessesRemaining + "</p>" +
  //   "<p>wins: " + wins + "</p>" +
  //   "<p>losses: " + losses + "</p>";
  //
  // // Set the inner HTML contents of the #game div to our html string
  // document.querySelector("#game").innerHTML = html;

}

  // if (!letter) {
  //   return '';
  // }
