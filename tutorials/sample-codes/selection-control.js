// Single conditional statement
var x = 3;
var y = 4;
if (x == y) {
  console.log("x is equal to y");
} else {
  console.log("x is not equal to y");
}
// expected output: x is not equal to y


// Multiple conditional statement
if (x == y) {
  console.log("x is equal to y");
} else if (x < y) {
  console.log("x is less than y");
} else {
  console.log("x is greater than y");
}
// expected output: x is less than y


// Switch-case with break
var fruitType = "Bananas";

switch (fruitType) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Apples':
    console.log('Apples are $0.32 a pound.');
    break;
  case 'Bananas':
    console.log('Bananas are $0.48 a pound.');
    break;
  case 'Cherries':
    console.log('Cherries are $3.00 a pound.');
    break;
  case 'Mangoes':
    console.log('Mangoes are $0.56 a pound.');
    break;
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    break;
  default:
    console.log(`Sorry, we are out of ${fruitType}.`);
}
// expected output: Bananas are $0.48 a pound.

// Switch-case without break
switch (fruitType) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Apples':
    console.log('Apples are $0.32 a pound.');
    break;
  case 'Bananas':
    console.log('Bananas are $0.48 a pound.');
    // break;
  case 'Cherries':
    console.log('Cherries are $3.00 a pound.');
    break;
  case 'Mangoes':
    console.log('Mangoes are $0.56 a pound.');
    break;
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    break;
  default:
    console.log(`Sorry, we are out of ${fruitType}.`);
}
// expected output: Bananas are $0.48 a pound. Cherries are $3.00 a pound.

// Nullish coalescing operator
const foo = null ?? 'default string';
console.log(foo);
// expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// expected output: 0

