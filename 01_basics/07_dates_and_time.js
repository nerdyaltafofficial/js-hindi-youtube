// Dates

let myDate = new Date();

// console.log(myDate.getDate()); // get date = 7;
// console.log(myDate.toDateString()); // Thu Dec 07 2023
// console.log(myDate.toISOString()); //2023-12-07T07:05:03.299Z
// console.log(myDate.toJSON());      // ,, ,, ,, ,, ,, ,, 
// console.log(myDate.toLocaleDateString()); // 12/7/2023
// console.log(myDate.toLocaleString());     // 12/7/2023, 7:08:19 AM, with time
// console.log(myDate.getMonth());  //month = 11;
 
// let myCreatedDate = new Date(2023, 0, 23);  //(mm-dd-yy) because put comma(,)  its reads like an array
// let myCreatedDate = new Date(2023, 0, 23, 5, 3); //(mm-dd-yy, 5:03:00 AM)
// let myCreatedDate = new Date("2023-01-14");   // (mm-dd-yy) this another method but do not treat like an array
let myCreatedDate = new Date("01-14-2023");     //(mm-dd-yy)

// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now();

// let start = Date.now();

// let end = Date.now();

// let elapsed = end - start;

// if(elapsed > 5000 ){
//     console.log("process took more than 5 second");
// }
// else{
//     console.log("process took less than 5 Second");
// }

// console.log(Math.floor(myTimeStamp/1000));

let newDate = new Date();

let weekName = newDate.toLocaleString("default", {
    weekday: "long",
  
})

console.log(weekName);