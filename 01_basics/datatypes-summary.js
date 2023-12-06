// # primitive data-types

// 7 types : String, Number, Boolean, null, undefined, Symbol, bigInt

const score = 100;
const scoreValue = 100.2;

const isLoggedIn = false;
const outsideTemp  = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

const bigNumber = 4564654654121635461532n;


// # Reference (Non- primitive)

// Array, Objects, Functions


const fruits = ["banana", "mango", "apple"]; // object type

const myObj = {
    name: "Altaf",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof fruits); //funtion type




// ************************************************************************

//Stack (Primitive), Heap (Non-Primitive)

//In primitive data types original value remain same after changing its value 
// because after changing a value its give the copy of the value not the original one,


//In Non-primitive data types original value and after changing its give same value 
// because its directly call by it reference

let myyoutubename =  "altafAlidotchannel";

let anothername =  myyoutubename;
anothername= "newentry";

console.log(myyoutubename); //altafalidotchannel
console.log(anothername);  //newentry



let userOne = 
{
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne;
userTwo.email = "newemail@gmail.com"

console.log(userOne.email); //newemail@gmail.com
console.log(userTwo.email); //newemail@gmail.com
