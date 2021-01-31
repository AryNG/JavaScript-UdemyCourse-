'use strict'
/* REST & SPREAD */


//* REST...meaning the Rest of the parameters that can me sent to the function, if it recives more than the declared ones, REST will alude to them.
function listFriuts(fruit1, fruit2, ...restFruits) { //* the three dots alude to the rest of the list or parameters, 'restFruits' its only the name of the parameter it's self. 
    console.log("Fruit 1: " + fruit1);
    console.log("Fruit 2: " + fruit2);
    console.log("Rest: " + restFruits);
}

/* So, if we input a list of fruits here, and we didnt have '...restFruits' it will only show the first two values, because there's only two parameters to be 'filled'. Using '...restFruits' will take the rest of the values and take/put them on an array */

//*listFriuts("apple","banana","pear","watermelon","orange","strawberry");

//*SPREAD: This can is a way of separating information and manage it better or in a more convenient way
//?.... example.
/*  
//*var fruits = ["apple", "banana"]; 
    ->this will be our 'fruit1' parameter on a array ->  [apple, banana]

//*listFriuts(fruits, "pear", "watermelon", "orange", "strawberry"); 
    ->and this our 'fruit2' parameter, but only the very first value meaning -> fruit2: pear. And then rest will be displayed as another array. 
*/


//*but if we add '...' before 'fruits' on the 'listFruits', it will show the same result as the "REST" part. 
var fruits = ["apple", "banana"];
listFriuts(...fruits, "pear", "watermelon", "orange", "strawberry"); 