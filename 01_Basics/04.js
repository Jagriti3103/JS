// Primitive - how data is accessed and stored
// 7 types : string, number, boolean, null, undefined, symbol, BigInt.

const score = 47
const value = false
const temp = null
const bigInt = 12345678987654321n

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id== anotherId);
//non-Primitive or reference datatype
// reference directly into memory
// Array, Objects and Functions
const names = ["Jags","abc","bcd","xyz"];
let myObj = {
    name:"Jagriti",
    age: 20,
}
//typeof- null is object, undefined is undefined.
console.log(typeof temp);
console.log(typeof value);
console.log(typeof bigInt);