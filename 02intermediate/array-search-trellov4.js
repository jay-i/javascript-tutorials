// Trello v4
const myTodos = ['Buy Bread', 'Go to gym', 'Write some codes' ]

// console.log(myTodos.indexOf('Buy Bread'));
// console.log(myTodos[myTodos.indexOf('Buy Bread')]);

const newTodos = [{
    title: 'Buy Bread',
    isDone: false,
}, {
    title: 'Go to gym',
    isDone: true,
   
}, {
    title: 'Write some codes',
    isDone: false,
}]

//  it searches for the array, once it sees it in the array, it stop search
// const index = newTodos.findIndex(function(todo, index){
//     console.log(todo);

//     return todo.title === 'Go to gym'
// })

// console.log(index)

// Method 1

// const findTodo =  function(myTodos, title) {
//     const index = myTodos.findIndex(function(todo, index){
//         return todo.title.toLowerCase() === title.toLowerCase()
//     })
//     return myTodos[index]
// }

// let printMe = findTodo(newTodos, 'Go To Gym')
// console.log(printMe);


// Method 2

const findTodo = function(myTodos, title){
    const titleReturned = myTodos.find(function(todo, index){
        return todo.title.toLowerCase() === title.toLowerCase()
    })
    return titleReturned
}

let printMe = findTodo(newTodos, 'Go To Gym')
console.log(printMe);
