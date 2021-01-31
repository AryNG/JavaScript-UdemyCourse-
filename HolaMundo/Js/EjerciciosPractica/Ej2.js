'use strict'
//*This file will be referenced on the index file as script...


/*Using a loop - we will show the addition and avarage of two numbers until the user inputs a negative number wich then the number will be displayed by alerts*/

 var sum = 0 ;
 var i  = 0 ;
 do {

    //*Using alerts we ask the user for two numbers.
    var number = parseInt(prompt("Input several numbers, until a negative number"),0);



    if(isNaN(number)){
        numero = 0;
    } else if (number>=0){  //?see note1 by the end...
        sum += number; //*The numbers sum by itself each iteration until a negative number is given, wich then the cycle is broken.
        i++;
    }


    //*Verifying the sums are getting done correctly
    console.log("sum="+sum);
    console.log("cont="+i);

 } while (number >= 0)

 var avarage = sum/i;

 //* The sum of all the given numbers is displayed with the avarage to the user.
 alert("Total: "+sum);
 alert("Avarage: "+ avarage);




 //? How can I ask the user for any numbers but to show the result the user will only have to click on a button insted of putting a negative number into the cycle doWhile.