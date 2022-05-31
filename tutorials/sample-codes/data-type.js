/*
Primitive data types
*/
// Boolean
var isTested = true; 

// Null
var x = null;

// Undefined
var colorsArray = undefined;

// Number
var numInt = 42;
var numFloat = 4.2;

// BigInt
var numBigInt = 2n ** 53n; // A BigInt is created by appending n to the end of an integer or by calling the constructor.


// String
var firstName = 'John';

// Symbol
let symbolStar = Symbol("Star");


/*
Object data types
*/
// Array
const myFruits = ['Apple', 'Banana'];

// Set
const mySet = new Set()
mySet.add(1)           // Set [ 1 ]
mySet.add(5)           // Set [ 1, 5 ]

// Map
const myMap = new Map();
myMap.set('a', 1); // Map {'a': 1}
myMap.set('b', 2); // Map {'a': 1, 'b': 2}
myMap.set('c', 3); // Map {'a': 1, 'b': 2, 'c': 3}
