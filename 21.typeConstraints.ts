//Following with the example of Generic.ts,
//on this function we are not restricted the type of T and U
function genericMergeWithoutRestrictedType<T, U>(objA: T, objB: U) {
  return { ...objA, ...objB };
}

//For restrict it, we can use type constraints:
function genericMergeWithRestrictedType<T extends object, U extends object>(
  objA: T,
  objB: U
) {
  return { ...objA, ...objB };
}
//You can use any type, or union types if you like.

//Another example
interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T) {
  let descriptionText = "Got no value.";
  if (element.length > 0) {
    descriptionText = "Got " + element.length + " element(s).";
  }
  return [element, descriptionText];
}
//Considering that strings are javascript objects that have the length property,
//this will works:
console.log(countAndDescribe("Hi there!"));
//An array also is a JS object with length property, so this will work too:
console.log(countAndDescribe(["holi", "adios"]));
//And of course, we can use an object with the length property:
console.log(countAndDescribe({ length: 2 }));
