# Objects and Classes

## Object

The `Object` class represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. Objects can be created using the `Object()` constructor or the object initializer / literal syntax.

Nearly all objects in JavaScript are instances of `Object`; a typical object inherits properties and methods from `Object.prototype`, although these properties may be overridden.

Changes to the `Object prototype` object are seen by all objects through prototype chaining, unless the properties and methods subject to those changes are overridden further along the prototype chain. This provides a very powerful although potentially dangerous mechanism to override or extend object behavior.
 

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

class Person {

  name;

  constructor(name) {
    this.name = name;
  }

  introduceSelf() {
    console.log(`Hi! I'm ${this.name}`);
  }

}


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
```


* JavaScript does not support multiple inheritance.

* If a child class has the same method or property name as that of the parent class, it will use the method and property of the child class. 

* Unlike the other programming languages, JavaScript Does not support function Overloading.


## References:

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
