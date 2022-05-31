// LOOP

// while
let n = 0;
while (n < 3) {
  console.log(n);
  n++;
}

// do while
let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);
// for
for (let step = 0; step < 5; step++) {
    // Runs 5 times, with values of step 0 through 4.
    console.log('Walking east one step');
}

// for in -- iterate over property's name
let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
for (let i in person) {
    console.log(i + ' = ' + person[i]);
}

// for of -- iterate over values
const arr = [3, 5, 7];
arr.foo = 'hello';

for (let i in arr) {
   console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr) {
   console.log(i); // logs 3, 5, 7
}


// FUNCTION
function multiply(a, b) {
    return a * b;
}

console.log(multiply(4, 5));

function factorial (n) {
    if (n == 0) {
        return 1;
    }
    return n * factorial(n-1);
}

console.log(factorial(1));


// PASS BY REFERENCE OR VALUES
function test(a) {
    a = 5;

}

const x = 7;
test(x)
console.log (x);

const a = [3, 2, 1];

function test_1 (a){
    a[0] = 1;
}


test_1(a);
console.log(a);
//output: [1, 2, 1]

const b = [3, 2, 1];

function test_2 (a){
    a = [5, 2, 4];
}


test_2(b);
console.log(b);
//output: [3, 1, 1]

