$(document).ready(function(){
  var wordList = ['apple', 'sasquatch', 'fart']; //array to hold random words

  var randWord = ""; //variable to store random word

  function wordSelect(wordList){
    var randNum = Math.floor(Math.random()*wordList.length);
    randWord = wordList[randNum];
  }
  wordSelect(wordList);
  console.log(randWord);

  //a reset function to present all letters as unclicked and select a random word to display blanks for
  function reset(){
    //this loop draws all the letters and sets the class to unclicked so they will display and behave like available letters
    for(var i = 1; i<=26; i++){
      $(`#${i}`).html(`<img src='img/${i}.png' alt='letter ${i} of the alphabet' class="letterPic unclicked">`);
    }

    wordSelect(wordList); //sets the random word

    
  }

});
