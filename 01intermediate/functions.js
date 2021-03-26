let sayHello = function (name) {
    console.log(`Greeting message for ${name}`);
    console.log(`Hey ${name}`);
}

sayHello('John');

let fullNameMarker = function(firstname, lastname) {
    console.log('Welcome to LCO');
    console.log(`Happy to have you, ${firstname} ${lastname}`);
}

fullNameMarker('John', 'Doe');


let myAdder = function(num1, num2) {
    let added = num1 + num2
    return added
}

// console.log(myAdder(3, 5))
let result = myAdder(3, 5)
console.log(result);

/////////////////////////////////////////////////

let myMultiplier = function(num1, num2) {
    return num1 + num2
}

// Using default parameters

let guestUser = function(name = 'unName', courseCount = 0) {
    return 'Hello ' + name + ' and your course count is: ' + courseCount
}

console.log(guestUser('John', 1));