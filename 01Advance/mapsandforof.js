var john = {
    name: 'I am john',
    age: 24,
    isActive: true 
}

var mary = {
    name: 'I am mary',
    age: 23,
    isActive: true 
}

var sam = {
    name: 'I am sam',
    age: 29,
    isActive: false 
}

let users = new Map()

// console.log(typeof users);

users.set('john', john)
users.set('mary', mary)
users.set('sam', sam)

// console.log(users); 
// console.log(users.size); /** property - having 3 entities*/
// console.log(users.get('sam'));

// console.log(users.keys());
// console.log(users.values());

// iterate or loop through it

// for (const key of users.keys()) {
//     console.log(key);
// }

// for (const value of users.values()) {
//     console.log(value);
// }

// for (const value of users.values()) {
//     console.log(value.name);
// }

//////////////////////////////////////

// for (const [key, value] of users.entries()) {
//     console.log(key + ' = ' + value.name);
// }

////////////////////////////////////////

// using forEach - requires a callback fn

users.forEach((value, key) => console.log(key + ' = ' + value.name))

// Array - loop through over it and print out individuals

var arrofArr = [['one', '1'], ['two', '2'], ['three', 3]]

var newMap = new Map(arrofArr)

console.log(newMap);