//They always need a class..

//1) When decorator is for a property, gets two arguments:
function Log(target: any, propertyName: string | Symbol) {
  console.log("Property decorator!");
}

//2) Decorator for accessors, that recives 3 arguments
function Log2(
  target: any,
  nameOfAccesor: string,
  descriptor: PropertyDescriptor
) {
  console.log("Accesor decorator");
  //Can return a new PropertyDescriptor (if you want)
}

//3) Decorator for methods, that recibes 3 arguments
function Log3(
  target: any,
  nameOfMethod: string | symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method decorator");
  //Can return a new PropertyDescriptor (if you want) Ex:
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFunction = originalMethod.bind(this);
      return boundFunction;
    },
  };
  return adjDescriptor;
}

//4) Decorator for a parameter
function Log4(
  target: any,
  nameOfMethod: string | symbol,
  positionOfArg: number
) {
  console.log("Argument decorator");
}

class Product {
  //Adding decorator to a property:
  @Log
  title: string;
  private _price: number;

  //Adding accesor decorator:
  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price");
    }
  }

  //Ading method decorator:
  @Log3
  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }

  //adding parameter decorator
  constructor(@Log4 t: string, p: number) {
    this.title = t;
    this._price = p;
  }
}
