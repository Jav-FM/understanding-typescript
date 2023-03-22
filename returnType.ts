// Typescript inferes the type of the result
// In this example, if you put the mouse over 'Add',
// you will be the type number after => (that is the result type)
const Add = (n1: number, n2: number) => {
  return n1 + n2;
};

// In this other example, as we are combining number with string
// the infired result type is string
const Combine = (n: number, s: string) => {
  return n + s;
};

// We can define the type:
const AddWithDefinedReturnType = (n1: number, n2: number): number => {
  return n1 + n2;
};

// If the function doesn't return anything, the return type will be "void"
const voidReturnTypeFunction = () => {
  console.log("holi");
};
