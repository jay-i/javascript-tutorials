
const numbers = ['One', 'Two', 'Three', 'Four', 'Five', 'Six']

// numbers[1] = 'SOMETHING'

// console.log(numbers)

// start

numbers.shift() /** removes the first element from an array and return it */
console.log(numbers.shift())
console.log(numbers)

/////////////////////////////////////////

numbers.unshift('SOMETHING') /** Insert new element at the start of an array */
console.log(numbers);

///////////////////////////////////////


// end 
numbers.pop() /** removes the last element from an array and return it */
console.log("The element to be deleted is: " + numbers.pop());

//////////////////////////////////////

numbers.push('Seven') /** Append new element of an array and returns the length of the array */
console.log(numbers);

// middle 
numbers.splice(2, 1, 'SOMETHING')
console.log(numbers);