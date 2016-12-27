$(document).ready(function{
  for(var i = 1; i<=26; i++){
    $(`${i}`).append(`<img src='img/${i}.jpg' alt='letter ${i} of the alphabet' class="letterPic">`)
  }
});
