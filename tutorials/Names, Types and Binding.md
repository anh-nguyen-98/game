# Names, Types and Binding

All the coding examples for this file can be found at [data-type.js](https://raw.githubusercontent.com/anh-nguyen-98/game/main/tutorials/sample-codes/data-type.js).


## [Reserved key words](#reserved-key-words)

JavaScript has 39 reserved key words as of ECMA 2015.

| Keyword | Description |
|---------|-------------|
|`await`|The `await` operator is used to wait for a Promise. It can only be used inside an `async` function within regular JavaScript code; however it can be used on its own with JavaScript modules.|
|`break`|The `break` statement terminates the current loop, switch, or label statement and transfers program control to the statement following the terminated statement.|
|`case`| Refer to `switch` keyword.|
|`catch`| The `try...catch` statement marks a block of statements to try and specifies a response should an exception be thrown.|
|`class`| The `class` declaration creates a new class with a given name using prototype-based inheritance.|
|`const`| Constants are block-scoped, much like variables declared using the `let` keyword. The value of a constant can't be changed through reassignment (i.e. by using the assignment operator), and it can't be redeclared (i.e. through a variable declaration). However, if a constant is an object or array its properties or items can be updated or removed.|
|`continue`|The `continue` statement terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration.|
|`debugger`|The `debugger` statement invokes any available debugging functionality, such as setting a breakpoint. If no debugging functionality is available, this statement has no effect.|
|`default`| A `default` clause used in `switch case` block (refer to `switch` key word for more details); if provided, this clause is executed if the value of expression doesn't match any of the case clauses.|
|`delete`|The `delete` operator removes a property from an object; if no more references to the same property are held, it is eventually released automatically.|
|`do`|The `do...while` statement creates a loop that executes a specified statement until the test condition evaluates to false. The condition is evaluated after executing the statement, resulting in the specified statement executing at least once.|
|`else`|The `if` statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement can be executed. Multiple `if...else` statements can be nested to create an `else if` clause.|
|`enum`\*|The `enum` keyword declares an enumerated type.|
|`export`|The `export` statement is used when creating JavaScript modules to export live bindings to functions, objects, or primitive values from the module so they can be used by other programs with the `import` statement. The value of an imported binding is subject to change in the module that exports it. When a module updates the value of a binding that it exports, the update will be visible in its imported value.|
|`extends`| Declaration of a subclass inheriting another class (the parent/ extended class).|
|`finally`| The statements are used in `try..catch` block, executed after the try statement completes. These statements execute regardless of whether an exception was thrown or caught.
|`for`|The for statement creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to be executed in the loop.|
|`function`|The `function` declaration (function statement) defines a function with the specified parameters.|
|`if`| The if statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement can be executed. Multiple `if...else` statements can be nested to create an `else if` clause.|
|`import`| The static `import` statement is used to import read only live bindings which are exported by another module.|
|`implements`\*| The implements keyword is used to implement an interface.|
|`in`| The `in` operator returns `true` if the specified property is in the specified object or its prototype chain.|
|`instanceof`| The `instanceof` operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object. The return value is a boolean value.|
|`interface`\*|The `interface` keyword is used to declare a special type of class that only contains abstract methods.|
|`let`|The `let` statement declares a block-scoped local variable, optionally initializing it to a value.|
|`new`|The `new` operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.
|`package`\*| A `package` is a directory with one or more `module`s inside of it and a `package.json` file wich has metadata about the package.|
|`private`\*|The `private` key word is an access modifier for attributes, methods and constructors, making them visible only inside of the function or module.|
|`protected`\*|The `protected` key word is an access modifier used for attributes, methods and constructors, making them visible in the same package and subclasses.|
|`public`\*| The `public` key word is an access modifier for attributes, methods and constructors, making them visible outside the function or module.|
|`return`|The `return` statement ends function execution and specifies a value to be returned to the function caller.|
|`static`\*|The `static` keyword defines a `static` method for a class.|
|`super`|The `super` keyword is used to access and call functions on an object's parent.|
|`switch`| The `switch` statement evaluates an expression, matching the expression's value to a `case` clause, and executes statements associated with that `case`, as well as statements in `case`s that follow the matching `case`.|
|`this`|A property of an execution context (global, function or eval) that, in non–strict mode, is always a reference to an object and in strict mode can be any value.|
|`throw`|The `throw` statement throws a user-defined exception. Execution of the current function will stop (the statements after `throw` won't be executed), and control will be passed to the first `catch` block in the call stack.|
|`try`|The `try...catch` statement marks a block of statements to try and specifies a response should an exception be thrown.|
|`typeof`|The `typeof` operator returns a string indicating the type of the unevaluated operand.|
|`var`|The `var` statement declares a function-scoped or globally-scoped variable, optionally initializing it to a value.|
|`void`|The `void` operator evaluates the given expression and then returns `undefined`.|
|`while`|The `while` statement creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.|
|`with`|The `with` statement extends the scope chain for a statement.|
|`yield`|The `yield` keyword is used to pause and resume a generator function.|

 *\* They are reserved as future keywords by the ECMAScript specification. They have no special functionality at present, but they might at some future time, so they cannot be used as identifiers.*

## [Naming requirements for variables](#naming-requirements-for-variables)

- Identifiers use only ASCII letters and digits, and, in a small number of cases noted below, underscores (`_`) and very rarely (when required by frameworks like Angular) dollar signs (`$`). All names start with a letter.
- Package names are all lowerCamelCase.
- Class, interface, record, and typedef names are written in UpperCamelCase. Type names are typically nouns or noun phrases.
- Method names are written in lowerCamelCase. Method names are typically verbs or verb phrases.
- Enum names are written in UpperCamelCase, similar to classes, and should generally be singular nouns. Individual items within the enum are named in CONSTANT_CASE.
- Constant names use CONSTANT_CASE: all uppercase letters, with words separated by underscores.
- Local variable names are written in lowerCamelCase, except for module-local (top-level) constants, as described above. Constants in function scopes are still named in lowerCamelCase
- Parameter names are written in lowerCamelCase. When required by a third-party framework, parameter names may begin with a `$`.

Please refer to [data-type.js](https://github.com/anh-nguyen-98/introduction-to-javascript/blob/main/data-type.js).

These naming conventions are enforced by standards in the community.

## [Typing](#typing)

- JavaScript is dynamically typed.

For example,

```javascript
let foo = 42;    // foo is now a number
foo     = 'bar'; // foo is now a string
foo     = true;  // foo is now a boolean
```

- JavaScript is weakly typed.
For example,

```javascript
var total = 6.51;
var message = "Your total is $";
var deliver = message + total + ".";
console.log(deliver) // output: "Your total is $6.51."

```

In this example, `float` or `int` data types are implicitly converted to `String` in string concatenation. 

- JavaScript is both implicitly typed and explicitly typed depending on the values.

## [Mutability](#mutability)

- All JavaScript primitive types define immutable values. Primitive types include:
    * Boolean
    * Null
    * Undefined
    * Number
    * BigInt
    * String
    * Symbol

For example,
```javascript
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
```

- Objects define mutable values.
    * Date
    * Array
    * Set
    * Map

For example,

```javascript
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
```

## [Operators](#operators)

### [Assignment operators](#assignment-operators)

|Name|Shorthand operator|Meaning|
----|----|---|
|Assignment|`x = f()`|`x = f()`|
|Addition assignment|`x += f()`|`x = x + f()`|
|Subtraction assignment|`x -= f()`|`x = x - f()`|
|Multiplication assignment|`x *= f()`|`x = x * f()`|
|Division assignment|`x /= f()`|`x = x / f()`|
|Remainder assignment|`x %= f()`|`x = x % f()`|
|Exponentiation assignment|`x **= f()`|`x = x ** f()`|
|Left shift assignment|`x <<= f()`|`x = x << f()`|
|Right shift assignment|`x >>= f()`|`x = x >> f()`|
|Unsigned right shift assignment|`x >>>= f()`|`x = x >>> f()`|
|Bitwise AND assignment|`x &= f()`|`x = x & f()`|
|Bitwise XOR assignment|`x ^= f()`|`x = x ^ f()`|
|Bitwise OR assignment|`x \|= f()`|`x = x \| f()`|
|Logical AND assignment|`x &&= f()`|`x && (x = f())`|
|Logical OR assignment|`x \|\|= f()`|`x \|\| (x = f())`|
|Logical nullish assignment|`x ??= f()`|`x ?? (x = f())`|


### [Comparison operators](#comparison-operators)
|Operator|Description|Examples returning true|
|---|---|----|
|Equal (`==`)|	Returns true if the operands are equal.|`3 == var1`, `"3" == var1`, `3 == '3'`|
|Not equal (`!=`)|	Returns true if the operands are not equal.|	var1 != 4, `var2 != "3"`|
|Strict equal `(`===`)|	Returns true if the operands are equal and of the same type.|`3 === var1`|
|Strict not equal (`!==`)|Returns true if the operands are of the same type but not equal, or are of different type.|	`var1 !== "3"`, `3 !== '3'`|
|Greater than (`>`)|Returns true if the left operand is greater than the right operand.|`var2 > var1`, `"12" > 2`|
|Greater than or equal (`>=`)|Returns true if the left operand is greater than or equal to the right operand.|`var2 >= var1`, `var1 >= 3`|
|Less than (`<`)|	Returns true if the left operand is less than the right operand.|	`var1 < var2`,`"2" < 12`|
|Less than or equal (`<=`)|Returns true if the left operand is less than or equal to the right operand.|`var1 <= var2`, `var2 <= 5`|

### [Arithmetic operators](#arithmetic-operators)
- The standard arithmetic operators are addition (`+`), subtraction (`-`), multiplication (`*`), and division (`/`).
- In addition, JavaScript provides other arithmetic operators remainder (`%`), increment (`++`), decrement (`--`).
- JavaScript supports float devision.

For example,

```javascript
console.log (1/2) //output: 0.5
console.log (1.0/2) //output: 0.5
```
- Division by zero produces Infinity.

### [Logical operators](#logical-operators)
- JavaScript supports Logical operators AND (`&&`), OR (`||`), and NOT (`!`).
- As logical expressions are evaluated left to right, they are tested for possible "short-circuit" evaluation using the following rules:

   - `false && anything` is short-circuit evaluated to false.
   - `true || anything` is short-circuit evaluated to true.
   
### [Ternary (conditional) operator](#ternary-(-conditional-)-operator)

The conditional operator is the only JavaScript operator that takes three operands. The operator can have one of two values based on a condition. The syntax is:

```javascript
condition ? val1 : val2
```
If condition is `true`, the operator has the value of `val1`. Otherwise it has the value of `val2`.

For example,

```javascript
var age = 20;
var status = (age >= 18) ? 'adult' : 'minor'; // value of status is 'adult'
```

### Binding

Since JavaScript is an interpreted language, all variables and operators are bound at run-time. In other words, JavaScript uses dynamic binding.

## [References](#references)


https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords

https://google.github.io/styleguide/jsguide.html#naming

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators

https://eloquentjavascript.net/04_data.html
