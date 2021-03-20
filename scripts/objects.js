
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: [
        'music',
        'movies',
        'sports'
    ],
    address: {
        street: '50 maint st',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person);

const { firstName, lastName, address: { city } } = person;

console.log(city);

person.email = 'example@gmail.com';

console.log(person);
