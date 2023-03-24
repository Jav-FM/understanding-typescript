//This generic types are added on TS by default and has diferent uses:

// PARTIAL
//Allows us to create the type by steps without get an error:
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  //Partial:
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  //Now we re-transform the result to the return type expected by de function:
  return courseGoal as CourseGoal;
}

// READONLY
//Will avoid us to manipulate the value (for example with push or pop methods)
const myNames: Readonly<string[]> = ["Jav", "Javi"];
