const accountId = 14432;
let accountEmail = "altaf@gogle.com";
var accountPassword = "12345";
accountCity = "Delhi";
let accountState;

// accountId = 8989;  not allowed to change const variables

accountEmail = "rehan2google.com";
accountPassword = "4321";
accountCity = "Mumbai";

console.log(accountId);

/* 
>> All variables changed their values except const without in  block scope.

>> Prefer not to use var because of issues in block scope and
functional scope 
*/

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);

// PRACTISE

//  Variables is like named containers which is used to store and manipulate data.

/* varibles deaclared in 4 ways :-

1)  undeclared 
2)  let 
3) var
4) const 

*/


// e.g.
 
undeclaredVariable = "Anything";   
let myLet = "First";
var myVar = "Second";
const myConst = "Third"

// console.log(undeclaredVariable);
// console.log(myLet);
// console.log(myVar);
// console.log(myConst);

//using console.table to show data in table format

console.log([
    undeclaredVariable,
    myLet,
    myConst,
    myVar
]);


/* let , var , can be changed their values except const without block scope*/

// {} inside this curly braces are in block scope



// let see example 

// const name = "Altaf";
// name = "NewName";        it through a type-error

// now in block scope

{
    const name =  "altaf ali";
    // console.log(name);
}

const name = "Ali";

console.log(name);


// also let provide block scope means const and let provide block scope


{
    let num = 3;
    console.log(num);
}                         //without block scope it throung SyntaxError

let num = 4;
console.log(num);




