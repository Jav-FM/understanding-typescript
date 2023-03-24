// Sometimes functions NEVER will return anything (even an undefined)
// For example, when we have a function that always throw an error,

const generateError = (message: string, code: number) => {
  throw { message, errorCode: code };
};

// In this function, the return type is "never"
