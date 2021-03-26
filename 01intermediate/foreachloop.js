// Trello

const days = ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat']

console.log(days[0]);


// let sayHello = function (name) {
//     console.log(`Greeting message for ${name}`);
//     console.log(`Hey ${name}`);
// }

days.forEach( function (day, index) {
    console.log(`starts with ${index + 1} -- ${day}`);
  
});