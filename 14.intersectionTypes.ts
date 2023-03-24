// Interseption Types allow us to combine other types
// Example:
type Admin = {
  name: string;
  privileges: string[];
};
type Employee = {
  name: string;
  startDate: Date;
};
// Combination of the last two:
type EvelatedEmployee = Admin & Employee;

//Other example:
type Combinable = string | number;
type Numeric = number | boolean;
// Combination of the last two:
type Universal = Combinable & Numeric;
