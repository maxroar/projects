$(document).ready(function(){
  var wordList = ['apple', 'sasquatch', 'trailer park', 'mustard tiger', 'cheeseburger', 'walrus']; //array to hold random words
  var randWord = ""; //variable to store random word
  var letterCorrect = 0; //a variable to track when the user gets all letters
  var winCount = 0;//a variable to store the value for the total letters that must be guessed
  var letterDataArr = [];//an array to hold the letter data for the random word
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
  var hangCount = 0; //a variable to hold the hangman counter
  //a function to draw/redraw the hangman when a letter is missed or the board is reset
  function drawHangman(){
    $('#hangman').html(`<img src='img/hang${hangCount}.png' alt='hangman'>`);
  }
  //a reset function to present all letters as unclicked and select a random word to display blanks for
  function reset(){
    $('#newGame').hide();//hides the new game button
    $('#endText').html('');//clears end game text
    //this loop draws all the letters and sets the class to unclicked so they will display and behave like available letters
    for(var i = 1; i<=26; i++){
      $(`#${i}`).html(`<img src='img/${i}.png' alt='letter ${i} of the alphabet' data-picnum="${i}" class="letterPic unclicked">`);
    }
    wordSelect(wordList); //sets the random word
    //a for loop that writes empty divs to the blanks div to hold letters
    var blankAppend = ``;
    for(var j=0; j<randWord.length; j++){
      var lData = assignLetter(randWord[j]);
      console.log(lData);
      if(lData !== 0){
        blankAppend += `<div class = "blank letter blank${lData}"></div>`;
        winCount++;
        letterDataArr.push(lData);
      }else blankAppend += `<div class = "letter"><img src="img/0.png" alt="blank space" class="letterPic"></div>`;
    }
    $('#blanks').html(blankAppend);
    hangCount = 0;
    drawHangman();
  }

  reset();//sets the inital game
  $('#newGame').on('click', function(){
    reset();
  });//lets the user start a new game after a win or loss
  //a function for if the user wins
  function winner(){
    $('#endText').html(`<h1>W</h1><h1>I</h1><h1>N</h1><h1>N</h1><h1>E</h1><h1>R</h1>`);
    $('#newGame').show();
  }
  //a function for the losers
  function loser(){
    $('#endText').html(`<h1>Y</h1><h1>O</h1><h1>U</h1><h1>&nbsp;</h1><h1>L</h1><h1>O</h1><h1>S</h1><h1>T</h1>`);
    $('#newGame').show();
  }

  //onclick function for letter guessing
  // --- 1. change the state of the letter so it cannot be clicked again
  // --- 2. check the blank spaces to see if the letter is included
  // --- 3. if the letter is in the blanks, add the image to that blank. if not then increment hangcount and update hangman
  // --- 4. when the last letter is replaced or the last hangman is set, display a new game button
  $('.unclicked').on('click', function(){
    var dataNum = $(this).data('picnum');//sets a variable for the guessed letter value
    var correctGuess = 0;//checks each guess in a loop to see if it was right
    console.log(dataNum);
    //loop through letterDataArr to increment win counter
    for(var ii = 0; ii<letterDataArr.length; ii++){
      if(letterDataArr[ii] == dataNum){
        letterCorrect++;
        correctGuess++;
      }
    }
    console.log(letterCorrect);
    if(correctGuess > 0){
      $(`.blank${dataNum}`).html(`<img src='img/${dataNum}.png' alt='letter ${dataNum} of the alphabet' class="letterPic unclicked">`);
      $(`#${dataNum}`).html(`<img src='img/correct.png' class="letterPic" alt="correct">`)
      if(letterCorrect == winCount){
        winner();
      }
    }
    //statement if wrong guess
    else{
      hangCount++;
      drawHangman();
      $(`#${dataNum}`).html(`<img src='img/x.png' class="letterPic" alt="wrong">`);
      if(hangCount == 6){
        loser();
      }
    }
  });

});
