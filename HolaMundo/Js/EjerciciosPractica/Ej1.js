'use strict' 
//*This file will be referenced on the index file as script.

/* PROGRAMM THAT WILL SHOW HIGHER, MINOR, EQUAL DEPENDING OF TWO NUMBERS GIVEN BY THE USER*/

//*Using 'prompt' the user can introduce an int number. It will be catch as an string type tho, so it will be parsed as an integer.
var number1 = parseInt(prompt ("introduce un numero",0));
var number2 = parseInt(prompt("introduce otro numero",0));

//*We verify that the numbers are getting read properly 
console.log(number1,number2);

//*Checking that the given numbers are not negative | are >0 | are in fact numbers, using While.
//? NOTE; Does this can be improved using a function that will be later used juts by calling it? 'funcition checkingNumbers -> inside the while...'?
while( number1 <= 0 || number2 <= 0 || isNaN(number1) || isNaN (number2)){
    number1 = parseInt(prompt ("introduce un numero",0));
    number2 = parseInt(prompt("introduce otro numero",0));
}

//*Using 'if' we compare each number. To show the user the result we use an alert, a 'document.write' can be also use.
if( number1 === number2){
    alert("they are the same");
} else if (number1 > number2) {
    alert(number1 +" "+"is bigger than"+" "+ number2);
} else if (number1 < number2){
    alert(number1 +" "+ "is smaller than" + " " + number2);
}else {
    alert("Please just positive numbers"); //*Proofing the code by asking the user specific data. This way we make sure the scheme is not broken.  
}

//?NOTE: Este pedazo de codigo se puede hacer más pequeño, sólo no recuerdo cómo. <-Revisar viejos trabajos en github, ademas se pude concatenar los strings para evitar poner tanto ' + " " + ' 