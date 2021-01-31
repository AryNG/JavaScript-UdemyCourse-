'use strict'

/* Show is the number is odd or even following these easy parameters
1.Ask the user for a number using 'prompt'
2.Verify the input is a valid positive number.
*/

//*Initial ask for the number *Note at the very end ->//!
var number = parseInt(prompt("Give me a number, please",0));

//*Verify if the number is valid, check if the number is an actual number, if not, ask the user again and again until a valid positive number is given.

/* //!MY OWN ATTEMPT, It kinda worked but it asked twiced until finally do the if.
do {
    var number = parseInt(prompt("Give me a number, please",0));

    if(isNaN(number)){
        alert("not valid");
    }
} while (number < 0)
*/

//!This code was taken from the course Im following.
while(isNaN(number)){
    var number = parseInt(prompt("Give me a number, please",0));
}


//*Verify if is its odd or even

if (number%2 != 0){
    document.write(number +" it's odd " +"<br/>");
}else{
    document.write(number+" it's even "+"<br/>");
}