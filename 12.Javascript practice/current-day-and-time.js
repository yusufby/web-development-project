function today(){
var day=new Date();
var year=String(day.getFullYear()).padStart(2,"0");
var month=String(day.getMonth()).padStart(2,"0");
var dayGun=String(day.getDay()).padStart(2,"0");
return console.log("date is " + year+"-"+month+ "-"+dayGun);


}

today();
function time(){
   var time=new Date();
   var hour=String(time.getHours()).padStart(2,"0");
   var minutes=String(time.getMinutes()).padStart(2,"0");
   var second=String(time.getSeconds()).padStart(2,"0");
   return console.log("The current time is " + hour +":"+ minutes +":" + second);
   
   }
   time();

   var day=new Date();
   var day=day.getDay();
   var dayList=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
   var gun=dayList[day];
   console.log("Bugun "+ gun +"." )