

function life(age){ 

var normalLife=90;

var year=normalLife-age;

var month=(normalLife*12)-(age*12);

var week=(normalLife*52)-(age*52);

var day=(normalLife*365)-(age*365);


console.log("You have " + year +" years " + month + " months "  + week+ " weeks " + day + " days to live" )
}


life(5);