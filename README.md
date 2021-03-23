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
