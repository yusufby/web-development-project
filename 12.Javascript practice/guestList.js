//write a piece of code about guestlist whether name is in the guestlist or not.
var guestList=["ali", "veli", "ayse", "zafer","yakup" ,"lina", "fatma"];

var guest=prompt("What is your name?");

if(guestList.includes(guest)){alert("Welcome " + guest)} else {alert( "Sorry you are not on the list ")};

