
var prompt = require('prompt-sync')();

var rock = 1;
var paper = 2;
var scisoors = 3;

console.log('Rock:1'); 
console.log('Paper:2');
console.log('Scissor:3');
var n = prompt('Enter a number between 1 and 3:');
var t = Math.floor(Math.random() * 3) + 1 ;
  
  console.log("\n" + "Your value:" + n);
  console.log("Computer value:" + t + "\n");

 if (n==t) {
    console.log('Draw, try again...');   
  } else if (n==1 && t==2) {
    console.log('You selected Rock and Computer selected Paper: Computer won!');   
  }   else if (n==2 && t==1) {
    console.log('You selected Paper and Computer selected Rock: You won!');   
  } else if (n==1 && t==3) {
    console.log('You selected Rock and Computer selected Scissor: You won!');   
  }   else if (n==3 && t==1) {
    console.log('You selected Scissor and Computer selected Rock: Computer won!');   
  } else if (n==2 && t==3) {
    console.log('You selected Paper and Computer selected Scissor: Computer won!');   
  }   else if (n==3 && t==2) {
    console.log('You selected Scissor and Computer selected Paper: You won!');   
  } else {
      console.log ('something is not right!');
  }



 