//An interface describes the structure of an object.
// INTERFACES
//In this case is not a blueprint, is just a custom type
//Example:
interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
}

let user1: Person;

//It should has the structure that we define:
user1 = {
  name: "Jav",
  age: 33,
  greet(param: string) {
    console.log(param);
  },
};

// OPTIONAL PARAMETERS & PROPERTIES
interface Animal {
  name: string;
  footNum?: number;
}

// USING INTERFACES ON CLASSES:
interface Greetable {
  name: string;
  greet(phrase: string): void;
}
//The class must have the structure of the interface
//(but it can have more properties and methods too)
class Person implements Greetable {
  name: string;
  constructor(n: string) {
    this.name = n;
  }
  greet(phrase: string) {
    console.log(this.name + " says " + phrase);
  }
}
//* We can implement more than one interface on a class

//Interface can use the readonly property, so they only can be set once:
interface UserAccount {
  readonly userId: number;
  name: string;
}

// EXTENDING INTERFACES
//You can have inheritance on interfaces
interface AdminAccount extends UserAccount {
  readonly adminDomain: number;
}

// INTERFACES AS FUNCTION TYPES
//You can define a structure of a function using interfaces instead of function types:
// For example for this function type:
// type AddFn = (a: number, b: number) => number
// We can do it with interfaces:
interface AddFn {
  (a: number, b: number): number;
}
let myAddFn: AddFn;
myAddFn = (n1: number, n2: number) => {
  return n1 + n2;
};
