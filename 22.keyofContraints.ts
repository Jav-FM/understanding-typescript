// A specific type of contraints is the keyof,
// to corroborate that a parameter is a key of another parameter
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

extractAndConvert({ name: "holi" }, "name");
