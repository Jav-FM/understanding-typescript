// Permite aceptar más de un tipo como parámetro, por ej acá se aceptan numeros o strings:
const combine = (input1: number | string, input2: number | string) => {
  //No podemos simplemente retnornar input1+input2,
  //porque typescript no sabe qué variedad de tipos estamos aceptando.
  //En estos casos hay que dar una vuelta más larga para dar esta flexibilidad:
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
};

const combinedAges = combine(30, 36);

const combinedNames = combine("Max", "Anna");

console.log(combinedAges); // Da 66
console.log(combinedNames); // Da MaxAnna
