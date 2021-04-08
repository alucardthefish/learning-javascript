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
``` 
function name(params) {
    ...expresions
}
```
2. Arrow function
```
const name = (params) => { 
    ...expresions 
}
```

### Object OOP

Object Constructor function with attributes and functions as properties 

```
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

```
ObjectName.prototype.funcName = function() {}
```

Objects using classes

```
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

```
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

```
companies.forEach((company) => {
    console.log(company.name);
});
```

## filter() function

This function allows us to create filters to discriminate data elements

Given an array of ages:

```
const ages = [33, 44, 22, 64, 39, 95, 35, 75, 46, 94];
```

Lets make a filter for showing only ages that are permited to get retired based on and age of 42

```
const applyForRetiring = ages.filter(age => age >= 45);
```

