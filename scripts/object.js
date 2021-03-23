
// Constructor function

function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);

    this.getBirthYear = () => {
        return this.dob.getFullYear();
    };
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

class Person2 {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

}

// Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person2('Mary', 'Smith', '3-6-1970');

let objHtml = `<h4>Object Person</h4>`;
objHtml += `<pre>Person1(
    first name: ${person1.firstName}, 
    last name: ${person1.lastName},
    birth year: ${person1.getBirthYear()},
    date of birth: ${person1.dob},
    full name: ${person1.getFullName()}
    )</pre>`;

objHtml += `<h4>Object Person2</h4>`;
objHtml += `<pre>Person2(
    first name: ${person2.firstName}, 
    last name: ${person2.lastName},
    birth year: ${person2.getBirthYear()},
    date of birth: ${person2.dob},
    full name: ${person2.getFullName()}
    )</pre>`;

document.getElementById('object').innerHTML = objHtml;