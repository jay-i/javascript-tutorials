
var ul = document.getElementById('list');
var li;



var addButton = document.getElementById('add');
addButton.addEventListener('click', addItem);

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click', removeItem);







function addItem() {
    var input = document.getElementById('input');
    var item = input.value;
    ul = document.getElementById('list');
    var textnode = document.createTextNode(item)

    if (item === '') {
        return false;
        // Add a tag and assign a value of "Enter you todo"
    } else {
        li = document.createElement('li');


        // create checkbox
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        // setAttribute contains only 2 attributes
        checkbox.setAttribute('id', 'check');

        // create label 
        var label = document.createElement('label');
        label.setAttribute('for', 'item') // this is optional

        // add these elements on web page

        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textnode) // putting some textnode inside label
        li.appendChild(label);
        ul.insertBefore(li, ul.childNodes[0]);
        
        setTimeout(() => {
            li.className = 'visual';
        }, 10);

        // clear input after insertion
        input.value = '';
    }


    // console.log('Add button clicked');
}

function removeItem() {
    // console.log('Delete button clicked');
    li = ul.children
    for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0].checked) {
            // remove a child i.e li element of the index
            ul.removeChild(li[index])

        }
        // const element = li[index];
        // console.log(element);
    }
    // using foreach to loop through
    // console.log(li);
}