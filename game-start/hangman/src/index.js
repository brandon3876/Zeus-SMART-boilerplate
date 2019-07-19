const allLetters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

$(document).ready(function() {
  //////////////////////////////
  // Setup the game
  /////////////////////////////
  let secretsList = ["cat","car","van","impromptu","free","guess"]; // <------------ enter more words here
  // Choose a secret word randomly from secretsList
  let secretword = secretsList[Math.floor(Math.random() * secretsList.length)];

   // You can only guess wrong 6 times (head, body, left arm, right arm, left leg, rigth leg)
  let maxWrongGuesses = 6;
  let wrongGuesses = 0; // The number of times you have guessed wrong
  let correctGuesses = 0; // The number of letters you found correctly
  let guesses = []; // All the guesses you have made

  let $wrongGuesses = $("#wrong-guesses");
 let $fire = $("#fire")
   for (let i = 0; i < secretword.length; i++) {
    $("#word-spaces").append(`<div id="word-space-${i}" class="word-space"></div>`);
  }

  //////////////////////////////
  // Check a guess
  /////////////////////////////
  function handleGuess() { 
let value=$fire.val() 
if (value.length === 0) {
     
  return true;
}
 if (isOkGuess(value)&&secretword.includes(value)){
   let position=[]
   let positionindex=0
while(positionindex>=0&&positionindex<secretword.length){console.log(positionindex)
 let currentposition=secretword.indexOf(value,positionindex+1)
 if(currentposition!==-1){position.push (currentposition)}
 positionindex=currentposition
}position.forEach((pause)=>{
  let space=$(`#word-space-${pause}`) 
  space.text(value)
  correctGuesses +=1


})
 
} else{
  wrongGuesses +=1
  if(wrongGuesses>maxWrongGuesses){alert("Gosh darnit Oswen you're wrong")}
}
if(correctGuesses>secretword.length){alert("You got a Victory Royale")}
$fire.val("")} 
$fire.keydown(handleGuess)
  //////////////////////////////
  // Make sure the guess is a single letter
  // '' is wrong
  // '6' is wrong
  // 'ga' is wrong
  // 'b' is correct
  /////////////////////////////
  function isOkGuess(guess) {
    if (guess.length === 0) {
     
      return false;
    }
    if (!isLetter(guess)) {
      alert('That is not a letter!');
      return false;
    }
    if (guesses.indexOf(guess) >= 0) {
      alert("You already guessed that!");
      return false;
    }
    return true;
  }

   //////////////////////////////
  // Check that guess is a letter
  /////////////////////////////
  function isLetter(guess) {
    return allLetters.includes(guess);
  }
});
