//Allows us to define multiple function signatures for one and the same function.
//We can have multiple possible ways of calling a function with different parameters

//Ex:
const addValues = (a: string | number, b: string | number) => {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
};

const addValuesResult = addValues(1, 5);
//In this case, TS wont know if addValuesResult is a number or a string

//We can resolve this using function overload:
function addValuesOverloaded(a: number, b: number): number; //What hapens if parameters are number
function addValuesOverloaded(a: string, b: string): string; // What apens if parameters are string
function addValuesOverloaded(a: string | number, b: string | number) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

//Now TS knows that this result is a number:
const addValuesOverloadedResult = addValuesOverloaded(1, 5);
