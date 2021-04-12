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

const john = new User("John", "Doe", 35);
// console.log(john);
console.log(john.getFullName());
john.editName("Johnny Doe");
console.log(john.getFullName());

// const jane = new User();
// console.log(jane);