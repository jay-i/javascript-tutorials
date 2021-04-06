localStorage.setItem('hero', 'thor');
// Retrieve value
localStorage.setItem('todo', 'Write some codes');
var myHero = localStorage.getItem('hero');
// console.log(myHero);

// console.log(localstorage.getItem('todo'));

// Update value
localStorage.setItem('todo', 'Take some tea');

// Delete a particular item 
localStorage.removeItem('hero');

// Delete everything from browser
localStorage.clear();
