// Help us to tell TS the type of an element when TS cant detect it
// Ex: when gettin an element from html with the id:
const userInputElement = document.getElementById("user-input");
// TS only knows that the element is an HTMLElement (or is null if it doesnt exist)

//Two syntax for type casting:
// 1)
const userInputElement2 = <HTMLInputElement>(
  document.getElementById("user-input")
);

// 2) (this one avoid clash with the JSX on React)
const userInputElement3 = document.getElementById(
  "user-input"
) as HTMLInputElement;

// *Exclamation mark:
// Allows us to tell TS that the expression will never return null
//Ex:
const myButton = document.getElementById("myButton")!;
