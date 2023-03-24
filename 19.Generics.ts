// Generics are types conected to another type

// 1) for ex the type Array:
const names: any[] = [];
// This is the same as:
const otherNames: Array<string> = [];

// 2) Promise is another generic
// On promises, TS cant know the result type unless we tell it:
const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done!");
  }, 2000);
});

// 3) We can create generic functions
// Lets take this example of a regular function:
function merge(objA: object, objB: object) {
  return { ...objA, ...objB };
}

const mergerObj = merge({ name: "Jav" }, { age: 33 });
//We cant access now to mergeObj.name now, because TS doesnt know it exist

//So we can create a generic function:
function genericMerge<T, U>(objA: T, objB: U) {
  return { ...objA, ...objB };
}

//TS inferes that this function return the interception between T and U (T & U)
const newMergedObj = genericMerge({ name: "Jav" }, { age: 33 });

//Al momento de ejecutar la funcion es cuando se genera el tipo de cada argumento,
// ocurre algo como esto:
// function genericMerge(objA: {name: "Jav"}, objB: {age: 33}) {
//     return {...objA, ...objB}
// }
