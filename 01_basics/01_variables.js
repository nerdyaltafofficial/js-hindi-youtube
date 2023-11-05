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

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);