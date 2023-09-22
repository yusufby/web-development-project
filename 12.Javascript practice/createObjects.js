//Object literal syntax
var object={
   name:"Yusuf",
   surname:"Bayram",
   age:23,
   occupation:"primary teacher"
}
console.log(object);
console.log("Name is "+object.name);

//Object constructor
var object2=new Object({name:"Ali"});
console.log(object2);


//Function constructor
function object3(name){
   this.name=name;
   this.surname='bayram';
}
var newObject=new object3("ali");
console.log(newObject);

//Function constructor with prototype:

function Persons(){}
Persons.prototype.name="yusuf sabret";
var object=new Persons();
console.log(object);


//ES6 Class syntax: ES6 introduces class feature to create the objects

class deneme{
constructor (name){
   this.name=name;
   this.surname="bayram";
}
}
var deneme2=new deneme("yusuf");
console.log(deneme2.name);
console.log(deneme2.surname);

//Singleton pattern:
//A Singleton is an object which can only be instantiated one time. 
// Repeated calls to its constructor return the same instance and 
// this way one can ensure that they don't accidentally create multiple instances.
var objectNew=new(function(){
   this.name='ali';
   this.surname='veli';
   this.age=23;
})();
console.log( "singleton example is "+objectNew.name);