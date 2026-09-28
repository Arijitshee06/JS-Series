// Two categorization of data
// 1- primative
// 2- non-primative
// how data store and how data access thats make difference of data for categorization
////////////////////// premative//////////////////////
// 7 types : String, Number , Boolean , null ,undefined,Symbol,BigInt



const score = 100 
const scoreValue = 100.3

const isLoggedIn = false 
const outsideTemp = null
let userEmail = undefined
let userPassword;

const id = Symbol('123');
const anotherId = Symbol('123');
 console.log( id === anotherId)
// const bigNumber = 0987654321134567890n


// JavaScript is dynamically typed.
// JavaScript → Dynamically typed
// Java → Statically typed
// C++ → Statically typed
// C → Statically typed

// Python → Dynamically typed

// Reference(Non Primative)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga", "batman"];

let myObj = {
    name: "arijit",
    age: 20,
}
 const myFunction = function() {
    console.log("Hello World");
 }

 console.log(typeof heros);
 console.log(typeof myObj);
 console.log(typeof myFunction);



 ////********************************************************** */
//Stack (Primative), Heap (Non-Primative) 

/////////////////Stack/////////////////
//What is Stack => Any Value change from any variable here not change orginal value from memory
let myOriginalname ="Arijit Shee"

let anothername = myOriginalname
anothername = "Arii"

console.log(myOriginalname);
console.log(anothername);

////////////////Heap//////////////////
// here value change from orginal memory
let userOne = {
    email: "arijit@google.com",
    upi: "a.shee@ybl"
}
let userTwo = userOne

userTwo.email = "shee@gmail.com"   //when any value called from any function that using 'dot'

console.log(userOne.email);
console.log(userTwo.email);

