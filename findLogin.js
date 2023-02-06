const logins = ['abc', 'def', 'klm', 1267];

function findLogin(login) {
   //return logins.find(loginToFind => loginToFind === login)
    
   return logins.includes(login)? true : false
}

console.log(findLogin('abc'))