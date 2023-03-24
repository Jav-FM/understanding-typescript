// ARRAYS
// type inference define this array as an array of strings ( string[] )
let hobbies = ["Sports", "Cooking"];
// We can pre-define the type of array:
let favoriteActivities: string[];
// If we need a flexible array, we can define type as any:
let allTypeAcceptedArray: any[];

// TUPLES (Arrays with exact length and types)
let myTuple: [number, string];
// This tuple will only accept one number and one string, on that order.
