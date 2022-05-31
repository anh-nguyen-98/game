# Selection Control Structures

All code samples for this file can be found at [selection-control.js](https://github.com/anh-nguyen-98/introduction-to-javascript/blob/main/selection-control.js).

## [Boolean values](#boolean-values)

* JavaScript has two boolean values: `true` and `false`
* These values of JavaScript are considered as falsy, meaning that they are evaluated as `false` boolean value.
    - `false`
    - `undefined`
    - `null`
    - `0`
    - `NaN`
    - the empty string (`""`)
    
* Values that are not falsy are evaluated to `true`.

## [Conditional statements](#conditional-statements)

* A conditional statement is a set of commands that executes if a specified condition is true. JavaScript supports two conditional statements: `if...else` and `switch`.

### [If else](#if-else)

#### [Single condition](#single-condition)
* JavaScript has the following `if...else` single condition syntax:

```javascript
if (condition) {
  statement_1;
} else {
  statement_2;
}
```
* `condition` can be any expression that evaluates to `true` or `false`. 
* If `condition` evaluates to `true`, `statement_1` is executed. Otherwise, `statement_2` is executed. 
* `statement_1` and `statement_2` can be any statements.


#### [Multiple condition](#multiple-condition)
* JavaScript also has the multiple condition syntax `if...else if...else`

```javascript
if (condition_1) {
  statement_1;
} else if (condition_2) {
  statement_2;
} else if (condition_n) {
  statement_n;
} else {
  statement_last;
}
```

* Notice that only the first logical condition which evaluates to `true` will be executed.

### [Switch case](#switch-case)

* Please refer to [Switch case](#switch-case).

## [Code delimition](#code-delimition)

A block statement is used to group statements in control flow statements (e.g. `if...else`). The block is delimited by a pair of curly brackets:

```javascript
{
  statement_1;
  statement_2;
  ⋮
  statement_n;
}
```

## [Short circuit](#short-circuit)

* JavaScript uses "short-circuit" evaluation with the following rules:

```
false && anything is short-circuit evaluated to false.
true || anything is short-circuit evaluated to true.
```

* `anything` part is not evaluated.
* The Nullish coalescing operator (`??`) is used to return the second expression, when the first one is `null` or `undefined`. Otherwise, the first expression is returned. 

## [Switch case](#switch-case)

* A `switch` statement has the following syntax:

```javascript
switch (expression) {
  case label_1:
    statements_1;
    break;
  case label_2:
    statements_2;
    break;
    …
  default:
    statements_default;
}
```

* Switch-case statement works like this
  * `expression` is evaluated once to a value.
  * The value of the `expression` is then compared to the `label` of each `case` from top to bottom.
    * If the `label` of one `case` is matched, the statements associated with the case is executed.
      * If `break` is found at the end of the statements, then the program breaks out of `switch` once the matched statement is executed, and then continues execution at the statement following `switch`.
      * If no `break` is found, then the program continues executing the statements associated with the following `case`.
    * If none of the labels are matched, then:
      * If `default` statement is found, then the program executes the statements associated with the `default`.
      * If no `default` statement is found, then the program continues execution at the statement following `switch`.

## [References](#references)

* [Control flow and error handling](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
* [Nullish coalescing operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)
* [Logical short circuit](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators)
* [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)


