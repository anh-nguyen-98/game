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

studentC.introduceSelf();
prof.instroduceSelf();
