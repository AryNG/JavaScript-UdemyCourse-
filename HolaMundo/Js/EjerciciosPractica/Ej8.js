'use strict'

/* Calculator
1. Ask for the numbers
2. Verify that the numbers are positive
3. Show by: alert, body and console the results.
    - sum
    - rest
    - dividition
   of two numbers given by the user.
*/

//*ask for both numbers
var number1 = parseInt(prompt("first number", 0));
var number2 = parseInt(prompt("second number", 0));

//*verify if they are valid
while (isNaN(number1) || isNaN(number2) || number1 <= 0 || number2 <= 0) {
    var number1 = parseInt(prompt("first number", 0));
    var number2 = parseInt(prompt("second number", 0));
}

//*Process
var sum ="The sum of the numbers is: " + (number1 + number2);
var rest = "The rest of both numbers is: " + (number1 - number2);
var divition = "The divition is: " + (number1/number2);

//*show results
var result = sum +" \n" + rest + "\n"+divition+"\n";

document.write(result);
alert(result);
console.log(result);