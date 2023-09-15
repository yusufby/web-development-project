function currentDate(){
var date=new Date();

var year=date.getFullYear();
var month=date.getMonth();
var day=date.getDay();

 console.log(year+"-"+month+"-"+day)
}
currentDate();