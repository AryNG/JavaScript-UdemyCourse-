'use strict'

//Variables//


/* In JavaSCript we can access a variable at any point because they are global, but only when said variable is not specifically defined inside a function or code block. */

//*Example
function showtText(text){
    var insideCode = "text defined inside a function"; //*This message will not show up if its requested after / outside this very function/code block


    console.log(insideCode); //*-we can call this variable inside here.
    console.log(text); 
    console.log(outsideCode); //*Variable declared outside the code, but it will show when called inside this function
}

//*Variables outside the functions/ code blocks belong to a more global 'code'. As long as they are not inside something specific it can be access anytime anywhere

var text = "text defined outside a function, on a more global place...";
var outsideCode = "Another text difined a function";

showtText(text); //*Function with the variable 'text' which's value is difined in a more 'global area'

//*Method/Object.
/*
Method:
    A method is a function applied to an object.
->Variables behave just like an object
*/
