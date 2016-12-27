$(document).ready(function(){
  var wordList = ['apple', 'sasquatch', 'fart', 'a lot']; //array to hold random words

  var randWord = ""; //variable to store random word
  //a function to select a random word from the array
  function wordSelect(wordList){
    var randNum = Math.floor(Math.random()*wordList.length);
    randWord = wordList[randNum];
  }
  //a function to assign an integer value to each letter of the word
  function assignLetter(lVal){
    //a switch statement to assign values to lletters
    switch(lVal){
      case 'a': return 1;
      case 'b': return 2;
      case 'c': return 3;
      case 'd': return 4;
      case 'e': return 5;
      case 'f': return 6;
      case 'g': return 7;
      case 'h': return 8;
      case 'i': return 9;
      case 'j': return 10;
      case 'k': return 11;
      case 'l': return 12;
      case 'm': return 13;
      case 'n': return 14;
      case 'o': return 15;
      case 'p': return 16;
      case 'q': return 17;
      case 'r': return 18;
      case 's': return 19;
      case 't': return 20;
      case 'u': return 21;
      case 'v': return 22;
      case 'w': return 23;
      case 'x': return 24;
      case 'y': return 25;
      case 'z': return 26;
      default: return 0;
    }
  }
  //a reset function to present all letters as unclicked and select a random word to display blanks for
  function reset(){
    //this loop draws all the letters and sets the class to unclicked so they will display and behave like available letters
    for(var i = 1; i<=26; i++){
      $(`#${i}`).html(`<img src='img/${i}.png' alt='letter ${i} of the alphabet' class="letterPic unclicked">`);
    }

    wordSelect(wordList); //sets the random word

    //a for loop that writes empty divs to the blanks div to hold letters
    var blankAppend = ``;
    for(var j=0; j<randWord.length; j++){
      var lData = assignLetter(randWord[j]);
      console.log(lData);
      if(lData !== 0){
        blankAppend += `<div class = "blank letter" data-letter='${lData}'></div>`;
      }else blankAppend += `<div class = "letter"><img src="img/0.png" alt="blank space" class="letterPic"></div>`;
    }
    $('#blanks').html(blankAppend);
    console.log(randWord);
  }



  reset();

});
