// Vias to run a code if some variable has some type

//1) The most common: typeOf (by javascript)
type StringOrNumber = string | number;
const addFunction = (a: StringOrNumber, b: StringOrNumber) => {
  // Type guard:
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
};

// 2) For objects, see if it contains the param
type House = {
  address: string;
};
type Building = {
  address: string;
  floorNumber: number;
};
type Construction = House | Building;
const printNumberOfFloors = (target: Construction) => {
  // Type guard:
  if ("floorNumber" in target) {
    console.log(target.floorNumber);
  }
};

// 3) On classes, we can use "instanceOf"
class Car {
  drive() {
    console.log("Driving a car...");
  }
}
class Truck {
  drive() {
    console.log("Driving a truck...");
  }
  loadCargo(amount: number) {
    console.log("Loading cargo..." + amount);
  }
}

type Vehicle = Car | Truck;
const v2 = new Truck();

const useVehicle = (vehicle: Vehicle) => {
  //Type guard:
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
  vehicle.drive();
};

// 4) Discriminated Unions
//When working with object type, as an interface
interface Bird {
  // discriminated union:
  type: "bird";
  flyingSpeed: number;
}
interface Horse {
  // discriminated union:
  type: "horse";
  runningSpeed: number;
}
type Criature = Bird | Horse;

const moveCriature = (criature: Criature) => {
  let speed: number;
  // Using discriminated union:
  if (criature.type === "bird") {
    speed = criature.flyingSpeed;
  } else {
    speed = criature.runningSpeed;
  }
  console.log("Moving with speed: ");
};
