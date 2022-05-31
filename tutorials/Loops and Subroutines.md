# Loops and Subtoutines

## LOOP

### `while`

- A `while` statement executes its statements as long as a specified condition evaluates to `true`
- If the condition becomes `false`, statement within the loop stops executing and control passes to the statement following the loop.
- The condition test occurs **before** statement in the loop is executed.
- For example
```
let n = 0;
while (n < 3) {
  console.log(n);
  n++;
}

```

### `do...while...`

- The `do...while` statement repeats until a specified condition evaluates to `false`
- Statement is always executed once before the condition is checked
- If condition is `true`, the statement executes again. At the end of every execution, the condition is checked. 
- When the condition is `false`, execution stops, and control passes to the statement following do...while.

```
let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);
```

### `for`

- `for` loop repeats until a specified condition evaluates to `false`.
```
for (let step = 0; step < 5; step++) {
    // Runs 5 times, with values of step 0 through 4.
    console.log('Walking east one step');
}

```


### `for ... in`
- The `for...in` statement iterates a specified variable over all the enumerable **properties** of an object.
```
let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
for (let i in person) {
    console.log(i);
}
// output: firstName \n lastName \n age \n eyeColor
```

### `for ...of`
- Unlike `for...in`, the `for...of` statement iterates over the **value** of the iterable objects.
- For example:

```
const arr = [3, 5, 7];
arr.foo = 'hello';

// for... in: i is the property or the index of the array
for (let i in arr) {
   console.log(i); // logs "0", "1", "2", "foo"
}

// for... of: i is the value at the index or of the property of the array
for (let i of arr) {
   console.log(i); // logs 3, 5, 7
}
```

## Functions

- A function definition consists of the `function` keyword, followed by:
    - The name of the function.
    - A list of parameters to the function, enclosed in parentheses and separated by commas.
    - The statements that define the function, enclosed in curly brackets, {...}.

For example
```
function multiply(a, b) {
    return a * b;
}
console.log(multiply(4, 5));
```

- Functions can be written outside an object, like Python.
- JavaScript supports recursive functions. To give an example, this function recursively calculates the factorial of a given `n` input:

```
function factorial (n) {
    if (n == 0) {
        return 1;
    }
    return n * factorial(n-1);
}

console.log(factorial(1));
```

- JavaScript accepts multiple parameters. They can be of different data types. For example:

```
function add(set, b) {
    set.add (b)
}
let s =  new Set();
add(s, 2);
console.log(s);

//output: {2}
```
- JavaScript doesn't support functions that return multiple values. To work around, we can wrap multiple values into an array or an object and return the array or the object. Use destructuring assignment syntax to unpack values from the array, or properties from objects. For example:

```
function getNames() {
    // get names from the database or API
    let firstName = 'John', lastName  = 'Doe';
  
    return { firstName, lastName };
}

console.log(getNames().firstName);
//output: 
```

## Pass by value
- JavaScript passes by value.

For primitives, the value of the argument, which is the primitive value, is copied into the parameter variable. Changing the value of the parameter variable inside the function would not affect the variable passed in the argument.
```
function test(a) {
    a = 5;

}

const x = 7;
test(x)
console.log (x);
```

- For objects, the value of the argument, which is the reference of the object, is copied into the parameter variable. Therefore, changing the parameter variable inside the function would impact the variable passed in the argument.

```
const a = [3, 2, 1];

function test_1 (a){
    a[0] = 1;
}


test_1(a);
console.log(a);

//output: [1, 2, 1]

```

- When reassinging the parameter to another new object, the parameter refers to a new memory address. The original variable in the argument still points to the original object address. 
```
const b = [3, 2, 1];

function test_2 (a){
    a = [5, 2, 4];
}


test_2(b);
console.log(b);
//output: [3, 1, 1]
```



## References

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

