// number => 2 to the power of 53
// BigInt => 2 to the power of 53 + 1
// string => "hello world"
// boolean => true or false
let isLoggedIn = true;
// null => no value
let temp = null;
// undefined => no value
let num;
// symbol => unique value
let sym1 = Symbol("sym1");
// object => collection of key-value pairs

console.log(typeof isLoggedIn); // boolean
console.log(typeof temp); // object (null is an object in JS)
console.log(typeof null); // object (null is an object in JS)
console.log(typeof num); // undefined
console.log(typeof sym1); // symbol
console.log(typeof {}); // object
console.log(typeof []); // object (array is an object in JS)
console.log(typeof undefined); // undefined
console.log(sym1); // Symbol(sym1)

console.log(typeof isLoggedIn); // boolean
console.log(typeof temp); // object (null is an object in JS)
