'use strict'

/* A function can be used as many times as necessary. It has inside 'steps', 'instructions', which are executed only when are called. This functions can be write by oneself with the names we want and for any task */

//*Simple function
function myMessage() {
    return "this message"; //?NOTE:the return this is kinda important....meaning, is BIG important.
}

var message = myMessage();
console.log(message);

//*function with parameters
function console(number1, number2) {
    console.log("Sum: " + (number1 + number2));
    console.log("Rest: " + (number1 - number2));
    console.log("Multiplication: " + (number1 * number2));
    console.log("Divition: " + (number1 / number2));
}

function showOnBody(number1, number2) {
    document.write("Sum: " + (number1 + number2) + "<br/>");
    document.write("Rest: " + (number1 - number2) + "<br/>");
    document.write("Multiplication: " + (number1 * number2) + "<br/>");
    document.write("Divition: " + (number1 / number2) + "<br/>");
}

//*function inside a function. Also using a true / false parameter
function calculations(number1, number2, show = false) { //*show is a local parameter set on false by default.
    if (show == false){ //*if it's false then the results will only show on the console
        console(number1, number2);
    }else { //*if the parameter 'show' it's actually true, then the results will show on the body
        showOnBody(number1,number2);
    }
    return true;
}



/* //?NOTES:
IMPORTANT! F*****G 'FUNCTION' MUST BE LOWERCASE FOR SOME --- REASON AND NOT, I REPEAT, NOT UPPERCASE 'Function'...

*/