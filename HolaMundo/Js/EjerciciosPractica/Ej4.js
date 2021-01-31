'use strict'

/* Show odds and evens numbers from a list, the user will give a start and end number.*/

//*Ask for a start and end number for the list
var startNumber = parseInt(prompt("First Number",0));
var endNumber = parseInt(prompt("Last Number",0));

//*Just as a practice thing I used document.write here.
document.write("<h2>From "+startNumber+" to "+endNumber+" This are the odds and evens</h2>");


//*Cycle in which  we put the numbers from start to end, using While
while (startNumber < endNumber){
    startNumber++; //?nota tonta para mi; el startnumber se incrementara solo hasta que sea mayor que el endnumber terminando el bucle.

    if(startNumber%2 != 0){
        document.write(startNumber + " it's odd"+"<br/>");
    }else {
        document.write(startNumber + " it's even"+"<br/>");
    }
}
