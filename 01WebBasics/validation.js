function myValidation() {
    let myValue = document.getElementById('myform').value;

    // check if the number is btw 1 & 20 and if it's a number of not

    if (isNaN(myValue) || myValue < 1 || myValue > 20) {
        console.log('Not a valid input');

    } else {
        console.log('This input is ok');
    }
}

//////////////////////////////////////////////

// form validation

document.querySelector('.myform').addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event.target.username.value);
    console.log(event.target.realname.value);
    event.target.username.value = '';
    event.target.realname.value = '';
})