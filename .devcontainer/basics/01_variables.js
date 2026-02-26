const accountId = 123455
let accountMail = "tk@gmail.com"
//  to comment
var accountPassword = "23452"
accountCity = "delhi"
let accountState

/*
prefer not to use var
because of issue in block scope and function scope
*/

console.log(accountId);
accountMail = "tk2@gmail.com"
accountPassword = "21234"
accountCity = "noida"


console.table([accountId, accountMail, accountPassword, accountCity, accountState])
 