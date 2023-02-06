/*function changeRegister(string) {
   return string.split("").map((letter) => {
       return letter === letter.toUpperCase()
           ? letter.toLowerCase()
           : letter.toUpperCase();
    }).join('');
}

console.log(changeRegister('JavaScript'));*/

function stringToSlug(string) {
    return string.toLowerCase().split(" ").join('-');
}

console.log(stringToSlug('Where to start'))