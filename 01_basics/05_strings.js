const name = "Altaf";
const repoCount = 20;


// console.log(name + repoCount + " Added");  old ways to concatinate


// console.log(`Hello my is ${name} and my repo count is ${repoCount}`);

const gameName = "bgmi";

// console.log(gameName.length);

// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(3)); //to know what character is on no. 3 index

// console.log(gameName.indexOf("m")); // to know which index no.  is on "m" character

let myString = "Altafansari";

let extractedString = myString.substring(7, 8); // substring(start index(), end index()) 
//                                                 to understand 1st params start from 0 index and
//                                                  and 2nd params start from 1 and 0 index exclude                                                       
                                                

// console.log(extractedString);

// it also use negative numbers 

let negativeindex = myString.substring(-7, 5);

// console.log(negativeindex);

const anotherString = myString.slice(8, 4)

// console.log(anotherString);


const newStringOne = "     ALtaf     Ali ";
// console.log(newStringOne);

// console.log(newStringOne.trim()); //trim() method use for removes whitespace both side


const url = "https://altaf.com/altaf%20ali";

// console.log(url.replace("%20", "-")); // replace method used to replace value to another one.

// console.log(url.includes("altaf")); //includes method used to find same string if same string found then it gives true otherwise false

let nameString = "alialialialialiali";

let split = nameString.split("i");

console.log(split); // Read mdn docs for more information 
//here problem with git so re push try  