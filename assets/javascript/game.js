// this array will be a list of guessable words in the game
var words = [
  "nebula",
  "star",
  "galaxy",
  "big bang",
  "entropy",
  "asteroid",
  "satellite",
  "singularity",
  "absolute zero",
  "gravity",
  "supernova",
  "neutron star",
  "magnetar",
  "quasar",
  "white dwarf",
  "dark matter",
  "string theory",
  "anti matter",
  "kelvin",
  "magnitude",
  "redshift",
  "grand unified theory",
  "energy",
  "inflation",
  "hawking radiation",
  "pulsar",
  "gravitational wave",
  "relativity",
  "black hole",
  "event horizon"
];

// If the player wins, one of these will alert
var winnerAlerts = [
  "Hey, cool. You got it right!",
  "You're a wizard, Harry!",
  "Look at you bein' all smart!",
  "Way to go, Champ!",
  "You're smarter than I thought.",
  "I'm surprised you made it..",
  "Everyone gets lucky once!"
];

// If the player loses, one of these will alert
var loserAlerts = [
  "Man, you suck at this..",
  "It looks like you fell into a black hole. Try again!",
  "Not even going back in time could save you from that loss!",
  "You were so close! Jk, you weren't.",
  "Sheesh, that was embarrassing",
  "You should probably just go home",
  "You died.."
];


var winnerAudioArray = [
  "assets/audio/winner/winner1.mp3",
  "assets/audio/winner/winner2.mp3",
  "assets/audio/winner/winner3.mp3",
  "assets/audio/winner/winner4.mp3",
  "assets/audio/winner/winner5.mp3"
];

var loserAudioArray = [
  "assets/audio/loser/loser1.mp3",
  "assets/audio/loser/loser2.mp3",
  "assets/audio/loser/loser3.mp3",
  "assets/audio/loser/loser4.mp3",
  "assets/audio/loser/loser5.mp3"
];

// Variables
var spaceVocab = [];
var dashes = [];
var alreadyGuessed = [];
var winnerAlertsArray = [];
var loserAlertsArray = [];
var randomWinnerAudioArray = [];
var randomLoserAudioArray = [];
var wins = 0;
var losses = 0;
var guessesRemaining = 10;
var playing = false;

// Variables and ids from index.html
var winsTotal = document.getElementById("wins");
var lossTotal = document.getElementById("losses");
var currentWord = document.getElementById("current-word");
var guessedLetters = document.getElementById("guessed-letters");
var guesses = document.getElementById("guesses");

$(document).ready(function(){

	var tl = new TimelineLite()
	,inter = 30
  ,speed = 1
  ,$text = $('.text');
  function animInfinite(){
    $('.text').each(function(index,val) {
      index = index + 1;
      TweenMax.fromTo(
        $(this), speed, {autoAlpha:0},{autoAlpha:0+(0.01*index),delay:0.1*index});
     });
    TweenMax.to(
      $('.text:nth-child(30)'), speed,{autoAlpha:1.5,delay:3.5}
    );
  }
  $('.typer input').keyup(function() {
    //Stop Everything First
    TweenMax.killAll(false, true, false);
    TweenMax.set($text, {autoAlpha:0});
    $text.text(this.value);
     animInfinite();
  });
  animInfinite();
});

document.onkeyup = function(event) {

  // Starts the game using space bar
  if (event.keyCode == 32 && playing == false) {
  // Adds an audio event listener when space bar is pressed
    document.addEventListener("keydown", function(e) {
  if (e.keyCode == 32) {
    document.getElementById("audio").play();
  }
});



  // Randomly picks an alert if you win
  winnerAlertsArray = winnerAlerts[Math.floor(Math.random() * winnerAlerts.length)];

  // Randomly picks an alert if you lose
  loserAlertsArray = loserAlerts[Math.floor(Math.random() * loserAlerts.length)];

  // Trying to get a random audio file to play based on win or lose
  randomWinnerAudioArray = winnerAudioArray[Math.floor(Math.random() * winnerAudioArray.length)];

  // Trying to get a random audio file to play based on win or lose
  randomLoserAudioArray = loserAudioArray[Math.floor(Math.random() * loserAudioArray.length)];

  // Randomly picks a word from the words array
  spaceVocab = words[Math.floor(Math.random() * words.length)].split("");

    // const letter = event.key.match(/^[a-zA-Z]*$/)[0].toLowerCase();
      // var key = event.key;
      // printToScreen(guessedLetters, key);
      // alreadyGuessed.push(key);
      // console.log(alreadyGuessed);

      // Checks length of words from array and pushes spaces and dashes
      for (var i = 0; i < spaceVocab.length; i++) {
          if (spaceVocab[i] === " ") {
            dashes.push(" ");
          } else {
            dashes.push("-");
            // console.log(dashes);
          }
      }




  currentWord.textContent = dashes.join(" ");
  guesses.textContent = guessesRemaining;
  guessedLetters.textContent = alreadyGuessed;

  // Set playing value equal to true
  playing = true;

}

  // function printToScreen(htmlElement, newValue) {
  //     htmlElement.innerHTML = newValue;
  //     // console.log(newValue)
  // }

  // React to letters entered if game is playing, the letter hasn’t been guessed yet, and the input is a letter
  if (playing == true && alreadyGuessed.indexOf(event.key) == -1 && event.which <= 90 && event.which >= 65) {

  // Add guessed keypress to guessed list
  alreadyGuessed.push(event.key);

    if(spaceVocab.indexOf(event.key) >= 0) {

      // Replaces dashes with correct letters
      for (var i = 0; i < spaceVocab.length; i++) {
        if (event.key == spaceVocab[i]){
          dashes[i] = event.key;
        }
      }

      //Displays letters guessed and guesses remaining
        currentWord.textContent = dashes.join("");
        guessedLetters.textContent = alreadyGuessed.join(" ");
        guesses.textContent = guessesRemaining;
        // console.log(alreadyGuessed);

      // Check to see if player won and plays random audio from Winner array
      if (spaceVocab.join("") == dashes.join("")) {
        var audioWinner = document.getElementById("audio-winner");
        audioWinner.src = (randomWinnerAudioArray);
        audioWinner.play();
        alert(winnerAlertsArray);
        wins++;
        winsTotal.textContent = wins;
        reset();
      }

      } else {
      // Decerements the number of guesses left by one
        guessesRemaining--;
        guesses.textContent = guessesRemaining;
        guessedLetters.textContent = alreadyGuessed.join(" ");

      // If out of guesses, the player losses
      if (guessesRemaining === 0) {
        var audioLoser = document.getElementById("audio-loser");
        audioLoser.src = (randomLoserAudioArray);
        // audioLoser = new Audio([randomLoserAudioArray]);
        audioLoser.play();
        alert(loserAlertsArray);
        losses++;

        currentWord.textContent = spaceVocab.join("");
        lossTotal.textContent = losses;
        reset();
      }
    }
  }
}

// Resets game
function reset() {
  playing = false;
  dashes = [];
  alreadyGuessed = []
  guessesRemaining = 10;
}



// function checkLetters(letters) {
//   var isLetterInWord = false;
// }


// for (var i = 0; i < word.length; i++) {
//     if (word[i] === " ") {
//       dashes.push(" ");
//     } else {
//       dashes.push("-");
//       console.log(dashes);
//     }
// }





// console.log(guessedLetters);
 // .join and also use .split "test".split





// things to do:
 // get guesses remaining to pull from the random word that was chosen
 // get white space to register in variable when random words are chosen
 // get the letter guesses to list out and stay instead of being overwritten
 //




  // if (alreadyGuessed.indexOf(key) !== -1) {
  //   // console.log(alreadyGuessed)
  //   return;
  // }

  // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
  // var html =
  //   "<p>Guesses: " + alreadyGuessed + "</p>" +
  //   "<p>guessesRemaining: " + guessesRemaining + "</p>" +
  //   "<p>wins: " + wins + "</p>" +
  //   "<p>losses: " + losses + "</p>";
  //
  // // Set the inner HTML contents of the # div to our html string
  // document.querySelector("#").innerHTML = html;




  // if (!letter) {
  //   return "";
  // }
