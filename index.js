// Q 1.Write a JavaScript for loop that iterates from 0 to 10 and prints only the even numbers.


function evenNumbers(){
    for( var i=0; i<=10; i++){
       if(i%2===0){
        console.log(i);
       }
      
    }
}
evenNumbers();




// Q.2 Write a JavaScript while loop that calculates the factorial of a given number.

// function factorialNumber(){
//     var n=5 , j=1 , fact=1;
//     while(j<=5){
//         fact=fact*j
//         j++
//     }
//     console.log(fact);

// }
// factorialNumber()

// Q.3Create a JavaScript function that takes an array of numbers as input and returns the sum of all the numbers using a for loop.


// var array=[1,2,3,4,5];
// sum=0;
// function SumNumbers(){
//     for(var i=0; i<array.length; i++){
//             sum=array[i]+sum
            
//     }
//     return sum;
// }
// const mynumber=SumNumbers();
// console.log(mynumber);


// Question 4:

// Write a JavaScript program that generates a Fibonacci sequence up to a certain number n, using a while loop.
  
// pending


// Question 5:

// Create a JavaScript function that takes an array of strings as input and returns a new array with only the strings that have a length greater than 5 characters.
// var myname=["Rutuka","Nitu","Savita","Ovi","Poonam"];
//  var emptyarr=[];
// function mynumber(array){
//     for( var i=0; i<array.length; i++){
//        if(array[i].length>5){
//         console.log(array[i]);
//         emptyarr.push(array[i]);
//        }
      
//     }
//     return emptyarr;
// }
// const myvalue=mynumber(myname);
// console.log(myvalue);

// Question 6:

// Write a JavaScript function that takes a number as input and returns true if it is a prime number, otherwise false.
  
// 
// function primeNumber(getnumber){
//     if (getnumber<2){
//         return false
//     }
//     for(var i=2; i<getnumber/2;i++){
//         if(getnumber% i===0){
//             return false
     
//         }
       
//     }
//     return true
// }
// console.log(primeNumber(7));

// Question 7:

// Create a JavaScript program that calculates the sum of all numbers from 1 to 1000 that are divisible by both 3 and 5.
// var sum=0;
// for( var i=1; i<=1000; i++){
//     if(i%3===0 && i%5===0){
//      

//     }
// }
    