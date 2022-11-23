## Javascript intermediate to advanced

> ### Expressions vs. Statements (V.Imp)

```
https://www.joshwcomeau.com/javascript/statements-vs-expressions/
```

> ### Functions

#### using function keyword

```js
    function someFunc(parameters) {
        // some code
        // optional return
    } 
```

#### making anonymous functions

```js
let someFunc = function(parameters) {
     // some code
     // optional return
}

// calling this function

someFunc(parameters)

// or you can immediately invoke functions anonymously

// we use the first () to group the function together before calling
// the following function executes immediately
(function () {
    // some code
})() // <- remember this is the function calling syntax
```

#### arrow functions (these are expressions)

```js
const a = (params) => {
    // use this when we need a function body
    // optional return
}

// use the following when you have to return a single thing
const b = (params) => params
```

---

> ### Objects

#### JavaScript Objects

```js
// this is javascript object, similar to a dict or map
{
    key : value
}

// we can additionally also store functions in them
{
    name : john,
    getName1() { return this.name } 
}

// this although weird at first, looks like something from OOP
```

> Object Oriented Programming (OOP)

#### What is OOP

```
// Here's some explanation in Python

https://www.programiz.com/python-programming/object-oriented-programming
```

### What if ...

need a way to create objects dynamically, how do we do that?

```js

class ClassName {
    
    constructor(name) {
        this.name = name;
    }

    getName1() {
        return this.name;
    }

}

// calling

let c = new ClassName("john")

// result
console.log(c);
// returns an object like `{}` which lets you create objects easily with additional features of OOP - read from link given

```

### Alteratives

```js

// classes are actually just functions
// you can create objects with functions too
// those are called prototype functions

function ClassName(name) {
    this.name = name;
    this.getName () { return this.name };
}

// calling

let c = new ClassName("John");

c.getName();

```

```js

// you can also create objects with the built in Object
// given to us by the Javascript runtime/compiler

let y = new Object();

y.name = "john";

y.getName = function getName() { return this.name; }


// how to use this object


y.getName();

```

### More info on JS OOP

```
https://www.freecodecamp.org/news/how-javascript-implements-oop/
```




