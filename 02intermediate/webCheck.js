let userEmail = '   abc1234   '
let password = '1234'

// console.log(password.length);
// console.log(userEmail.toLowerCase());
// console.log(userEmail.trim());

let userChecker = function(myString){
    if ((myString.includes(123)) && (myString.length > 6)) {
        return true
    }

    return false
    
}

// console.log(userChecker(userEmail));

let passChecker = function(pass){
    if ((pass.includes(1234)) && (pass.length > 8)) {
        return true
    }

    return false
}

console.log(passChecker(password));