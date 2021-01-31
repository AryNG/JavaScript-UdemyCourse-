'use strict'

/* TEXT TEMPLATES */
//*We can make a text template inside JavaScript using interpolations -> ${} which are these.

var firstName = prompt("What's your firts name?: "); //?Note; this will set by default as empty, but we can declare it as such by typing ',""');'
var lastName = prompt("What's your last name?: ");

//*Writing of the template; inside using the interpolations some text will be showing that is actually give by the user.
var plantilla = ////Here backticks are used (to put some html syntax and text) -> alt gr + } + space (keys to type them form my keybord) 
` <h2>Welcome ${firstName}${lastName}</h2> `;

document.write(plantilla);
