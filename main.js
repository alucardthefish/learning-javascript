console.log('Hello World');
// console.error('This is an error');
// console.warn('This is a warning');

//Selectors

// Single element
console.log(document.getElementById('my-form'));
console.log(document.querySelector('h1'));

// Multiple elements
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('li'));

//Iterating over elements
const items = document.querySelectorAll('.item');

items.forEach((item) => console.log(item));