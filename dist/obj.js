"use strict";
const myObj = {
    firstname: 'Maria',
    lastname: 'Müller',
};
myObj.firstname = 'Lotta'; // funktioniert, weil nur Objektreferenz konstant
console.log(myObj);
class Person {
    constructor(firstname, lastname) {
        this.age = 42;
        // hallo klaus
        this.firstname = firstname;
        this.lastname = lastname;
    }
}
class UserObj extends Person {
    // shortcut für definition von properties und zuweisung
    // constructor(public firstname: string; public lastname: string) {}
    getFullname() {
        // return this.firstname + ' ' + this.lastname;
        return `${this.firstname} ${this.lastname}`;
    }
}
const klaus = new UserObj('Klaus', 'Müller');
console.log(klaus.getFullname());
