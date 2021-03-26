// console.log(document.title);
// document.title = 'I got changed';

// console.log(document.getElementById('idone'));
// console.log(document.getElementsByClassName('classone'));

////////////////////////////////////////

// const myElement = document.querySelector('p');
// const myElement = document.querySelectorAll('p');
// const myElement = document.querySelectorAll('#idone');
// const myElement = document.querySelectorAll('.classone');
// console.log(myElement[0]);
// console.log(myElement[0]);

//////////////////////////////////////

// const myPElements = document.querySelector('p');
// console.log(myPElements);
// myPElements.textContent = 'I am being changed using JS'

// Looping through entire document
const myPElements = document.querySelectorAll('p');

myPElements.forEach(function(p) {
    // p.textContent = 'I am changed using loop in JS'
    // p.remove() /** Remove all content */
})

//////////////////////////////////

const myNewPara = document.createElement('p')
myNewPara.textContent = 'I was added via JS'

document.querySelector('body').appendChild(myNewPara)

document.querySelector('button').addEventListener('click', (event) => {
    event.target.textContent = 'I was clicked';
})

///////////////////////////////////////

// Track input form
// document.querySelector('#myform').addEventListener('change', (event) => {
//     console.log(event.target.value);
// })

document.querySelector('#myform').addEventListener('input', (event) => {
    console.log(event.target.value);
})

/////////////////////////////////////////

// creating textnode 

var h = document.createElement('h1')
var myValue = document.createTextNode('Hello World!')
h.appendChild(myValue)
document.querySelector('h1').appendChild(h);
