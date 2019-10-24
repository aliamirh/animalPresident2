$(document).ready(function(){

  var age = parseInt(prompt("How old are you?"));

  if (age < 17){
    $(".noVote").show();
  } else if( age >= 18){
    $(".canVote").show();
  } else {

  }
  $("#presidentChoice").submit(function(event){
  var president1 = document.getElementById("parrot");
  var president2 = document.getElementById("doggo");
    if (president1.checked){
      $("#animal").text("Captain parrot");
      $(".presidentInfo").show();
    }else{
      $("#animal").text("Meme doggo");
      $(".presidentInfo").show();
    }
    event.preventDefault();
  });
  });
