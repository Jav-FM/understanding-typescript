// It allows us to save any type of value
let userInput: unknown;

userInput = 5;
userInput = "Max";

// But is not as flexible as any. Any disables all type of checking, unknown doesnt
// example:

// If we use unknown instead of any, userName assignment will show us an error.
let anyrUserInput: any;
let userName: string;

(anyrUserInput = 5), (anyrUserInput = "Max");
userName = anyrUserInput;

// But in this case, we first confirm that the unknownUserInput is a string,
// so we dont have an error:
let unknownUserInput: unknown;
(unknownUserInput = 5), (unknownUserInput = "Max");
if (typeof unknownUserInput === "string") {
  userName = unknownUserInput;
}
