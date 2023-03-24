//Instead of some type of value, we expect an exact value

//On this constant the type inference determine that the "type" is 2, a specific value
const number1 = 2;

//On this variable it inferes that type is number, not an specific value
let number2 = 2;

//Permite por ejemplo limitar las opciones de valores a parametros:
// En este ejemplo, status solo puede ser un string con valor 'on' o 'off'
const myFunction = (status: "on" | "off") => {
  if (status === "on") {
    console.log("We are on!");
  }
};
