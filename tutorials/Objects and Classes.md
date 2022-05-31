# Objects and Classes

All the sample codes can be found at [object-class.js](https://raw.githubusercontent.com/anh-nguyen-98/game/main/tutorials/sample-codes/object-class.js)

## Objects

- JavaScript supports objects and classes. In fact, `Object` is one of JavaScript's data types. 
- `Object` can be created using the `Object()` constructor, the object initializer / literal syntax, or from a user-defined class.

For example,

```javascript
// using Object() constructor
var studentA = new Object();
studentA.name = "Anh";

// using object literal syntax

var studentB = {
  name: "Anh",
  age: 18
}

// using a user-defined class
class Person {

  name;

  constructor(name) {
    this.name = name;
  }

  introduceSelf() {
    console.log(`Hi! I'm ${this.name}`);
  }

}
var studentC = new Person("Anh");
```

- Nearly all objects in JavaScript are prototype-based. They inherit properties and methods from `Object.prototype`. These properties may be overridden.

## Naming conventions

- Names are case-sensitive, lowercase and uppercase are different.
- Start class names with a capital letter, use `PascalCase` for names.
- Use descriptive names, explaining the functionality of the class.

## Standard methods

`hasOwnProperty()`

Returns a boolean indicating whether an object contains the specified property as a direct property of that object and not inherited through the prototype chain.

`isPrototypeOf()`

Returns a boolean indicating whether the object this method is called upon is in the prototype chain of the specified object.

`propertyIsEnumerable()`

Returns a boolean indicating if the internal ECMAScript [[Enumerable]] attribute is set.

`toLocaleString()`

Calls toString().

`toString()`

Returns a string representation of the object.

`valueOf()`

Returns the primitive value of the specified object.


## Inheritance

* To use class inheritance, use the `extends` keyword. For example,

```javascript

class Professor extends Person {

  teaches;

  constructor(name, teaches) {
    super(name);
    this.teaches = teaches;
  }

  introduceSelf() {
    console.log(`My name is ${this.name}, and I will be your ${this.teaches} professor.`);
  }

  grade(paper) {
    const grade = Math.floor(Math.random() * (5 - 1) + 1);
    console.log(grade);
  }

}

var prof = new Professor("Lan", "Math");
prof.grade("190004-PLP");

prof.teaches = "Science";

prof.introduceSelf;
```


* JavaScript does not support multiple inheritance.

* If a child class has the same method or property name as that of the parent class, it will use the method and property of the child class. 

For example

```javascript
studentC.introduceSelf();
prof.instroduceSelf();
```

* Unlike the other programming languages, JavaScript does not support function overloading.


## References:

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
