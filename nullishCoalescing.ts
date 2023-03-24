//NULLISH COALESCING
//Helps us deal with null data

const myPosibleNull = null;
const saveItIsNotNull = myPosibleNull ?? "DEFAULT";
// The diference with || is that in the case of ?? it will only
// store 'DEFAULT' if the value is really a null or an undefine. It will not
// work is the value is a 0 or an empty string.

//* OPTIONAL CHAINING
// As on modern JS, we can validate if an object existe before we ask of a property:
const exist = { itExist: true };
const ifExist = exist?.itExist;
