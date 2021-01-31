'use strict'
//!This is a 'experiment' using functions and data provided by a 'user'. It'll ask two numbers and show the results 

//*ask the user for the two numbers
var number1 = parseInt(prompt("give me a number",0));
var number2 = parseInt(prompt("give me another number",0));
console.log(number1,number2); //showed fine

//*Making our function
function calculations(number1,number2){//word 'function must be fisrt letter lowercase
    //*using console.log to show results for this experiment only, there are better ways to show them.
    
    //!caught error, why?, cheking
    console.log("alone numbers: "+number1,number2); //!result: undifined

    //*it result on an undifined answer.
    console.log("Sum: " + (number1+number2));
    console.log("Rest: " +(number1-number2));
    console.log("Multiplication: " +(number1*number2));
    console.log("Divition: " + (number1/number2));
}

calculations();