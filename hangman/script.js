$(document).ready(function(){
  var wordList = ['apple', 'sasquatch', 'fart']; //array to hold random words

  var randWord = ""; //variable to store random word

  function wordSelect(wordList){
    var randNum = Math.floor(Math.random()*wordList.length);
    randWord = wordList[randNum];
  }
  

  //a reset function to present all letters as unclicked and select a random word to display blanks for

  for(var i = 1; i<=26; i++){
    $(`${i}`).append(`<img src='img/${i}.png' alt='letter ${i} of the alphabet' class="letterPic">`);
  }
});
