
// Trello

const myTodos = []

myTodos.push('Buy Bread')
myTodos.push('Write some codes')
myTodos.push('Go to gym')

// callback function - fn without a name
myTodos.forEach(function(todo, index) {
    console.log(`Your task no. ${index + 1} is: ${todo}`);
})
