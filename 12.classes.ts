// We can define types for the properties of a class:
class Department {
  //properties:
  name: string;
  // constructor method:
  constructor(n: string) {
    this.name = n;
  }
  // other methods:
  describe() {
    console.log("Department: " + this.name);
  }
}
// Creating an instance with the constructor method:
const accountingDepartment = new Department("Accounting");
// Using the describe method of this instance:
accountingDepartment.describe();

// Example with private, public and readonly properties (only accessible throw methods of the class itself)
// ***If wants a private propertie to be accesible from the inherit classes, use "protected" instead
// private, protected, public and readonly are keywords introduced by typescript:
class Team {
  public name: string;
  protected employees: string[] = [];
  private readonly id: number;
  constructor(n: string, id: number) {
    this.name = n;
    this.id = id;
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeesInformation() {
    console.log(this.id, this.employees);
  }
}

// Example of inheritance
class ITTeam extends Team {
  admins: string[];
  constructor(id: number, admins: string[]) {
    super("ITTeam", id);
    this.admins = admins;
  }
}
const myITTeam = new ITTeam(1, ["Jav"]);
console.log(ITTeam);

// Example of getter and setter
class ITDepartment extends Department {
  private reports: string[] = [];
  constructor(n: string) {
    super(n);
  }
  // getter:
  get departamentReports() {
    if (this.reports.length > 0) {
      return this.reports;
    }
    throw new Error("No reports found.");
  }
  // setter:
  set departamentReports(r: string[]) {
    this.reports = r;
  }
}
const myItDepartment = new ITDepartment("ITDepartment");
//Excecuting a setter (as a property, not as a method)
myItDepartment.departamentReports = ["Report 1", "Report 2"];

//Excecuting a getter (as a property, not as a method)
console.log(myItDepartment.departamentReports);
