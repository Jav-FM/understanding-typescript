//Object type definition:
let person: { name: string; age: number };

person = {
  name: "Javi",
  age: 33,
};

//Type inference:
const person2 = { name: "Sergio", age: 35 };

//Those two objects has the same type definition.

console.log(person);
