// const sayHello = function(name) {
//     return "Hey there, " + name +" !"
// }

// console.log(sayHello('Sammy'));


// Arrow fn
// const sayHello = (name) => {
//     return `hey there ${name}!`
// }

// console.log(sayHello('Sammy'));

const sayHello = (name) => `hey there ${name} !`

console.log(sayHello('Sammy'));

////////////////////////////////////////

const todos = [{
    title: 'Buy bread',
    isDone: true 
}, {
    title: 'Write some codes',
    isDone: true,
}, {
    title: 'Go to gym',
    isDone: false
}]

// const thingsDone = todos.filter((todo) => {
//     return todo.isDone === true
// })

const thingsDone = todos.filter((todo) => todo.isDone === true)

console.log(thingsDone);

