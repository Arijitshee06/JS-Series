const accountId = 144553
let accountEmail = "arijitshee@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
// accountId = 2 // not allowed

accountEmail="sunu@google.com"
accountPassword ="121221"
accountCity = "Kolkata"
console.log(accountId);

/*
Perfer not use var
because of issue in block scope and functional scope
*/
console.log(accountEmail);
console.table([accountPassword,accountCity,accountEmail,accountId,accountState])