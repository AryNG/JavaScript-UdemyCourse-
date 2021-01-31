'use strict'

/* Anonymous functions & Callbacks */

//*Anonymous functions
/* This functions has no name, and the instructions within work just as fine as a normal function */

var movie = function (name) {
    return "This movie is called: " + name;
}


//*Callbacks
/* Basically callbacks are functions that get executed inside one another, besides is a 'anonymous function'*/

function operations(number1, number2, result, sumTimesTwo) {
    var sum = number1 + number2;

    //*this two will be later use but no explicity
    result(sum); //*this function is actually the very first 'function data.
    sumTimesTwo(sum); //*this will take the result of the firts sum and later on another function will be multiplied by two. Is the second 'Funciton data.
    return sum;
}

//callback
operations(10, 5, function (data) { //*This is the first anonymous function. We can change data for another fiting word.
    console.log("The sum of both numbers is: " + data); //?data really is the result of 10+5= 15<-data 
}, //*inside we have the second anonymous function executing
    function (data) { //?so we have  data = 15 
        console.log("The sum of both numbers times two is: " + (data * 2)); //?date = 15 * 2, eq 30. 
    }
)

//*Arrow; Make Callback 'functions' much more clean and clear. 

 ////En este caso en el callback quitamos lo que son las 'funciones' y directamente señalamos que dato será parte de una funcion. En caso de que solo se necesite un parametro no se usa parentesis pero sí si es más de uno. 
 
 //?In this case (below) we take out the callback and substitute them with arrows. We point which data/number will be part of a function. In case that we only need one parameter we will not use any parenthesis, but if we need more than one parameter we will use the parenthesis as normal.

/* operations(10, 5, data => { 
    console.log("The sum of both numbers is: " + data);
}, //inside we have the second anonymous function executing
    data => { // so we have  data = 15
        console.log("The sum of both numbers times two is: "+(data * 2));
    }
) */