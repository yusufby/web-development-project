function getRandom(){
   var RandomNumber1 = Math.floor(Math.random() * 6) + 1;
   var RandomNumber2 = Math.floor(Math.random() * 6) + 1;
 
   document.getElementById("diceImage1").innerHTML = '<img src="dice' + RandomNumber1 + '.png">';
   document.getElementById("diceImage2").innerHTML = '<img src="dice' + RandomNumber2 + '.png">';
}