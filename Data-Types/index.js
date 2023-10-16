var name = "Angela";

var dogName = "Jake";

var age = 14;

//
var a = 12;
var b = 3;
var total = a / b; 
console.log(total); //4
//

//Boolean examples
var proceed = true;
//console.log(proceed)

//
var proceed = true;
var i = 0;
while(proceed) {
    i++;
    if(i == 3) {
        proceed = false;
    }
}
console.log(i);

//Object

var grannySmith = {
    colour: "green", 
    originLocation: "australia", 
    originDate: 1868,
}
console.log(grannySmith);


var person = {
    eyeColour: "brown",
    hairColour: "red",
    age: 30,
}
console.log(person.hairColour); //this console logs outs the hair colour from the object

//Functions
var x = myFunction(1,3);
function myFunction(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
};
console.log(x); //3

//No value - Undefined
var summer;
console.log(summer); //undefined

//No value - Empty
var bcit = "";
console.log(bcit); // (nothing)