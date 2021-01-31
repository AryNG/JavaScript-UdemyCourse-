'use strict'

/*Give the user a list of numbers that are between a start number and an end number like SN-1 EN-9 then; 2..8.  */ 

//*Ask for the two numbers
var startNumber = parseInt(prompt("First number",0));
var endtNumber = parseInt(prompt("Last number",0));

//*Document.write adds text inside the body page. Syntax from html is used. 
document.write("<h2>From "+startNumber+" to "+endtNumber+"</h2>"); //*Concatenated html syntaxt

//*for
for(var i = startNumber; i <= endtNumber; i++){
    document.write(i+", ") 
    /*It will show here the numbers inside the counter on the body of the webpage as a list and with breaks after each number if ' "<br/>" 'is used intead of only using ", " wich makes it like a long paragraph. */
}
