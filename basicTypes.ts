//Examples of definition of type on function parameters)
const add = (n1: number, n2: number, showResult: boolean, phrase: string) => {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  }
  return result;
};

const numberOne = 5;
const numberTwo = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";

const result = add(number1, number2, printResult, resultPhrase);
