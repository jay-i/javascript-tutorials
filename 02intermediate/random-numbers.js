
// Dice
let numOne = 22
let numTwo = 7

result = 22/7

// console.log(22/7);
// console.log(result.toFixed(2)); /** Give 2 decimal point */

// let floatRes = result.toFixed(2)

// console.log(Math.floor(floatRes)); /** floor - approximate */
// console.log(Math.ceil(floatRes)); /** ceil - de-approximate */

// console.log(Math.random() * 5 + 1) /** random - Gives a number btw 0 and 1 */

// Dice throw
let upper = 25
let lower = 20

let myRandom = Math.floor(Math.random() * (upper - lower + 1)) + lower

console.log(myRandom);