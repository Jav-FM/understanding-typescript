// You can "create" your own styles by asign type aliaces

type Combine = string | number;
type Status = "on" | "off";

// A more complex example
type User = { name: string; age: number };
let myUser: User;
myUser = { name: "Max", age: 2 };
