const student = {
    name: 'John',
    age: 24,
    isActive: true
}

// Convert this object into a string to be stored in localstorage

const studentObjectToString = JSON.stringify(student)

console.log(typeof studentObjectToString);

// store it in localstorage
// localStorage.setItem('student', studentObjectToString);

// convert back to json

const toJSONStudent = JSON.parse(studentObjectToString);

console.log(typeof toJSONStudent);

console.log(toJSONStudent.age);