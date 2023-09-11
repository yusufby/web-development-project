//Write a program that prints the numbers from 1 to 100. but for multiples
// of three print "Fizz" instead of the number and for the multiples of five print "Buzz".
//for numbers which are multiples of both three and five print "FizzBuzz"

var numbers=[];
for (i=1 ; i>numbers ;i++){
   if(i%3===0){console.log("Fizz")}else if(i%5===0){console.log("Buzz")}
   else if(i%5===0 &&i%3===0){console.log("FizzBuzz")} else{"The number is not either multiple of 5 or 3"}
}