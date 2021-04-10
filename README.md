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

This function allows us to create filters to discriminate data elements

Given an array of ages:

```js
const ages = [33, 44, 22, 64, 39, 95, 35, 75, 46, 94];
```

Lets make a filter for showing only ages that are permited to get retired based on and age of 42

```js
const applyForRetiring = ages.filter(age => age >= 45);
```

## map() function

The map function allows us to create new arrays from a current array.

Lets create a new array with the square of ages

```js
const agesSquare = ages.map(age => Math.sqrt(age));
```

## sort() function

This function permits to create a new array with their elements sorted by some value especification

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