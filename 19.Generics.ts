// Generics are types conected to another type, for ex the type Array:
const names: any[] = [];
// This is the same as:
const otherNames: Array<string> = [];

// We can use it on promises, where TS cant know the result type unless we tell it:
const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done!");
  }, 2000);
});
