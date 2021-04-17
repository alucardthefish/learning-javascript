# JavaScript Crash Learning

Learning from Traversy JS Crash Course on YouTube

## Notes of learning process

* Scripts must be at the end of body element

### Variables

* `var` has a global scope
* `let` and `const` have a block level scope
* When do we use `let` or `const`? - Always use `const` unless you know you're going to reasign the value

### Data types

* String
* Numbers
* Boolean
* null
* undefined
* symbol

### Objects

* Arrays - variables that hold multiple values
* Object - information structured by attributes or fields

### Conditionals

* `==` evaluates expression values are equal but not data type equality
* `===` evaluates expression values and data types are equal
* `&&` evaluates expressions with AND conditional
* `||` evaluates expressions with OR conditional

### Functions

There are two types of functions in Javascript:

1. Classic function
```javascript 
function name(params) {
    ...expresions
}
```
2. Arrow function
```js
const name = (params) => { 
    ...expresions 
}
```

### Object OOP

Object Constructor function with attributes and functions as properties 

```js
function ObjectName(attr...) {
    this.attr1 = ...attr1
    this.attr2 = ...attr2
    ...
    this.attrN = ...attrN

    this.func1 = function() {}
    ...
    this.funcN = function() {}
}
```

Adding functions using prototype as object's methods

```js
ObjectName.prototype.funcName = function() {}
```

Objects using classes

```js
class ClasName {
    constructor(attr...) {
        this.attr1 = ...attr1
        this.attr2 = ...attr2
        ...
        this.attrN = ...attrN
    }

    func1() {}
    ...
    funcN() {}
}
```

### Selectors

* Single element
    * Old way: ```document.getElementById('idName');```
    * Modern way: ```document.querySelector('#idName-or-.className-or-tagName');```
* Multiple elements
    * Old way: ```document.getElementsByClassName('className');```
    * Modern way: ```document.querySelectorAll('.className');```


# High Order Functions and Arrays

## forEach() function

This function allows you to iterate over array objects easily

given an array of companies:

```js
const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1941, end: 2004},
    {name: "Company Three", category: "Auto", start: 1891, end: 2010},
    {name: "Company Four", category: "Technology", start: 1935, end: 2019},
    {name: "Company Five", category: "Auto", start: 1981, end: 2003},
    {name: "Company Six", category: "Finance", start: 1981, end: 2003}
];
```

Iterating over company elements like this:

```js
companies.forEach((company) => {
    console.log(company.name);
});
```

## filter() function

This function allows us to create filters to discriminate data elements. Returns the elements of an array that meet the condition specified in a callback function.

Given an array of ages:

```js
const ages = [33, 44, 22, 64, 39, 95, 35, 75, 46, 94];
```

Lets make a filter for showing only ages that are permited to get retired based on and age of 42

```js
const applyForRetiring = ages.filter(age => age >= 45);
```

## map() function

The map function allows us to create new arrays from a current array. Calls a defined callback function on each element of an array, and returns an array that contains the results.

Lets create a new array with the square of ages

```js
const agesSquare = ages.map(age => Math.sqrt(age));
```

## sort() function

This function Sorts an array in place. This method mutates the array and returns a reference to the same array.

Lets create an array of sorted companies by start year

```js
const sortedCompanies = companies.sort(function(c1, c2) {
    if (c1.start > c2.start) {
        return 1;
    } else {
        return -1;
    }
});
```

one line version:

```js
const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
```

## reduce() function

This function accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function

Lets sum up all the companies years of activity

```js
const totalYears = companies.reduce((total, company) => {
    return total + (company.end - company.start);
}, 0);
```


# Async JS

## Callbacks

Callbacks functions are passed to a function that is not synchronous to be executed when its processing is completed

## Promises

Promise is an object with a callback used to initialize the promise. This callback is passed two arguments: a resolve callback used to resolve the promise with a value or the result of another promise, and a reject callback used to reject the promise with a provided reason or error.

### Promise.all

Creates a Promise that is resolved with an array of results when all of the provided Promises resolve, or rejected when any Promise is rejected.

## Async & Await

This is a fancy way of handling promises. Instead of using then() method of Promise, it can be achieved by the following sintax

```js
async function funcName() {
    await promiseFunction;
}
```

# AJAX

Ajax: short for Asynchronous JavaScript and XML, is a set of web development techniques using many web technologies on the client-side to create asynchronous web applications. With Ajax, web applications can send and retrieve data from a server asynchronously (in the background) without interfering with the display and behaviour of the existing page. By decoupling the data interchange layer from the presentation layer, Ajax allows web pages and, by extension, web applications, to change content dynamically without the need to reload the entire page.[3] In practice, modern implementations commonly utilize JSON instead of XML.

Ajax is not a single technology, but rather a group of technologies. HTML and CSS can be used in combination to mark up and style information. The webpage can then be modified by JavaScript to dynamically display—and allow the user to interact with—the new information. The built-in XMLHttpRequest object, or since 2017 the new fetch function within JavaScript, is commonly used to execute Ajax on webpages, allowing websites to load content onto the screen without refreshing the page. Ajax is not a new technology, or a different language, just existing technologies used in new ways.

## The XMLHttpRequest Object

The XMLHttpRequest object can be used to request data from a web server.

The XMLHttpRequest object is a developers dream, because you can:

* Update a web page without reloading the page
* Request data from a server - after the page has loaded
* Receive data from a server  - after the page has loaded
* Send data to a server - in the background

the readyState Values are:
* 0: request not initialized
* 1: server connection established
* 2: request received
* 3: processing request
* 4: request finished and response is ready