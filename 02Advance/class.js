class User {
    constructor(firstname, lastname, credit) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.credit = credit;
    }

    getFullName() {
        let fullname = `${this.firstname} ${this.lastname} is my full name`;
        return fullname;
    }
    editName(newname) {
        const myname = newname.split(" ")
        this.firstname = myname[0];
        this.lastname = myname[1];
    }
}

// Inheritance
class Teacher extends User {
    constructor(firstname, lastname, credit, subject) {
        super(firstname, lastname, credit)
        this.subject = subject;
    }
    getFullName(){  // method overriding
        let fullname = `${this.firstname} ${this.lastname} is my full name and I teach ${this.subject}`; 
        return fullname;
    }
    favDrink(name){
        console.log(`My fav. drink is ${name}`);
    }
}


const john = new Teacher("John", "Doe", 35, "javascript");
// console.log(john);
console.log(john.getFullName());
john.editName("Johnny Doe");
console.log(john.getFullName());
john.favDrink("coke")
// const jane = new User();
// console.log(jane);