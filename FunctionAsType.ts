// We can asign the Function type to a variable:
let myFutureFunction: Function;

// We can describe the function trought Function type,
//including the parameters and the return
// This variable will allow only a function with no parameters and a return type of number
let myFutureFunctionTwo: () => number;
// This one will allow a function with a string parameter and a return type of string
let myFutureFunctionThree: (myParameter: string) => string;

// We can also describe a callback function into a Function type
let functionWithCallback: (
  param1: number,
  callback: (paramOfCallback: number) => void
) => void;
