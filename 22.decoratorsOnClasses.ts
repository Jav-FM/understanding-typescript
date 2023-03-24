// Very usefull for meta-programming (code that will be used by other developers)
// Required config on tsconfig.json:
// "target": "es6"
// "emitDecoratorMetadata": true,

//A FIRST CLASS DECORATOR

//When use decorators on classes,
//they recived 1 parameter that is the target fuction or constructor:

//The decorator: (usually with capital)
function Logger(target: Function) {
  console.log("Logging");
}

//Excecuting que decorator:
@Logger
class PersonClass {
  name = "Max";
  constructor() {}
}

//The decorator is excecuted when the class is defined, not when its instantiate

// DECORATOR FACTORIE
//Allows as to create a decorator that can be configured when we are using it with something
//This way we can pass any arguments that we want, and use it inside:
function MyFactoryDecorator(myArgument: string) {
  return function (target: Function) {
    console.log(myArgument + " from my Factory Decorator");
    console.log(target);
  };
}

@MyFactoryDecorator("Hola!")
class Greeting {
  constructor() {
    console.log("Greeting created");
  }
}

//A more useful example:

//Here it look for an element on DOM with the hookId as id,
// and renders a template in it if exists
function WithTemplate(template: string, hookId: string) {
  return function (_: Function) {
    const hookEl = document.getElementById(hookId);
    if (hookEl) {
      hookEl.innerHTML = template;
    }
  };
}

@WithTemplate("<h1>My Dom Element</h1>", "app")
class DomElement {
  constructor() {}
}

//Adding multiple decorators:
//We can use any decorators we want. they excecute from top of bottom,
// but the functions inside runs from bottom to top
@Logger
@WithTemplate("<h1>My Dom Element</h1>", "app")
class ExampleClass {
  constructor() {}
}
