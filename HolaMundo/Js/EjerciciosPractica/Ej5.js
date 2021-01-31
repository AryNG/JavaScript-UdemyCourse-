'use strict'

/* Given a number, show all the divider numbers of that said number */

var number = parseInt(prompt("Give a number, please",1)); 
    //?Why does it need to start as value of 1?

//*Title of what we are doing
document.write("The dividers of "+number+" are: "+"<br/>");

//*Cycle 'for'; it has a counter,a condition/comparation
    //*The Counter will start at 1 insted of 0
for(var i = 1; i <= number; i++ ){

    if(number%i == 0){
        document.write(i + "<br/>");
    }
     //*To know which numbers are divisible  by the number given we need to take the given number and then divide it by the number on the counter(i), if the result of said divition is 0 then that number is a divisor.
    
}