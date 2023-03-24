//Allows us to create objects wich are more flexible
//regarding the properties they might hold.

// Example with interface:
interface ErrorContainer {
  //Index type:
  [prop: string]: string;
  //Indica que las propiedades que sean añadidas, deben tener un nombre en string y un valor en string
}

// Ahora podemos crear objetos que cumplan con esa norma: propiedades con nombre en string y valor en string
const errorBag: ErrorContainer = {
  email: "Not a valid email",
  name: "The name is not valid",
};
