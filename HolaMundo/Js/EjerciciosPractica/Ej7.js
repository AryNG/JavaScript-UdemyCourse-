'use strict'

/*Show a complete multiplication table of the number given by the user */

//*ask for the number
var number = parseInt(prompt("What table you need?",1));
var result =0;
//*Process 
for(var i = 1; i <= 10; i++){
     result = number*i;
     /* this was to verify it was correct step by step
    console.log("cont "+i);
    console.log("number "+result);
    */
   document.write(number+" x "+i+" = " + result + "<br/>");
}

//*All tables - answer taken from the udemy course im taking
for(var c = 1; c <= 10; c++){
    document.write("<h3>Table "+c+"</h3>");
    for(var b = 1; b <=10; b++){
        document.write(c+" x "+b+" = "+(c*b)+"<br/>");
    }
}
