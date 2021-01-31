'use strict'

//*Methods that process data

//*Methods used to search specific information are; indexOf, lastIndexOf, search; are very similar- Will show only the index where the first letter is storaged, meanwhile MATCH is more completed and interesting.

var text1 = "The match method looks for a word inside a variable / string / array, and returns a json as a result giving the searched word, the group, the index and the input or the writing where said word is found." 

var searchMethod = text1.match("string"); //*anyword inside the text above.
console.log(searchMethod);

/*
This shows the following Json on the console-

Arry(1)
0: "string" <- Searched word.
groups: undefined.
index: 59 <- Using 'indexOf' will only show this.
input:"The match method looks for a word inside a variable / string / array, and returns a json as a result giving the searched word, the group, the index and the input or the writing where said word is found." <-Full text in which the searched word is in.
length: 1

//?Note: this Json will, apparently, only be when is just one word, when is used to search more than one will only appear index and length which is how many time said word was found.

*/


//*METHOD;
//*.includes 
    //Only returns a true/false response in case the word is letter by letter on the searched text. This is also case sensitive, so the word search must be exact.

var searchIncludes = text1.includes("inside");
console.log(searchIncludes); 


//.slice 
    //Slice from the given index to the end of the full text. (example below)

    var text2 = "part one of the text. Part two of the text.";
    var sliced = text2.slice(21); 
    console.log(sliced); //<-This shows 'Part two of the text' because start the slice on the 21th index to the very last letter / character.